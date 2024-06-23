import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

// import { TranslatorProvider, useTranslate } from 'react-translate';

// const locales = ['en', 'de'];
// export function generateStaticParams() {
//   return locales.map((locale) => ({locale}));
// }

 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  let translations = {
    locale: "en",
    Home: {
      "HELLO": "Helloworld!"
    }
  };

  

  // Providing all messages to the client
  // side is the easiest way to get started
  // const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        {/* <NextIntlClientProvider messages={translations}> */}
          {children}
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}



 



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (

//     <html >
// //       <body>
// //        
// //           {children}
// //       
// //       </body>
// //     </html>

//   );
// }
