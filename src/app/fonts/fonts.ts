import { Montserrat, Sixtyfour, Lusitana, DotGothic16,Nunito } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });
export const sixtyfour = Sixtyfour({ subsets: ['latin'] });
export const lusitana = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });
export const nunito = Nunito({ weight: ['400', '700'], subsets: ['latin'] });
export const dotGothic16 = DotGothic16({
    subsets: ['latin'],
    weight: '400'
}); 
