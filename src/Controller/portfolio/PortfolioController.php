<?php

namespace App\Controller\portfolio;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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
}
