<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class PortfolioControllerTest extends WebTestCase
{
    public function testPageAccueil()
    {
        $client = static::createClient();

        // Tester la page d'accueil en français
        $crawler = $client->request('GET', '/fr');

        // Vérifie que la réponse HTTP est 200 OK
        $this->assertResponseIsSuccessful();

        // Vérifie que le container React est présent dans le HTML
        $this->assertSelectorExists('#id-portfolio');

        // Tu peux aussi vérifier le titre de la page
        $this->assertSelectorTextContains('title', 'Portfolio');
    }

    public function testPageAccueilEnglish()
    {
        $client = static::createClient();

        // Tester la page d'accueil en anglais
        $crawler = $client->request('GET', '/en');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorExists('#id-portfolio');
        $this->assertSelectorTextContains('title', 'Portfolio');
    }

    public function testPageMentionsLegales()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/fr/mentions-legales');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorExists('#id-mentionslegales');
        $this->assertSelectorTextContains('title', 'Mentions légales');
    }
    public function testContactSendSuccess()
{
    $client = static::createClient();

    $data = [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'message' => 'Ceci est un message de test.',
    ];

    $client->request(
        'POST',
        '/contact/send',
        [],
        [],
        ['CONTENT_TYPE' => 'application/json'],
        json_encode($data)
    );

    // Vérifie que la réponse HTTP est 200 OK
    $this->assertResponseIsSuccessful();

    // Vérifie que la réponse est bien du JSON avec success = true
    $responseContent = $client->getResponse()->getContent();
    $json = json_decode($responseContent, true);

    $this->assertIsArray($json);
    $this->assertArrayHasKey('success', $json);
    $this->assertTrue($json['success']);
}

}
