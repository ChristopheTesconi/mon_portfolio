import{j as e,c as s}from"./client-DrRGiZqB.js";const o="Mentions légales",i="Éditeur du site",c=`Ce site est édité par Christophe Tesconi, développeur web indépendant.
Contact : chris.tesconi@gmail.com`,l="Hébergement",r=`Le site est hébergé par :
o2switch, SARL au capital de 100 000 €
SIRET : 510 909 80700024
Adresse : 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand
Téléphone : 04 44 44 60 40`,a="Données personnelles",d=`Aucune donnée personnelle n’est collectée sans votre consentement.
Ce site ne fait pas usage de cookies à des fins de tracking.`,h="Propriété intellectuelle",p="Tous les contenus présents sur ce site (textes, images, code, etc.) sont la propriété exclusive de Christophe Tesconi, sauf mention contraire.",u={title:o,editorTitle:i,editorContent:c,hostTitle:l,hostContent:r,dataTitle:a,dataContent:d,ipTitle:h,ipContent:p},T="Legal Notice",x="Site Publisher",C=`This site is published by Christophe Tesconi, freelance web developer.
Contact: chris.tesconi@gmail.com`,m="Hosting",j=`The site is hosted by:
o2switch, SARL with a capital of €100,000
SIRET: 510 909 80700024
Address: 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France
Phone: +33 4 44 44 60 40`,g="Personal Data",f=`No personal data is collected without your consent.
This site does not use cookies for tracking purposes.`,b="Intellectual Property",v="All content on this site (texts, images, code, etc.) is the exclusive property of Christophe Tesconi, unless otherwise stated.",w={title:T,editorTitle:x,editorContent:C,hostTitle:m,hostContent:j,dataTitle:g,dataContent:f,ipTitle:b,ipContent:v};function $(){const t=(window.location.pathname.split("/")[1]||"fr")==="en"?w:u;return e.jsx(e.Fragment,{children:e.jsxs("main",{className:"mentions-legales",children:[e.jsx("h1",{children:t.title}),e.jsxs("section",{children:[e.jsx("h2",{children:t.editorTitle}),e.jsx("p",{children:t.editorContent})]}),e.jsxs("section",{children:[e.jsx("h2",{children:t.hostTitle}),e.jsx("p",{children:t.hostContent})]}),e.jsxs("section",{children:[e.jsx("h2",{children:t.dataTitle}),e.jsx("p",{children:t.dataContent})]}),e.jsxs("section",{className:"last-section",children:[e.jsx("h2",{children:t.ipTitle}),e.jsx("p",{children:t.ipContent})]})]})})}const n=document.getElementById("id-mentionslegales");n&&s.createRoot(n).render(e.jsx($,{}));
