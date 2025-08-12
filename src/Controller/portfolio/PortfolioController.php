<?php

namespace App\Controller\portfolio;

use Exception;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;

final class PortfolioController extends AbstractController
{

    #[Route('/', name: 'homepage_redirect')]
    public function homepageRedirect(): Response
    {
        // On ne fait rien ici car le LocaleListener s’en charge
        return new Response(); 
    }

    #[Route('/{_locale}', name: 'app_portfolio', requirements: ['_locale' => 'fr|en'])]
    public function index(): Response
    {
        return $this->render('portfolio/indexportfolio.html.twig');
    }

    #[Route('/{_locale}/mentions-legales', name: 'app_mentions_legales', requirements: ['_locale' => 'fr|en'])]
    public function mentionsLegales(): Response
    {
        return $this->render('portfolio/mentionslegales.html.twig');
    }

    // === MODIFICATIONS ICI : REDIRECTION DES ANCIENNES PAGES VERS LA PAGE UNIQUE ===

    #[Route('/{_locale}/contact', name: 'app_contact', requirements: ['_locale' => 'fr|en'])]
    public function contact(Request $request): RedirectResponse
    {
        $locale = $request->attributes->get('_locale') ?? 'fr';
        $url = $this->generateUrl('app_portfolio', ['_locale' => $locale]) . '#contact';
        return $this->redirect($url, 302);
    }

    #[Route('/{_locale}/messervices', name: 'app_messervices', requirements: ['_locale' => 'fr|en'])]
    public function messervices(Request $request): RedirectResponse
    {
        $locale = $request->attributes->get('_locale') ?? 'fr';
        $url = $this->generateUrl('app_portfolio', ['_locale' => $locale]) . '#services';
        return $this->redirect($url, 302);
    }

    #[Route('/{_locale}/apropos', name: 'app_apropos', requirements: ['_locale' => 'fr|en'])]
    public function apropos(Request $request): RedirectResponse
    {
        $locale = $request->attributes->get('_locale') ?? 'fr';
        $url = $this->generateUrl('app_portfolio', ['_locale' => $locale]) . '#apropos';
        return $this->redirect($url, 302);
    }

    // === FIN DES MODIFICATIONS ===

    #[Route('/contact/send', name: 'contact_send', methods: ['POST'])]
    public function send(Request $request, MailerInterface $mailer): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Validation simple
        if (!isset($data['name'], $data['email'], $data['message'])) {
            return new JsonResponse(['error' => 'Champs manquants'], 400);
        }

        // Préparation du mail
        $email = (new Email())
            ->from($data['email'])
            ->to('chris.tesconi@gmail.com') 
            ->subject('Nouveau message depuis le portfolio')
            ->text(
                "Nom : {$data['name']}\n".
                "Email : {$data['email']}\n".
                "Message :\n{$data['message']}"
            );

        try {
            $mailer->send($email);
            return new JsonResponse(['success' => true]);
        } catch (Exception $e) {
            return new JsonResponse(['error' => 'Erreur lors de l\'envoi du mail'], 500);
        }
    }
}
