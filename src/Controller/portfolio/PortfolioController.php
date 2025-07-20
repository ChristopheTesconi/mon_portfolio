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



#[Route('/{_locale}/contact', name: 'app_contact', requirements: ['_locale' => 'fr|en'])]
public function contact(): Response
{
    return $this->render('portfolio/contact.html.twig');
}

#[Route('/{_locale}/messervices', name: 'app_messervices', requirements: ['_locale' => 'fr|en'])]
public function messervices(): Response
{
    return $this->render('portfolio/messervices.html.twig');
}

#[Route('/{_locale}/apropos', name: 'app_apropos', requirements: ['_locale' => 'fr|en'])]
public function apropos(): Response
{
    return $this->render('portfolio/apropos.html.twig');
}

#[Route('/{_locale}/moncv', name: 'app_moncv', requirements: ['_locale' => 'fr|en'])]
public function moncv(): Response
{
    return $this->render('portfolio/moncv.html.twig');
}


    #[Route('/contact/send', name: 'contact_send', methods: ['POST'])]
    public function send(Request $request, MailerInterface $mailer): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Validation simple
        if (!isset($data['name'], $data['email'], $data['message'])) {
            return new JsonResponse(['error' => 'Champs manquants'], 400);
        }

        // Tu peux ajouter ici une validation plus poussée si besoin

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
