import { prisma } from '../src/app/lib/prisma'
import { hash } from 'bcrypt'

async function main() {
  const passwordHash = await hash("123456", 8)

  await prisma.user.create({
    data: {
      name: "Teste",
      email: "teste@gmail.com",
      phone: "1234567890",
      password: passwordHash,
      platform: {
        create: [
          {
            name: "SóEducador",
            imageUrl: "/courses/soeducador-logo.svg",
            url: "https://soeducador.com.br/"
          },
          {
            name: "Estetus",
            imageUrl: "/courses/stetus-logo.svg",
            url: "https://estetus.com.br/"
          }
        ]
      },
      Tool: {
        create: [
          {
            name: "E-mail",
            imageUrl: "/tool/gmail-logo.svg",
            url: "https://mail.google.com/"
          },
          {
            name: "Jira",
            imageUrl: "/tool/jira-logo.svg",
            url: "https://www.atlassian.com/br/software/jira"
          }
        ]
      }
    }
  })

  await prisma.user.create({
    data: {
      name: "Barbosa",
      email: "barbosa@example.com",
      phone: "0987654321",
      password: passwordHash,
      platform: {
        create: [
          {
            name: "SóEducador",
            imageUrl: "/courses/soeducador-logo.svg",
            url: "https://soeducador.com.br/"
          },
          {
            name: "Estetus",
            imageUrl: "/courses/stetus-logo.svg",
            url: "https://estetus.com.br/"
          },
          {
            name: "Eduhot",
            imageUrl: "/courses/eduhot-logo.svg",
            url: "https://eduhot.com.br/"
          },
          {
            name: "Edooker",
            imageUrl: "/courses/edooker-logo.svg",
            url: "https://edooker.com.br/"
          },
          {
            name: "EducDay",
            imageUrl: "/courses/educday-logo.svg",
            url: "https://educday.com.br/"
          },
          {
            name: "Zamply",
            imageUrl: "/courses/zamply-logo.svg",
            url: "#"
          }
        ]
      },
      Tool: {
        create: [
          {
            name: "E-mail",
            imageUrl: "/tool/gmail-logo.svg",
            url: "https://mail.google.com/"
          },
          {
            name: "Jira",
            imageUrl: "/tool/jira-logo.svg",
            url: "https://www.atlassian.com/br/software/jira"
          },
          {
            name: "Asana",
            imageUrl: "/tool/sana-logo.svg",
            url: "https://asana.com/pt"
          },
          {
            name: "Google Drive",
            imageUrl: "/tool/google-drive-logo.svg",
            url: "https://drive.google.com/"
          }
        ]
      }
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
