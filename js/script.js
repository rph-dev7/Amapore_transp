// =========================================================
// RC LOGÍSTICA
// SCRIPT.JS - V2
// =========================================================


// =========================================================
// CONFIGURAÇÕES
// =========================================================

const WHATSAPP_NUMBER = "5592981254975";


// =========================================================
// MENU MOBILE
// =========================================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        const isActive = nav.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            isActive
        );

    });

}


// Fecha o menu ao clicar em um link

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("active");

        }

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});


// =========================================================
// FORMULÁRIO DE ORÇAMENTO
// =========================================================

const quoteForm = document.getElementById("quoteForm");

const formMessage = document.getElementById("formMessage");


if (quoteForm) {

    quoteForm.addEventListener("submit", (event) => {

        event.preventDefault();


        // Dados do formulário

        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const origin =
            document
                .getElementById("origin")
                .value
                .trim();


        const destination =
            document
                .getElementById("destination")
                .value
                .trim();


        const service =
            document
                .getElementById("service")
                .value;


        const date =
            document
                .getElementById("date")
                .value;


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        // Validação

        if (
            !name ||
            !phone ||
            !origin ||
            !destination ||
            !service
        ) {

            formMessage.textContent =
                "Preencha todos os campos obrigatórios.";

            formMessage.style.color =
                "#e5a400";

            return;

        }


        // Nome da modalidade

        const serviceNames = {

            fluvial:
                "Transporte Fluvial",

            rodoviario:
                "Transporte Rodoviário",

            cargas:
                "Transporte de Cargas",

            veiculos:
                "Transporte de Veículos",

            outro:
                "Outra necessidade"

        };


        const serviceName =
            serviceNames[service] ||
            service;


        // Data formatada

        let formattedDate =
            "Não informada";


        if (date) {

            const dateObject =
                new Date(
                    `${date}T00:00:00`
                );


            formattedDate =
                dateObject.toLocaleDateString(
                    "pt-BR"
                );

        }


        // Montagem da mensagem

        const whatsappMessage =

`Olá, RC Logística!

Gostaria de solicitar um orçamento.

*Nome / Empresa:*
${name}

*WhatsApp:*
${phone}

*Origem:*
${origin}

*Destino:*
${destination}

*Tipo de transporte:*
${serviceName}

*Data desejada:*
${formattedDate}

*Informações adicionais:*
${message || "Não informado"}

Aguardo retorno.`;



        // Codifica a mensagem para URL

        const encodedMessage =
            encodeURIComponent(
                whatsappMessage
            );


        // Link final

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


        // Mensagem visual

        formMessage.textContent =
            "Redirecionando para o WhatsApp...";

        formMessage.style.color =
            "#5fd68a";


        // Abre WhatsApp

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );


    });

}


// =========================================================
// MÁSCARA DE TELEFONE
// =========================================================

const phoneInput =
    document.getElementById("phone");


if (phoneInput) {

    phoneInput.addEventListener(
        "input",
        (event) => {

            let value =
                event.target.value;


            value =
                value.replace(
                    /\D/g,
                    ""
                );


            if (value.length > 11) {

                value =
                    value.substring(
                        0,
                        11
                    );

            }


            if (value.length <= 10) {

                value =
                    value.replace(
                        /^(\d{2})(\d)/,
                        "($1) $2"
                    );


                value =
                    value.replace(
                        /(\d{4})(\d)/,
                        "$1-$2"
                    );

            } else {

                value =
                    value.replace(
                        /^(\d{2})(\d)/,
                        "($1) $2"
                    );


                value =
                    value.replace(
                        /(\d{5})(\d)/,
                        "$1-$2"
                    );

            }


            event.target.value =
                value;

        }
    );

}


// =========================================================
// ANO AUTOMÁTICO DO RODAPÉ
// =========================================================

const currentYear =
    new Date().getFullYear();


const footerYear =
    document.getElementById(
        "footerYear"
    );


if (footerYear) {

    footerYear.textContent =
        `© ${currentYear} RC Logística. Todos os direitos reservados.`;

}