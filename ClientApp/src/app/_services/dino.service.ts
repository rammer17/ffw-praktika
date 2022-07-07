import { Injectable } from "@angular/core";
import { IDino } from "../_models/dino.model";

@Injectable({
    providedIn: 'root'

})
export class DinoService {
    DinoList: IDino[] = [
        {
            id: 1,
            title: 'Бронтозавър',
            description: 'Име, което означава "гръмовен гущер". По-правилно наричано Apatosaurus, това животно е спадало към зауроподната група на потиснатите от влечугите динозаври. Както и други зауроподи (както Diplodocus(, той достигал огромни размери : около 20 m дължина и 30 тона мас. Имал малък череп, много дълга шия и опашка и четири масивни крака. Apatosaurus е известен от скали с възраст 150 милиона години в Северна Америка и Европа. Малките им зъби и огромните бъчвовидни тела сочат, че зауроподите са били тревоядни.',
            price: 12000
        },
        {
            id: 2,
            title: 'Алозавър',
            description: 'Алозавърът е ранен вид на голям месояден динозавър, живял преди 155 до 150 милиона години през последния юрски период в Африка, Северна Америка. Името Allosaurus на гръцки означава "друг гущер", те също се наричат "юрски левове". Това е двукрак хищник с голям череп, мощна челюст, остри зъби. Алозавърът е средно с дължина 9 м, височина 3,5 м и е тежал 1,5-4 тона.',
            price: 16000
        },
        {
            id: 3,
            title: 'Спинозавър',
            description: 'Спиноз  авърът е голям месояден динозавър от семейство спинозаври, живял в Кредата от 112 до 97 милиона години в Северна Африка. Два вида спинозаври са кръстени в зависимост от регионите, в които са намерени останките им: египетски и марокански спинозаври. Името „спинозавър“ означава „шипков гущер“, защото дългите спиновидни процеси на прешлените с дължина около 2 м, които са свързани с кожата и образуват огромна перка на гърба под формата на платно, нараснали на гърба на животното. Спинозавърът е с дължина от 12 до 18 м и тегло от 7 до 21 тона. Спинозавърът има дълги тесни челюсти с конусни зъби, поради анатомичната прилика с крокодили. Спинозавърът се хранил на суша и водна плячка, живеейки на сушата и във вода, като съвременен крокодил.',
            price : 50000
        },
        {
            id: 4,
            title: 'Т-Рекс',
            description: 'Тиранозавърът е представител на семейство тиранозавриди, живяло преди около 68-66 милиона години през късния Креда в западния регион на Северна Америка.Тиранозавърът беше двукрак хищник с мускулесто тяло, дълга тежка опашка и масивен череп. Той беше дълъг до 12,3 м, височина 3-4 м с тегло от 8 до 14 тона.В сравнение с големите и здрави крака, предните крайници на този динозавър бяха къси, но необичайно мощни за размерите си и имаха 2 пръста с големи нокти. Силата на ухапване от тиранозавър беше три пъти по-голяма от силата на бяла акула, което го прави най-силният и свиреп земен хищник. Тиранозаврите ловували хадрозаври, анкилозаври, кератопи и савроподи',
            price : 60000
        },
        {
            id: 5,
            title: 'Диплодок',
            description: 'На дължина (заедно с шията и опашката) диплодоците са достигали до 70 m, но учените смятат, че размера на най-големите видове вероятно е достигал до 80 m.Костите на шията и опашката на диплодока са били кухи. Средното тегло на един екземпляр е варирало от 20 до 80 тона. Диплодокът е имал дълга шия, която се е състояла от 15 прешлена, вероятно изпълнени с въздушни мехурчета. Черепът му съдържал нечифтова носна кухина, разположена не на върха на муцуната, а на върха на главата, в предната част на очите. Зъбите му са били разположени изцяло в предната част на устата. Крайниците на диплодока са били с пет пръста, по които е имало къси и масивни нокти. Дългата опашка на диплодока завършвала с тънък „камшик“, който бил използван за самозащита.',
            price : 23000
        },
        {
            id: 6,
            title: 'Патаготитански майор',
            description: 'Наскоро получил името си завропод се оказва не само най-големият динозавър, известен досега, но и най-голямото сухоземно животно, обитавало някога Земята.Това е заключението на първото научно описание на особено голям титанозавър, който бродел из териториите на сегашна Аржентина по време на периода креда. Наречен Patagotitan mayorum, дълговратият бегемот е живял преди около 102 милиона години, вероятно е бил дълъг около 36 метра и е тежал 69 тона или колкото 12 африкански слона (най-едрия сухоземен обитател на Земята понастоящем).',
            price : 90000
        },
        {
            id: 7,
            title: 'Археоптерикс',
            description: 'Смятан е за най-първата птица. И е единствената, чиито пера завършват с нокти. Като всички птици обичал червеи и насекоми. Той не кълвял храната, а я насочвал към устата си с помощта на крилата;',
            price : 5000
        },
        {
            id: 8,
            title: 'Птеродактил',
            description: 'Птеродактилът е изучен от над 30 екземпляра вкаменелости и докато повечето от тях са на млади образци, много са съхранили цели скелети. Pterodactylus antiquus е бил относително малък птерозавър с прогнозиран максимален размах на крилата до 1,04 m (единственият запазен възрастен образец е представен от един череп).Черепите на възрастните птеродактили са издължени и тънки с около 90 тесни и конусовидни зъби. Зъбите излизат от двете краища на челюстите и се смаляват с отдалечаване от челюстта, за разлика от някои подобни видове, при които зъбите излизат само от горната част на челюстите и са относително еднакви по размер. Също така, за разлика от подобните видове, черепът и челюстите са прави, а не изкривени нагоре ',
            price : 8000
        },
        {
            id: 9,
            title: 'Аргентавис',
            description: 'Живял е в Южна Америка и се предполага, че е бил подобен по външен вид (с изключение на размерите) и поведение на кондора. За първи път фосили са намерени в солни наноси по река Салинас Грандес (Ла Пампа, Аржентина) през 1979 г. Предполага се, че подобно на Кондорите е използвал възходящите въздушни течения за да полети след което е планирал. Смята се, че е бил мършояд. Най-вероятно е можел да измине 100 – 200 км. на ден. Птицата наистина е била огромна сравнена с най-големите съвременни летящи птици., (Дропла – 15 – 20 кг и Странствуващ Албатрос – 3 – 3,5 m размах на крилете.). Намерени са малко фосили и нито един запазен скелет. ',
            price : 33000
        },
        {
            id: 10,
            title: 'Ихтиозавър',
            description: 'Ихтиозаврите са живораждащи, като размера на малкото е голям, както при съвременните китове. За разлика от китовете, обаче са разчитат основно на зрението си (а не на слуха). Ихтиозаврите процъфтяват през по-голямата част от мезозойската ера. Съдейки по фосилите, те се появяват за първи път преди около 250 милиона години и поне един вид е оцелял до преди около 90 милиона години, в късната креда.',
            price : 34000
        },
        {
            id: 11,
            title: 'Мегалодон',
            description: 'Точната форма на тялото на мегалодона не може да бъде възстановена, тъй като най-разпространените останки от този вид са зъбите – те наподобяват зъбите на бялата акула, но са по-назъбени и по-големи (до 18 cm). Липсата на повече останки се обяснява от факта, че скелетът на мегалодона е бил изграден от хрущял, а не от кост. Все пак, изхождайки от приликата между зъбите на мегалодона и съвременната бяла акула, някои учени предполагат, че формата на тялото на праисторическата хищна риба е наподобявала тази на бялата акула.Предполага се, че мегалодонът е достигал 18 метра дължина и тежест до 60 тона. В по-старата литература се посочва, че видът е достигал до размери от 30 метра и 120 тона, но това се дължи по-скоро на погрешни изчисления. ',
            price : 50000
        },
        {
            id: 12,
            title: 'Мозазавър',
            description: 'Мозазаврите (Mosasaurus) са род големи гущероподобни хищници от семейство Мозазаврови (Mosasauridae). Обитавали са плитки епиконтинентални морета и крайбрежните им зони, обхващащи през късната креда обширни територии. Според някои учени тези хищници са далечни родственици на съвременните варани и игуани. Били са толкова добре приспособени за живот в моретата, че са били живораждащи, но са дишали атмосферен въздух и са били активни плувци. Притежавали са продълговати тела и масивни челюсти. Хранели са се с риба, морски костенурки, и главоноги с помощта на добре развито подводно зрение и слух.',
            price : 25000
        },
    ];
}