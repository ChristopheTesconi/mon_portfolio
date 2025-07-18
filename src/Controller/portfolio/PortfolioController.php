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
    #[Route('/', name: 'app_portfolio')]
    public function index(): Response
    {
        return $this->render('portfolio/indexportfolio.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }

    #[Route('/mentions-legales', name: 'app_mentions-legales')]
    public function mentionslegales(): Response
    {
        return $this->render('portfolio/mentionslegales.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }

    #[Route('/contact', name: 'app_contact')]
    public function contact(): Response
    {
        return $this->render('portfolio/contact.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }

    #[Route('/messervices', name: 'app_messervices')]
    public function messervices(): Response
    {
        return $this->render('portfolio/messervices.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }

    #[Route('/apropos', name: 'app_apropos')]
    public function apropos(): Response
    {
        return $this->render('portfolio/apropos.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }

    #[Route('/moncv', name: 'app_moncv')]
    public function moncv(): Response
    {
        return $this->render('portfolio/moncv.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
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
