<?php

namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;

class LocaleListener
{
    private string $defaultLocale;
    private RouterInterface $router;

    public function __construct(string $defaultLocale = 'fr', RouterInterface $router)
    {
        $this->defaultLocale = $defaultLocale;
        $this->router = $router;
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();

        // On ignore les sous-requêtes
        if (!$event->isMainRequest()) {
            return;
        }

        // Vérifie si la route contient déjà une locale (fr ou en)
        $locale = $request->attributes->get('_locale');
        if ($locale) {
            $request->setLocale($locale);
            return;
        }

        // Sinon : on détecte la langue du navigateur
        $preferredLang = $request->getPreferredLanguage(['fr', 'en']) ?? $this->defaultLocale;

        // On redirige automatiquement vers la bonne locale sur la racine "/"
        $pathInfo = $request->getPathInfo();
        if ($pathInfo === '/') {
            $response = new RedirectResponse('/' . $preferredLang);
            $event->setResponse($response);
            return;
        }

        // Sinon, on met la locale par défaut (au cas où)
        $request->setLocale($this->defaultLocale);
    }
}
