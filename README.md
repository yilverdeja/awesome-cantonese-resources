# Awesome Cantonese Resources

A community-maintained list of **Cantonese (Yue)** learning resources: apps, courses, media, dictionaries, reference sites, grassroots projects, and more. Cantonese is spoken across Hong Kong, Macau, Guangdong, and diaspora communities worldwide. This repository exists to **celebrate the language**, make quality materials easier to find, and support learners wherever they are.

If you are new here: skim **What this list is**, jump to **How to use this list**, then open the **Table of contents** (inside the generated section below) for curated paths and the full catalog.

## What this list is

This is an [awesome-style](https://github.com/sindresorhus/awesome) index: each entry links out to a tool, course, channel, book, or community. Short blurbs come from structured data so the README and the in-repo web app stay aligned.

**Inclusion is broad**—if it helps people learn or use Cantonese, it can belong here. **Exclusion is judgment-based**: we may skip items that feel off-topic, redundant compared to a clearly stronger existing entry, or low-quality. When in doubt, open an issue and we can discuss.

## README versus web app

- **This README** is the quick, link-first catalog: curated **collections** (starter paths and topical lists) plus the **full list grouped by category**. Each item shows its **name**, **URL**, and **full description** from the dataset (we do not repeat every metadata field on every line).
- **Web app** (same data): a friendlier way to browse and filter for people who do not want to scroll a large Markdown file. **A public URL will be added here once hosting is decided.**

## Resources and collections

- **Resources** are individual entries in [`data/resources.json`](data/resources.json): one link, one description, plus structured fields used by the site and tooling (level, platforms, tags, and so on).
- **Collections** live in [`data/collections.json`](data/collections.json). They group resources by theme or learning path.
  - **`starter_kit`**: a small, ordered path (e.g. beginner pronunciation → dictionary → input).
  - **`curated_list`**: a topical bundle (e.g. in-person courses in Hong Kong).

The README section between the markers below is **generated**. Edit the JSON (or the generator in [`scripts/generate-readme.ts`](scripts/generate-readme.ts)), then run `npm run readme` so this file stays in sync.

## How to use this list

- **New learners:** start with the **Collections** links in the table of contents—starter kits are designed as coherent first steps.
- **Looking for a specific kind of tool** (dictionary, podcast, TV, etc.): use **Categories** in the table of contents, or the web app when it is available.
- **Diaspora learners, academics, or people in Greater China:** the same entries apply; use collections for guided paths or categories when you already know what format you need.
- **Contributors / developers:** treat [`data/resources.json`](data/resources.json) and [`data/collections.json`](data/collections.json) as the **single source of truth**. After changing them, run `npm run readme` before committing.

<!-- BEGIN:awesome-list -->

## Table of contents

### Collections
- [Beginner starter kit](#collection-starter-kit-beginner)
- [Intermediate starter kit](#collection-starter-kit-intermediate)
- [Advanced starter kit](#collection-starter-kit-advanced)
- [Essential picks](#collection-curated-essential-picks)
- [In-person courses in Hong Kong](#collection-curated-hk-in-person-courses)

### Categories
- [Community](#category-community)
- [App](#category-app)
- [Browser Extension](#category-browserextension)
- [Open Source](#category-opensource)
- [Creator](#category-creator)
- [Video Channel](#category-videochannel)
- [Podcast](#category-podcast)
- [TV](#category-tv)
- [Book](#category-book)
- [Graded Reader](#category-gradedreader)
- [Dictionary](#category-dictionary)
- [Tool](#category-tool)
- [Pronunciation](#category-pronunciation)
- [Course](#category-course)
- [Self Study](#category-selfstudy)
- [Reference](#category-reference)
- [Blog](#category-blog)
- [Music](#category-music)
- [Language Exchange](#category-languageexchange)
- [List](#category-list)

<a id="collection-starter-kit-beginner"></a>
## Beginner starter kit

Pronunciation and romanization, essential dictionaries, gentle video input, and a first graded reader — a small coherent path for day one.

- **[Jyutping.org](https://jyutping.org/en/)** — Reference site for Jyutping romanization.
- **[The Jyutping Tutor](https://sla.talkbank.org/Jyutping/index.html)** — Interactive Jyutping chart organized by syllable.
- **[Forvo](https://forvo.com/languages/yue/)** — User-contributed pronunciations for Cantonese words.
- **[Inject Jyutping](https://chromewebstore.google.com/detail/inject-jyutping/lfgpgjkjglogbndlkikjgbbfoiofbdjp?pli=1)** — Chrome extension to show Jyutping on Chinese web pages.
- **[Pleco](https://www.pleco.com/)** — Major Chinese dictionary app with Cantonese add-ons (Jyutping, audio).
- **[Words HK](https://words.hk/)** — Community Cantonese–English dictionary.
- **[Comprehensible Cantonese](https://www.youtube.com/@comprehensiblecantonese)** — Comprehensible-input style Cantonese videos.
- **[CUHK ILC — Elementary Cantonese lessons](https://www.ilc.cuhk.edu.hk/workshop/chinese/cantonese/onlinetutorial/courseListA.aspx#pgContent)** — CUHK self-study workshop: elementary Cantonese online tutorials.
- **[Ham Baang Laang](https://hambaanglaang.hk/)** — Graded readers in colloquial Cantonese with audio and illustrations.
- **[Cantone (Android)](https://play.google.com/store/apps/details?id=com.cantone.cantone&hl=en&gl=US)** — Android app for Cantonese learning.

<a id="collection-starter-kit-intermediate"></a>
## Intermediate starter kit

More reading and listening, colloquial graded stories, podcasts, and open tools to mine real Cantonese.

- **[Ham Baang Laang](https://hambaanglaang.hk/)** — Graded readers in colloquial Cantonese with audio and illustrations.
- **[Storybooks Canada (Cantonese)](https://www.storybookscanada.ca/stories/yue/)** — Free illustrated stories with Cantonese text and audio.
- **[Chatty Cantonese](https://www.chattycantonese.com/)** — Conversational Cantonese podcast for learners and lovers of the language.
- **[Poetic Cantonese](https://creators.spotify.com/pod/profile/poetic-cantonese/)** — Podcast site for Poetic Cantonese.
- **[Canto Big Circle](https://www.youtube.com/@CantoBigCircle)** — YouTube playlists from Canto Big Circle.
- **[JyutDict (GitHub)](https://github.com/aaronhktan/jyut-dict)** — Open-source Cantonese dictionary desktop app project.
- **[CC-Canto](https://cantonese.org/)** — A fast, free online Cantonese-English dictionary from Pleco.
- **[SearchCanto](https://searchcanto.com/)** — Search interface for Cantonese dictionary data.
- **[Language Crush — Cantonese Conversations](https://languagecrush.com/reading/course/258)** — Reading course with Cantonese conversations (free with sign-up).

<a id="collection-starter-kit-advanced"></a>
## Advanced starter kit

Grammar references, literary and dubbed immersion, specialized vocabulary, and rich annotated media.

- **[Cantonese: A Comprehensive Grammar — multimedia](https://www.cuhk.edu.hk/lin/cbrc/CantoneseGrammar/)** — CUHK multimedia materials for the 2nd edition grammar reference.
- **[Basic Cantonese Grammar (PDF)](https://drive.google.com/file/d/1X7C4-rkug4m_K9H2KTu2PV-Ow67k2YST/view)** — Community-shared PDF of Basic Cantonese Grammar (verify copyright).
- **[CantoLounge grammar series (Wayback)](https://web.archive.org/web/20221030021248/https://cantolounge.com/cantonese-grammar-series/)** — Archived Cantolounge Cantonese grammar article series.
- **[Cantonese Wiki — Writing](https://cantonese.wiki/)** — Community wiki documenting written Cantonese.
- **[Medical terminology in Cantonese and Mandarin (Leslie Frank)](https://soundcloud.com/leslie-frank-643243096)** — Audio series for medical terminology in Cantonese and Mandarin.
- **[canto.hk](https://canto.hk/)** — Canto Font / Cantonese typography and learning tools (Jon Chui).
- **[Jon Chui — D100 read-along demo (Visual Fonts)](https://docs.visual-fonts.com/read-along/D100_7_OT/7_OT.html)** — Sample read-along drama with Jyutping, word glosses, and English lines (D100 collaboration).
- **[Canto Jar](https://cantojar.com)** — Cantonese song lyrics, breakdowns, and learning posts.
- **[Jujiso — Cantonese-dubbed shows search](https://www.jujiso.com/vsearch/-------------.html?wd=%E7%B2%A4%E8%AF%AD)** — Streaming index/search for Yue/Cantonese-dubbed anime and shows.
- **[Cantonese dubs (Google Drive folder)](https://drive.google.com/drive/folders/1XQda3XOcTjlOiAdJeW7HQCxgndz3Bifz)** — Community drive of Cantonese-dubbed media.
- **[Cantonese with soft subtitles / transcript (playlist)](https://www.youtube.com/playlist?list=PLhFsPvkfpCXnWDUSPmA-8xUp7vPz-zCeg)** — YouTube playlist with spoken-form soft subtitles (last updated 2021 per source).

<a id="collection-curated-essential-picks"></a>
## Essential picks

A short list of especially helpful reference tools and learning resources that many Cantonese learners use again and again.

- **[Pleco](https://www.pleco.com/)** — Major Chinese dictionary app with Cantonese add-ons (Jyutping, audio).
- **[Ham Baang Laang](https://hambaanglaang.hk/)** — Graded readers in colloquial Cantonese with audio and illustrations.
- **[Words HK](https://words.hk/)** — Community Cantonese–English dictionary.
- **[Jyutping.org](https://jyutping.org/en/)** — Reference site for Jyutping romanization.
- **[Inject Jyutping](https://chromewebstore.google.com/detail/inject-jyutping/lfgpgjkjglogbndlkikjgbbfoiofbdjp?pli=1)** — Chrome extension to show Jyutping on Chinese web pages.
- **[Forvo](https://forvo.com/languages/yue/)** — User-contributed pronunciations for Cantonese words.
- **[JyutDict (GitHub)](https://github.com/aaronhktan/jyut-dict)** — Open-source Cantonese dictionary desktop app project.
- **[Cantone (Android)](https://play.google.com/store/apps/details?id=com.cantone.cantone&hl=en&gl=US)** — Android app for Cantonese learning.

<a id="collection-curated-hk-in-person-courses"></a>
## In-person courses in Hong Kong

Universities, private centres, and SCOLAR-funded vocational programmes for learners in or moving to Hong Kong.

- **[Yale-China Chinese Language Centre (CUHK)](https://www.ycclc.cuhk.edu.hk/)** — CUHK Chinese Language Centre courses (Yale-China CLC).
- **[PolyU CLC — Chinese for NCS students](https://www.polyu.edu.hk/clc/study/subjects/chinese-subjects-for-non-chinese-speaking-students/)** — PolyU Chinese subjects for non-Chinese speaking students (includes Cantonese options).
- **[HKUST CLE — language courses](https://cle.hkust.edu.hk/courses/other)** — HKUST Center for Language Education other language/culture courses.
- **[HKU SPACE — Chinese leisure courses](https://hkuspace.hku.hk/humanities-languages-law/chinese?m=pt&short_course_type[]=leisure-and-cultural&interest[]=100160&sort=m&order=asc&page=2)** — HKU School of Professional and Continuing Education Chinese short courses.
- **[HKU Chinese Language Centre](https://www.clc.hku.hk/)** — HKU CLC Chinese and Cantonese programmes.
- **[Q Language — Learn Cantonese](https://www.qlanguage.com.hk/chinese-courses/learn-cantonese/)** — Private language school Cantonese courses in Hong Kong.
- **[Practical Mandarin — Cantonese](https://www.practicalmandarin.com/index.php?m=content&c=index&a=lists&catid=42)** — Hong Kong training centre offering Cantonese classes.
- **[SCOLAR Vocational Chinese for NCS School Leavers (program page)](https://scolarhk.edb.hkedcity.net/en/promotion_of_languages/promotion-of-languages-program.php?id=267)** — Vocational Chinese Language Programme for NCS school leavers — overview; up to 85% tuition reimbursement may apply.
- **[Yale-China CLA — SCOLAR vocational Chinese (CUHK)](https://yccla.cuhk.edu.hk/scolar-can)** — Yale-China Chinese Language Centre SCOLAR-funded vocational courses (Elementary I–II, Intermediate I–II per source).
- **[HKU SPACE — SCOLAR VCL for NCS school leavers](https://hkuspace.hku.hk/collection/foundation-certificate-in-vcl-for-ncs-school-leavers/course/)** — HKU SPACE foundation / vocational listening, speaking, literacy tracks under SCOLAR VCL (per source).
- **[YMCA College of Careers — SCOLAR vocational Chinese](https://coc.cymca.edu.hk/portfolio_category/scolar-en/?lang=en)** — YMCA COC SCOLAR English portfolio — Foundation, QF Level 1 and 2 courses (per source).

<a id="category-community"></a>
## Community

- **[CanCLID](https://github.com/CanCLID)** — A group dedicated to enhancing the infrastructure for the Cantonese language.
- **[CanTone](https://www.cantonehk.com/)** — Hong Kong–focused Cantonese community and information.
- **[Cantonese Alliance](https://cantonesealliance.org/)** — Community organization supporting Cantonese language and culture.
- **[Cantonese Captions (Google Drive)](https://drive.google.com/drive/u/0/folders/1dQU8lb0dprmDNDr_Q6utOP_I7JcSQt-R)** — Community drive of Cantonese caption / subtitle resources.
- **[Cantonese Creators Collective](https://www.facebook.com/groups/cantonesecreatorscollective)** — Facebook group for Cantonese content creators.
- **[Cantonese Language Association (BYU)](https://cantoneselanguageassociation.byu.edu/)** — BYU-affiliated association for Cantonese language and culture.
- **[HOPE Support Service Center](https://www.facebook.com/Isshopecentre/)** — Facebook page for HOPE centre (community / language support in HK).
- **[OpenCantonese](https://opencantonese.org/)** — Open Cantonese learning platform and materials.
- **[OpenCantonese Community](https://community.opencantonese.org/)** — Community forum for OpenCantonese learners.
- **[r/Cantonese](https://www.reddit.com/r/Cantonese)** — Main Reddit community for Cantonese learners.
- **[r/CantonesePlus](https://www.reddit.com/r/CantonesePlus/)** — Reddit community for Cantonese Plus users.
- **[r/ChineseLanguage](https://www.reddit.com/r/ChineseLanguage/)** — Reddit community for Chinese languages including Cantonese topics.
- **[r/languagelearning](https://www.reddit.com/r/languagelearning/)** — General language learning subreddit (often Cantonese threads).
- **[Save Cantonese](https://www.savecantonese.org/)** — Advocacy and resources for preserving Cantonese in education and society.

<a id="category-app"></a>
## App

- **[Canto Numbers](https://canto-numbers.netlify.app)** — Web app for practicing Cantonese numbers.
- **[Cantone (Android)](https://play.google.com/store/apps/details?id=com.cantone.cantone&hl=en&gl=US)** — Android app for Cantonese learning.
- **[Cantone (iOS)](https://apps.apple.com/us/app/cantone/id1602297692)** — iOS app for Cantonese learning.
- **[CanTONEse](https://apps.apple.com/us/app/cantonese/id1546692785)** — Interactive lessons that emphasize the general difference between the 6 tones.
- **[Cantonese Cracker](https://apps.apple.com/hk/app/cantonese-cracker/id6446240589)** — To master the listening & speaking skills of Cantonese for daily social communication and their needs.
- **[Cantonese.ai — WhatsApp speech-to-text](https://cantonese.ai/)** — WhatsApp plugin for Cantonese speech-to-text (related repos on GitHub).
- **[Drops Cantonese](https://languagedrops.com/language/learn-cantonese)** — Vocabulary-focused Cantonese lessons in the Drops app.
- **[Duolingo (Mandarin to Cantonese)](https://www.duolingo.com/course/zh-HK/zh/Learn-Chinese%20Cantonese)** — Duolingo path for learners with Mandarin background moving into Cantonese.
- **[Jyut Dictionary](https://jyutdictionary.com/)** — Comprehensive Cantonese dictionary app.
- **[LingQ Cantonese](https://www.lingq.com/en/learn-cantonese-online/)** — Reading- and listening-based Cantonese course on LingQ.
- **[Miteiru](https://miteiru.hocky.id/)** — An open-source video player for learning Cantonese.
- **[TalkDimSum](https://technicat.itch.io/talkdimsum)** — Dim sum–focused Cantonese food and phrase helper.

<a id="category-browserextension"></a>
## Browser Extension

- **[Cantonese Popup Dictionary](https://chrome.google.com/webstore/detail/cantonese-popup-dictionar/pjnbhojkojmibobcpfgihhnohboldhip?hl=en)** — Chrome extension popup dictionary for Cantonese.
- **[Inject Jyutping](https://chromewebstore.google.com/detail/inject-jyutping/lfgpgjkjglogbndlkikjgbbfoiofbdjp?pli=1)** — Chrome extension to show Jyutping on Chinese web pages.
- **[SpeechNotes Speech to Text (Chrome)](https://chromewebstore.google.com/detail/speechnotes-speech-to-tex/nncconplehmbkbhkgkodmnkfaflopkji)** — Chrome extension companion to SpeechNotes dictation.
- **[Substital — add subtitles to videos](https://chromewebstore.google.com/detail/substital-add-subtitles-t/kkkbiiikppgjdiebcabomlbidfodipjg?hl=en-US&utm_source=ext_sidebar)** — Chrome extension to load custom subtitles on many video sites.

<a id="category-opensource"></a>
## Open Source

- **[Baggio Wong (GitHub)](https://github.com/BaggioWongHK?tab=repositories)** — GitHub profile for Baggio Wong (Jyutping chart and Cantolounge tooling).
- **[Canto Numbers (GitHub)](https://github.com/yilverdeja/canto-numbers)** — Source for the Canto Numbers web app.
- **[Chinese Worksheet Generator (GitHub)](https://github.com/lucivpav/cwg)** — Source for Chinese Worksheet Generator (CWG).
- **[ChinVocab Canto Sounds DB](https://chinvocab.com/csdb)** — Cantonese sounds database on Chin Vocab.
- **[ChinVocab HBL Data](https://chinvocab.com/hbl/data/)** — Data related to Ham Baang Laang on Chin Vocab.
- **[JyutDict (GitHub)](https://github.com/aaronhktan/jyut-dict)** — Open-source Cantonese dictionary desktop app project.
- **[Miteiru (GitHub)](https://github.com/hockyy/miteiru)** — Source code for the Miteiru app.
- **[PyCantonese](https://github.com/jacksonllee/pycantonese)** — Python library for Cantonese NLP and corpus work.
- **[Rime Cantonese](https://github.com/rime/rime-cantonese)** — Rime input schema for Cantonese (Jyutping).
- **[TalkDimSum (source code)](https://codeberg.org/technicat/talkdimsum)** — Archived source repository for the TalkDimSum project.
- **[TianZiGeBiShun (GitHub)](https://github.com/bunian/tianzigebishun)** — Source for the TianZiGeBiShun Character Worksheet Generator.

<a id="category-creator"></a>
## Creator

- **[Dr. Chaak-Ming Lau](https://chaak.net/)** — Linguist & Digital Humanities researcher with a focus on Cantonese and under-resourced languages.
- **[Instagram — @cantobigcircle](https://www.instagram.com/cantobigcircle/)** — Canto Big Circle on Instagram.
- **[Instagram — @cantochat](https://www.instagram.com/cantochat/)** — Casual Cantonese chat and learning.
- **[Instagram — @cantonese.sow](https://www.instagram.com/cantonese.sow/)** — Cantonese learning posts.
- **[Instagram — @cantonesebookclub](https://www.instagram.com/cantonesebookclub/)** — Cantonese reading and book club.
- **[Instagram — @cantoneseconnection](https://www.instagram.com/cantoneseconnection/)** — Cantonese community and tips.
- **[Instagram — @cantonesehoeasy](https://www.instagram.com/cantonesehoeasy/)** — Beginner-friendly Cantonese tips.
- **[Instagram — @cantonesewithjenn](https://www.instagram.com/cantonesewithjenn/)** — Cantonese lessons with Jenn.
- **[Instagram — @cantozone_hk](https://www.instagram.com/cantozone_hk/)** — Hong Kong Cantonese zone content.
- **[Instagram — @catlikestudiobooks](https://www.instagram.com/catlikestudiobooks/)** — Cantonese / Chinese children’s books studio.
- **[Instagram — @chattycantonese](https://www.instagram.com/chattycantonese/)** — Instagram presence for Chatty Cantonese podcast.
- **[Instagram — @dope.cantonese](https://www.instagram.com/dope.cantonese/)** — Cantonese slang and learning content.
- **[Instagram — @eighteenstrokes](https://www.instagram.com/eighteenstrokes/)** — Chinese / Cantonese writing and stroke learning content.
- **[Instagram — @gabgabcantonese](https://www.instagram.com/gabgabcantonese/)** — Conversational Cantonese content.
- **[Instagram — @gp.cantonese](https://www.instagram.com/gp.cantonese/)** — Cantonese learning posts.
- **[Instagram — @hambaanglaang](https://www.instagram.com/hambaanglaang/)** — Official Ham Baang Laang Instagram.
- **[Instagram — @hongkong.english.record](https://www.instagram.com/hongkong.english.record/)** — Hong Kong English/Cantonese language content.
- **[Instagram — @jyuttoi_cantonese](https://www.instagram.com/jyuttoi_cantonese/)** — Jyutping / Cantonese learning reels and posts.
- **[Instagram — @kebbeth](https://www.instagram.com/kebbeth/)** — Cantonese learning creator.
- **[Instagram — @kingkongcantonese](https://www.instagram.com/kingkongcantonese/)** — Cantonese learning channel on Instagram.
- **[Instagram — @mslinchinese](https://www.instagram.com/mslinchinese/)** — Chinese/Cantonese teaching content.
- **[Instagram — @open_cant](https://www.instagram.com/opencant/)** — Open Cantonese–focused Instagram content.
- **[Instagram — @poeticcantonese](https://www.instagram.com/poeticcantonese/)** — Poetic Cantonese podcast Instagram.
- **[Instagram — @sik6dak1.cantonese](https://www.instagram.com/sik6dak1.cantonese/)** — Cantonese learning reels.
- **[Instagram — @sketchykarr](https://www.instagram.com/sketchykarr/)** — Cantonese / HK culture sketches and language.
- **[Instagram — @tan.cantonese.studio](https://www.instagram.com/tan.cantonese.studio/)** — Tan Cantonese audio / studio content (handle per source list).
- **[Instagram — @tan90_cantoculture](https://www.instagram.com/tan90_cantoculture/)** — Cantonese culture posts.
- **[Instagram — @translation_bay](https://www.instagram.com/translation_bay/)** — Translation and Cantonese language notes.
- **[Instagram — @twin.voices.chinese](https://www.instagram.com/twin.voices.chinese/)** — Cantonese / Chinese learning content on Instagram (from community list).
- **[Instagram — @winniecantonese](https://www.instagram.com/winniecantonese/)** — Instagram for Miss Winnie Cantonese content.
- **[Keith Hon (GitHub)](https://github.com/Keith-Hon)** — Developer behind cantonese.ai tooling.
- **[u/keithhon (Reddit)](https://www.reddit.com/user/keithhon/)** — Keith Hon Reddit profile.

<a id="category-videochannel"></a>
## Video Channel

- **[5 minute Cantonese](https://www.youtube.com/@5minutecantonese)** — Short-format Cantonese lessons on YouTube.
- **[Assimil Cantonese (playlist)](https://www.youtube.com/playlist?list=PLVlB5oZ-RCuOOTKXfdGoz0dFyW4NccKf7)** — YouTube playlist aligned with Assimil-style Cantonese content.
- **[Bilibili — Cantonese tones and melody (video)](https://www.bilibili.com/video/BV1ar4y1S7of/?spm_id_from=333.1387.homepage.video_card.click)** — Video explainer on tones in Cantonese songs.
- **[Bilibili user — Cantonese lyrics content](https://space.bilibili.com/454869715)** — Creator space with Cantonese lyrics analyses and lists.
- **[Brittany Chan (YouTube)](https://www.youtube.com/@cantobritt)** — Cantonese learning playlists by Brittany Chan.
- **[Canto Big Circle](https://www.youtube.com/@CantoBigCircle)** — YouTube playlists from Canto Big Circle.
- **[Canto Lounge (YouTube)](https://www.youtube.com/@Cantolounge)** — Cantolounge YouTube channel.
- **[Cantonese with soft subtitles / transcript (playlist)](https://www.youtube.com/playlist?list=PLhFsPvkfpCXnWDUSPmA-8xUp7vPz-zCeg)** — YouTube playlist with spoken-form soft subtitles (last updated 2021 per source).
- **[CantoneseClass101 (YouTube)](https://www.youtube.com/@CantoneseClass101)** — Official CantoneseClass101 playlists on YouTube.
- **[Christian Tapper — Cantonese learning](https://www.youtube.com/watch?v=7dZBqA1XkRI&ab_channel=ChristianTapper)** — YouTube video on Cantonese learning; links to literacy blog.
- **[Comprehensible Cantonese](https://www.youtube.com/@comprehensiblecantonese)** — Comprehensible-input style Cantonese videos.
- **[Easy Cantonese (playlist)](https://www.youtube.com/playlist?list=PLA5UIoabheFMqUbbrqiiPGOz6n7jN1Crd)** — Street-interview style Easy Languages Cantonese playlist.
- **[Guresu (YouTube)](https://www.youtube.com/@Guresu)** — YouTube channel by advanced Cantonese learner Guresu.
- **[InspirLang — 100 Basic Cantonese Phrases](https://www.youtube.com/watch?v=mt6KJh4UTU4&ab_channel=InspirLang)** — YouTube video listing basic Cantonese phrases.
- **[InspirLang (YouTube)](https://www.youtube.com/@InspirLang)** — InspirLang Cantonese lessons and playlists on YouTube.
- **[Manki Cantonese](https://www.youtube.com/@mankicantonese1066)** — Cantonese teaching playlists on YouTube.
- **[Olly Richards on learning Cantonese](https://www.youtube.com/watch?v=3QRVpNbNzK8&ab_channel=OllyRichards)** — Video discussion on Cantonese learning approach.
- **[Rhapsody in Lingo (YouTube)](https://www.youtube.com/@RhapsodyinLingo)** — YouTube channel for Rhapsody in Lingo.
- **[Speaking Cantonese with Miss Winnie](https://www.youtube.com/@winniecantonese)** — YouTube channel for spoken Cantonese with Miss Winnie.
- **[Uncle Calvin Cantonese Class](https://www.youtube.com/@UncleCalvin)** — Structured Cantonese class playlists (Uncle Calvin 廣東話教室).

<a id="category-podcast"></a>
## Podcast

- **[Chatty Cantonese](https://www.chattycantonese.com/)** — Conversational Cantonese podcast for learners and lovers of the language.
- **[Medical Cantonese & Mandarin (RadioPublic)](https://radiopublic.com/cantonese-and-mandarin-for-medica-8QdNJa)** — RadioPublic feed mirror for Leslie Frank medical terminology audio.
- **[Medical terminology in Cantonese and Mandarin (Leslie Frank)](https://soundcloud.com/leslie-frank-643243096)** — Audio series for medical terminology in Cantonese and Mandarin.
- **[Poetic Cantonese](https://creators.spotify.com/pod/profile/poetic-cantonese/)** — Podcast site for Poetic Cantonese.

<a id="category-tv"></a>
## TV

- **[Cantonese dubs (Google Drive folder)](https://drive.google.com/drive/folders/1XQda3XOcTjlOiAdJeW7HQCxgndz3Bifz)** — Community drive of Cantonese-dubbed media.
- **[Crayon Shin-chan Cantonese (channel)](https://www.youtube.com/@yanmo7953/videos)** — YouTube channel with Cantonese-dubbed Crayon Shin-chan content.
- **[Crayon Shin-chan Cantonese (playlist)](https://www.youtube.com/watch?v=20XEZdNudbs&list=PLmpxExHJXorfex3w5r5TgKw5JeISdxPBe&ab_channel=Kahyao27)** — Alternate YouTube playlist for Cantonese Shin-chan.
- **[Doraemon Cantonese dub (playlist)](https://www.youtube.com/watch?v=Z3mXsz3N18w&list=PL3y5IKECMIjsMNng1eTCLdV_5g00UD7o6&ab_channel=90'sFile)** — YouTube playlist of Doraemon in Cantonese.
- **[Jujiso — Cantonese-dubbed shows search](https://www.jujiso.com/vsearch/-------------.html?wd=%E7%B2%A4%E8%AF%AD)** — Streaming index/search for Yue/Cantonese-dubbed anime and shows.
- **[McDull Cantonese (playlist)](https://www.youtube.com/watch?v=6it8pfzp880&list=PLTpONarNIXVTLlEuOhw4m6saf7p0e2gaN&ab_channel=%E9%BA%A5%E5%85%9CMcdull)** — YouTube playlist of McDull in Cantonese.
- **[Movie Fou 2060 — Dr. Stone (Cantonese)](https://moviefou2060.blogspot.com/2022/10/drstone1-25.html)** — Blog post index for Dr. Stone Cantonese dub.
- **[Movie Fou 2060 — Dragon Ball Z (Cantonese)](https://moviefou2060.blogspot.com/2020/10/1.html?m=1)** — Blog post index for DBZ Cantonese dub.
- **[Movie Fou 2060 — Stephen Chow films](https://moviefou2060.blogspot.com/search?q=%E5%91%A8%E6%98%9F%E9%A9%B0)** — Blog search index for Stephen Chow movies (Cantonese).
- **[Old Master Q Cantonese (playlist)](https://www.youtube.com/watch?v=eLZVPPKIRIE&list=PLYsj2iXn4sBzGfvuM5yse-ZmDKBk0xmUh&ab_channel=STORYSTORY)** — YouTube playlist of Old Master Q in Cantonese.
- **[Peppa Pig Cantonese (playlist)](https://www.youtube.com/watch?v=A-iaNqQNt-Y&list=PLakSiSnj_sRh0XBQ9OOjTfCnGC-7H3Zo9&index=1&ab_channel=MRJM)** — YouTube playlist of Peppa Pig dubbed in Cantonese.

<a id="category-book"></a>
## Book

- **[Cantonese in Communication — Book 1 audio](http://publish.commercialpress.com.hk/misc/Cantonese_1/)** — Listening and speaking course: Book 1 companion audio (Commercial Press).
- **[Cantonese in Communication — Book 2 audio](http://publish.commercialpress.com.hk/misc/Cantonese_2/)** — Listening and speaking course: Book 2 companion audio.
- **[Cantonese in Communication — Book 3 audio](http://publish.commercialpress.com.hk/misc/cantonese3/index.html)** — Listening and speaking course: Book 3 companion audio.
- **[Cantonese: A Comprehensive Grammar — multimedia](https://www.cuhk.edu.hk/lin/cbrc/CantoneseGrammar/)** — CUHK multimedia materials for the 2nd edition grammar reference.
- **[Teach Yourself — Complete Cantonese audio (Hodder)](https://library.teachyourself.com/id004325095/Complete-Cantonese)** — Official audio companion for Complete Cantonese (Teach Yourself).
- **[Teach Yourself Cantonese (Internet Archive)](https://archive.org/details/TeachYourselfCantonese)** — Archived Teach Yourself Cantonese book (check legality in your region).
- **[粵語速成 — Advanced audio](http://publish.commercialpress.com.hk/misc/YYSCGJJC/index.html)** — Commercial Press 粵語速成 series: advanced audio materials.
- **[粵語速成 — Elementary audio](http://publish.commercialpress.com.hk/misc/YYSCCJJC/)** — Commercial Press 粵語速成 series: elementary audio materials.
- **[粵語速成 — Intermediate audio](http://publish.commercialpress.com.hk/misc/YYSCZJJC/index.html)** — Commercial Press 粵語速成 series: intermediate audio materials.

<a id="category-gradedreader"></a>
## Graded Reader

- **[ChinVocab Ham Baang Laang](https://chinvocab.com/hbl/)** — Ham Baang Laang stories with customized learning options & flashcards.
- **[Ham Baang Laang](https://hambaanglaang.hk/)** — Graded readers in colloquial Cantonese with audio and illustrations.
- **[Storybooks Canada (Cantonese)](https://www.storybookscanada.ca/stories/yue/)** — Free illustrated stories with Cantonese text and audio.

<a id="category-dictionary"></a>
## Dictionary

- **[Canto Words](https://cantowords.com/)** — Community Cantonese–English dictionary (Words HK in English).
- **[Cantodict](http://www.cantonese.sheik.co.uk/)** — Long-running online Cantonese–English dictionary (CantoDict).
- **[Cantodict Parser](https://www.cantonese.sheik.co.uk/dictionary/parser/)** — Sentence parser tool on Cantodict.
- **[Cantonese Plus](https://www.cantoneseplus.com/)** — Cantonese learning site with dictionary and phrase tools.
- **[CC-Canto](https://cantonese.org/)** — A fast, free online Cantonese-English dictionary from Pleco.
- **[MDBG Chinese Dictionary](https://www.mdbg.net/chinese/dictionary)** — MDBG dictionary (Chinese; useful alongside Cantonese resources).
- **[Pleco](https://www.pleco.com/)** — Major Chinese dictionary app with Cantonese add-ons (Jyutping, audio).
- **[SearchCanto](https://searchcanto.com/)** — Search interface for Cantonese dictionary data.
- **[Words HK](https://words.hk/)** — Community Cantonese–English dictionary.

<a id="category-tool"></a>
## Tool

- **[canto.hk](https://canto.hk/)** — Canto Font / Cantonese typography and learning tools (Jon Chui).
- **[Cantonese character practice writing sheets](https://www.cantonesetools.org/en/cantonese-character-practise-writing-sheets)** — Jyutping writing practice sheet generator on cantonesetools.org.
- **[cantonese.tools](https://www.cantonese.tools/)** — Miscellaneous Cantonese web utilities.
- **[cantonesetools.org](https://www.cantonesetools.org/)** — Cantonese tools including converters and practice sheets.
- **[Chin Vocab](https://chinvocab.com/)** — Vocabulary and Cantonese learning tools including linked datasets.
- **[Chinese Worksheet Generator (CWG)](http://chineseworksheetgenerator.org/)** — Web tool to generate Chinese practice worksheets with English definitions.
- **[CKC Copybook (EDUHK)](https://ckc.eduhk.hk/ckccopybook/?lang=en)** — Allows users to select Chinese characters and phrases to create a handwriting practicing worksheet
- **[Hong Kong Vision](https://hongkongvision.com/tool/en)** — HK Vision language tools including Cantonese-related utilities.
- **[MicMonster — Cantonese TTS](https://micmonster.com/text-to-speech/chinese-cantonese-traditional/)** — Online text-to-speech with Cantonese (Traditional) — limited free length.
- **[Online Cantonese input method](https://www.cantoneseinput.com/?lang=en)** — Web-based Cantonese romanization / input helper.
- **[Speech Notes — Yue dictation](https://speechnotes.co/dictate/)** — SpeechNotes dictation with Cantonese (yue) option.
- **[TianZiGeBiShun Character Worksheet Generator](https://www.an2.net/zi/index_en.php)** — Generate Chinese writing grid worksheets (stroke order).

<a id="category-pronunciation"></a>
## Pronunciation

- **[Forvo](https://forvo.com/languages/yue/)** — User-contributed pronunciations for Cantonese words.
- **[Jyutping chart](https://baggiowonghk.github.io/jyutping-chart)** — Complete Jyutping chart with Chinese word examples, English definitions and recordings.
- **[Jyutping.org](https://jyutping.org/en/)** — Reference site for Jyutping romanization.
- **[The Jyutping Tutor](https://sla.talkbank.org/Jyutping/index.html)** — Interactive Jyutping chart organized by syllable.

<a id="category-course"></a>
## Course

- **[HKU Chinese Language Centre](https://www.clc.hku.hk/)** — HKU CLC Chinese and Cantonese programmes.
- **[HKU SPACE — Chinese leisure courses](https://hkuspace.hku.hk/humanities-languages-law/chinese?m=pt&short_course_type[]=leisure-and-cultural&interest[]=100160&sort=m&order=asc&page=2)** — HKU School of Professional and Continuing Education Chinese short courses.
- **[HKU SPACE — SCOLAR VCL for NCS school leavers](https://hkuspace.hku.hk/collection/foundation-certificate-in-vcl-for-ncs-school-leavers/course/)** — HKU SPACE foundation / vocational listening, speaking, literacy tracks under SCOLAR VCL (per source).
- **[HKUST CLE — language courses](https://cle.hkust.edu.hk/courses/other)** — HKUST Center for Language Education other language/culture courses.
- **[Poetic Cantonese Academy](https://poeticcantonese.com/)** — Learn Cantonese with Kahei Lee (Poetic Cantonese).
- **[PolyU CLC — Chinese for NCS students](https://www.polyu.edu.hk/clc/study/subjects/chinese-subjects-for-non-chinese-speaking-students/)** — PolyU Chinese subjects for non-Chinese speaking students (includes Cantonese options).
- **[Practical Mandarin — Cantonese](https://www.practicalmandarin.com/index.php?m=content&c=index&a=lists&catid=42)** — Hong Kong training centre offering Cantonese classes.
- **[Q Language — Learn Cantonese](https://www.qlanguage.com.hk/chinese-courses/learn-cantonese/)** — Private language school Cantonese courses in Hong Kong.
- **[SCOLAR Vocational Chinese for NCS School Leavers (program page)](https://scolarhk.edb.hkedcity.net/en/promotion_of_languages/promotion-of-languages-program.php?id=267)** — Vocational Chinese Language Programme for NCS school leavers — overview; up to 85% tuition reimbursement may apply.
- **[Yale-China Chinese Language Centre (CUHK)](https://www.ycclc.cuhk.edu.hk/)** — CUHK Chinese Language Centre courses (Yale-China CLC).
- **[Yale-China CLA — SCOLAR vocational Chinese (CUHK)](https://yccla.cuhk.edu.hk/scolar-can)** — Yale-China Chinese Language Centre SCOLAR-funded vocational courses (Elementary I–II, Intermediate I–II per source).
- **[YMCA College of Careers — SCOLAR vocational Chinese](https://coc.cymca.edu.hk/portfolio_category/scolar-en/?lang=en)** — YMCA COC SCOLAR English portfolio — Foundation, QF Level 1 and 2 courses (per source).

<a id="category-selfstudy"></a>
## Self Study

- **[Cantonese Learning](https://www.cantoneselearning.com/)** — Lessons, video with Jyutping transcripts, and songs (per source list).
- **[CantoneseClass101](https://www.cantoneseclass101.com/)** — Paid lesson library and study tools for Cantonese.
- **[CUHK — Online Cantonese hub](https://www.ilc.cuhk.edu.hk/workshop/Chinese/Cantonese/OnlineCantonese/index.aspx)** — CUHK ILC landing page for Online Cantonese materials.
- **[CUHK ILC — Elementary Cantonese lessons](https://www.ilc.cuhk.edu.hk/workshop/chinese/cantonese/onlinetutorial/courseListA.aspx#pgContent)** — CUHK self-study workshop: elementary Cantonese online tutorials.
- **[CUHK ILC — Intermediate Cantonese lessons](https://www.ilc.cuhk.edu.hk/workshop/chinese/cantonese/onlinetutorial/courseListB.aspx#pgContent)** — CUHK self-study workshop: intermediate Cantonese online tutorials.
- **[Language Crush — Cantonese Conversations](https://languagecrush.com/reading/course/258)** — Reading course with Cantonese conversations (free with sign-up).
- **[LingQ — Mini Stories (Cantonese)](https://www.lingq.com/en/learn-cantonese-online/courses/432593/)** — Mini Stories course for Cantonese on LingQ (free with sign-up per source list).
- **[Mango Languages — Cantonese](https://mangolanguages.com/available-languages/cantonese-chinese/)** — Library-subscription language course including Cantonese Chinese.
- **[Pimsleur Cantonese (Internet Archive mirror)](https://ia801507.us.archive.org/view_archive.php?archive=/16/items/pimsleur-complete-collection/Pimsleur%20Complete%20Collection.zip)** — Archived Pimsleur collection zip (verify licensing; often available via libraries).
- **[Rhapsody in Lingo](https://rhapsodyinlingo.com)** — Cantonese learning site with blog-style lessons.

<a id="category-reference"></a>
## Reference

- **[Animal Farm — Cantonese text](https://www.cantonese.com.hk/animalfarm/text/)** — Animal Farm in Cantonese on cantonese.com.hk.
- **[Basic Cantonese Grammar (PDF)](https://drive.google.com/file/d/1X7C4-rkug4m_K9H2KTu2PV-Ow67k2YST/view)** — Community-shared PDF of Basic Cantonese Grammar (verify copyright).
- **[CantoLounge grammar series (Wayback)](https://web.archive.org/web/20221030021248/https://cantolounge.com/cantonese-grammar-series/)** — Archived Cantolounge Cantonese grammar article series.
- **[Cantonese Wiki — Writing](https://cantonese.wiki/)** — Community wiki documenting written Cantonese.
- **[cantonese.com.hk — book texts](https://www.cantonese.com.hk/)** — Cantonese book texts and parallel readings hosted on cantonese.com.hk.
- **[Hong Kong Cantonese Articulation Test (DH)](https://www.dhcas.gov.hk/en/cat.html)** — Government information on the Cantonese articulation test.
- **[Jon Chui — D100 read-along demo (Visual Fonts)](https://docs.visual-fonts.com/read-along/D100_7_OT/7_OT.html)** — Sample read-along drama with Jyutping, word glosses, and English lines (D100 collaboration).
- **[Jon Chui — four-character idioms list](https://docs.visual-fonts.com/reference/list_of_idioms/)** — Idiom reference list (Canto Font).
- **[Jon Chui — list of measure words](https://docs.visual-fonts.com/reference/list_of_measure_words/)** — Reference list on Visual Fonts / Canto Font docs.
- **[Jon Chui — sandwich puns (歇後語)](https://docs.visual-fonts.com/reference/list_of_puns/)** — Cantonese sandwich pun list (Canto Font).
- **[Learn Chinese Characters for Hong Kong Students (EDB)](https://www.edbchinese.hk/lexlist_en/index.jsp)** — EDB Chinese character lexicon resource for Hong Kong students.
- **[MyLanguages.org — Cantonese](https://mylanguages.org/learn_cantonese.php)** — Phrase and basics reference for Cantonese.
- **[SCOLAR (Standing Committee on Language Education and Research)](https://scolarhk.edb.hkedcity.net)** — Official SCOLAR portal (HK government language education committee).
- **[The Little Prince — Cantonese text](https://www.cantonese.com.hk/lepetitprince/text/)** — Little Prince in Cantonese (plain text) on cantonese.com.hk.
- **[The Little Prince — Cantonese with Jyutping](https://www.cantonese.com.hk/lepetitprince/text-jyutping/)** — Little Prince with Jyutping on cantonese.com.hk.
- **[VF Cantonese feature demo (PDF)](https://canto.hk/wp-content/uploads/2024/08/VF-Cantonese-feature-demo-Education-English.pdf)** — English PDF demo of Visual Fonts Cantonese education features.
- **[Written Cantonese (Wikipedia)](https://en.wikipedia.org/wiki/Written_Cantonese)** — Encyclopedia overview of written Cantonese.

<a id="category-blog"></a>
## Blog

- **[Bilibili — Cantonese tones and melody (article)](https://www.bilibili.com/opus/547903768164578795)** — Article (Chinese) on how Cantonese tones interact with melody.
- **[Language Obsession — Cantonese final particles](https://language-obsession.tumblr.com/post/130229966778/cantonese-final-particles)** — Tumblr overview of sentence-final particles.
- **[Language Obsession — Cantonese in 300 words](https://language-obsession.tumblr.com/post/123280737040/cantonese-in-300-words)** — Tumblr post: high-frequency Cantonese word overview.
- **[Language Obsession — Cantonese music masterpost](https://language-obsession.tumblr.com/post/139442935221/cantonese-music-masterpost)** — Tumblr masterpost linking Cantonese music learning resources.
- **[Language Obsession — Cantonese number expressions](https://language-obsession.tumblr.com/post/132485641665/cantonese-number-expressions)** — Tumblr note on Cantonese numerals and classifiers.
- **[Language Obsession — Cantonese verbal aspect](https://language-obsession.tumblr.com/post/144711402296/cantonese-verbal-aspect)** — Tumblr grammar note on verbal aspect in Cantonese.
- **[Language Obsession — negation in Cantonese](https://language-obsession.tumblr.com/post/153828690118/negation-in-cantonese)** — Tumblr note on negation patterns.
- **[Language Obsession — spoken to written characters (image)](https://64.media.tumblr.com/0a116b5cc2eb8df6ce0e102d67555ba0/tumblr_nqde9dH7MZ1trelico1_r3_640.png)** — Image post mapping spoken Cantonese to written Chinese forms.
- **[Language Obsession (Tumblr)](https://language-obsession.tumblr.com/)** — Tumblr masterposts on Cantonese grammar, particles, and music.
- **[Lingtuitive — smartest way to learn to read/write Chinese](https://lingtuitive.com/blog/the-smartest-way-to-learn-to-read-write-chinese)** — Blog post linked from Christian Tapper on Chinese literacy strategies.
- **[Movie Fou 2060 (Blogspot)](https://moviefou2060.blogspot.com/)** — Blog indexing Cantonese-dubbed series and movies.
- **[Sweet Note — Cantonese storybooks on YouTube](https://sweetnotelearning.com/2021/02/26/cantonese-storybooks-on-youtube/)** — Blog post curating Cantonese storybook channels on YouTube.

<a id="category-music"></a>
## Music

- **[0243.hk](https://www.0243.hk/)** — A tool dedicated to Cantonese lyric writing based on the '0243' method that matches tonal pitch to musical notes.
- **[Canto Jar](https://cantojar.com)** — Cantonese song lyrics, breakdowns, and learning posts.
- **[Canto Jar — Terence Lam “Magical Medicine” transcription](https://cantojar.com/cantonese-songs-magical-medicine-by-terence-lam-ka-him-%E7%A5%9E%E5%A5%87%E7%9A%84%E7%B3%8A%E5%A1%8C%E9%AD%94%E8%97%A5-%E6%9E%97%E5%AE%B6%E8%AC%99/)** — Line-by-line Cantonese lyric transcription and notes.

<a id="category-languageexchange"></a>
## Language Exchange

- **[Speaking Language Exchange](https://speakinglanguageexchange.com/)** — Platform to find language exchange partners including Cantonese.

<a id="category-list"></a>
## List

- **[Bilibili — Cantonese lyrics section (list)](https://space.bilibili.com/454869715/lists/102883?type=season)** — Season/list of Cantonese lyrics videos on the creator's Bilibili space.
- **[Cantonese anime list (Firefly Anime)](https://fireflyanime.blogspot.com/)** — Blog list of anime available with Cantonese dubs.
- **[Cantonese Captions index (Google Sheets)](https://docs.google.com/spreadsheets/d/1CmN8GPalrb45YFIPrWgh7GRYyoUhnizEOImY6kAW82w/edit#gid=396865486)** — Spreadsheet index linked from Cantonese Captions project.
- **[DubDB — British Hong Kong dubs](https://dubdb.fandom.com/wiki/Category:British_Hong_Kong_dubs)** — Fandom wiki category for British Hong Kong era dubs.
- **[DubDB — Cantonese-language dubs](https://dubdb.fandom.com/wiki/Category:Cantonese-language_dubs)** — Fandom wiki category indexing Cantonese dubs.
- **[DubDB — Hong Kong dubs](https://dubdb.fandom.com/wiki/Category:Hong_Kong_dubs)** — Fandom wiki category for Hong Kong dubs.
- **[HSU Library Guide — Cantonese internet resources](https://libguides.library.hsu.edu.hk/cantonese/internet)** — Academic libguide with vetted Cantonese learning links.
- **[Reddit — long list of favorite Cantonese resources](https://www.reddit.com/r/Cantonese/comments/1h74rzu/a_long_list_of_some_of_my_favorite_cantonese/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)** — Curated thread on r/Cantonese with many links.
- **[SaveCanto — worldwide Cantonese courses map](https://savecanto-map.vercel.app/)** — Interactive map of Cantonese classes worldwide (Save Cantonese project).

<!-- END:awesome-list -->

## Data schema

Each **resource** in `data/resources.json` may include:

| Field | Meaning |
| --- | --- |
| `id` | Stable identifier used in code and in `collections.json`. |
| `name` | Display name. |
| `category` | One of the category labels used for README sections (see generated headings). |
| `description` | Short English summary; also shown in the README list. |
| `url` | Primary link for the resource. |
| `levels` | Rough difficulty: `Beginner`, `Intermediate`, `Advanced`, or `All Levels`. |
| `platforms` | Where it runs or is consumed (`Web`, `YouTube`, `iOS`, …). |
| `tags` | Free-form labels for search/filtering in the app. |
| `features` | Notable capabilities (e.g. romanization, flashcards). |
| `cost` | `Free`, `Freemium`, `Paid`, `Unknown`, or `null` when not applicable. |
| `related_ids` | **Child → parent** links only (e.g. a project pointing to a creator). Do not list children on the parent entry. |

Each **collection** in `data/collections.json` has `title`, `description`, `kind` (`starter_kit` or `curated_list`), optional `target_level`, `resource_ids` in display order, and optional `order` for sorting in the README.

## Contributing

We welcome additions, fixes, and improvements. Here are the quickest ways to help:

| What you want to do | Where to go |
|---|---|
| Suggest a new resource | [Discussions → Suggest Resources](https://github.com/yilverdeja/awesome-cantonese-resources/discussions/categories/suggest-resources) |
| Report a broken link or wrong info | [Open a Bug Report](https://github.com/yilverdeja/awesome-cantonese-resources/issues/new/choose) |
| Rate or leave feedback on a resource | [Discussions → Resource Ratings](https://github.com/yilverdeja/awesome-cantonese-resources/discussions/categories/resource-ratings) |
| Ask a question | [Discussions → Q&A](https://github.com/yilverdeja/awesome-cantonese-resources/discussions/categories/q-a) |

**Contributing via pull request:**

1. Edit `data/resources.json` or `data/collections.json` with a valid `url`, clear English `description`, and a sensible `category`.
2. Run `npm run readme` after JSON changes so the generated README section updates.
3. Do not edit `data/discussion-map.json` or `data/ratings.json` — these are bot-managed and PRs that touch them will be rejected automatically.

**Quality bar:** Cantonese-related is enough to propose something; we may decline or defer entries that duplicate existing coverage without adding value.

For a full developer guide including environment setup, schema reference, and automation details, see [CONTRIBUTION.md](./CONTRIBUTION.md).

## Maintainers

Maintainer names and links will be listed here as the project matures. **Thank you** to everyone who suggests resources, reports broken links, or improves the data.

## License and disclaimer

This repository is a directory of third-party links. **We are not affiliated** with the sites or creators listed unless explicitly stated. Links and products change; **URLs can go stale**—issues or PRs to fix them are welcome.

A repository **license** for the list data and code may be added separately; until then, assume all rights reserved unless files state otherwise.
