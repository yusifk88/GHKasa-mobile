
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
      allPosts:[],
      selectedPost:null,
      categories:[
        {
          "id": 56,
          "count": 2318,
          "description": "",
          "link": "https://ghkasa.com/category/buzz/",
          "name": "BUZZ",
          "slug": "buzz",
          "taxonomy": "category",
          "parent": 0,
          "meta": [],
          "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Ghana&#039;s Gossip Hub &amp; More - Buzz and More</title>\n<meta name=\"description\" content=\"Ghana&#039;s Gossip Hub &amp; More - Buzz is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://ghkasa.com/category/buzz/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Ghana&#039;s Gossip Hub &amp; More - Buzz and More\" />\n<meta property=\"og:description\" content=\"Ghana&#039;s Gossip Hub &amp; More - Buzz is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta property=\"og:url\" content=\"https://ghkasa.com/category/buzz/\" />\n<meta property=\"og:site_name\" content=\"GhKasa\" />\n<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@officialghkasa\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://ghkasa.com/#organization\",\"name\":\"GhKasa\",\"url\":\"https://ghkasa.com/\",\"sameAs\":[\"https://www.facebook.com/officialghkasa/\",\"https://www.instagram.com/yekasatv/\",\"http://youtube.com/y3kasatv\",\"https://twitter.com/officialghkasa\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://ghkasa.com/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https://i0.wp.com/ghkasa.com/wp-content/uploads/2019/05/Ghkasa-Logo.png?fit=624%2C120&ssl=1\",\"width\":624,\"height\":120,\"caption\":\"GhKasa\"},\"image\":{\"@id\":\"https://ghkasa.com/#logo\"}},{\"@type\":\"WebSite\",\"@id\":\"https://ghkasa.com/#website\",\"url\":\"https://ghkasa.com/\",\"name\":\"GhKasa\",\"description\":\"Ghana&#039;s Fact Hub &amp; More\",\"publisher\":{\"@id\":\"https://ghkasa.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":\"https://ghkasa.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"CollectionPage\",\"@id\":\"https://ghkasa.com/category/buzz/#webpage\",\"url\":\"https://ghkasa.com/category/buzz/\",\"name\":\"Ghana's Gossip Hub & More - Buzz and More\",\"isPartOf\":{\"@id\":\"https://ghkasa.com/#website\"},\"description\":\"Ghana's Gossip Hub & More - Buzz is Ghana's celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\",\"breadcrumb\":{\"@id\":\"https://ghkasa.com/category/buzz/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://ghkasa.com/category/buzz/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://ghkasa.com/category/buzz/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/\",\"url\":\"https://ghkasa.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/category/buzz/\",\"url\":\"https://ghkasa.com/category/buzz/\",\"name\":\"BUZZ\"}}]}]}</script>\n<!-- / Yoast SEO Premium plugin. -->",
          "_links": {
            "self": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories/56"
              }
            ],
            "collection": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories"
              }
            ],
            "about": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/taxonomies/category"
              }
            ],
            "wp:post_type": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/posts?categories=56"
              }
            ],
            "curies": [
              {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
              }
            ]
          }
        },
        {
          "id": 5292,
          "count": 8,
          "description": "",
          "link": "https://ghkasa.com/category/education/",
          "name": "EDUCATION",
          "slug": "education",
          "taxonomy": "category",
          "parent": 0,
          "meta": [],
          "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>EDUCATION Archives | GhKasa</title>\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://ghkasa.com/category/education/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"EDUCATION Archives | GhKasa\" />\n<meta property=\"og:url\" content=\"https://ghkasa.com/category/education/\" />\n<meta property=\"og:site_name\" content=\"GhKasa\" />\n<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@officialghkasa\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://ghkasa.com/#organization\",\"name\":\"GhKasa\",\"url\":\"https://ghkasa.com/\",\"sameAs\":[\"https://www.facebook.com/officialghkasa/\",\"https://www.instagram.com/yekasatv/\",\"http://youtube.com/y3kasatv\",\"https://twitter.com/officialghkasa\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://ghkasa.com/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https://i0.wp.com/ghkasa.com/wp-content/uploads/2019/05/Ghkasa-Logo.png?fit=624%2C120&ssl=1\",\"width\":624,\"height\":120,\"caption\":\"GhKasa\"},\"image\":{\"@id\":\"https://ghkasa.com/#logo\"}},{\"@type\":\"WebSite\",\"@id\":\"https://ghkasa.com/#website\",\"url\":\"https://ghkasa.com/\",\"name\":\"GhKasa\",\"description\":\"Ghana&#039;s Fact Hub &amp; More\",\"publisher\":{\"@id\":\"https://ghkasa.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":\"https://ghkasa.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"CollectionPage\",\"@id\":\"https://ghkasa.com/category/education/#webpage\",\"url\":\"https://ghkasa.com/category/education/\",\"name\":\"EDUCATION Archives | GhKasa\",\"isPartOf\":{\"@id\":\"https://ghkasa.com/#website\"},\"breadcrumb\":{\"@id\":\"https://ghkasa.com/category/education/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://ghkasa.com/category/education/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://ghkasa.com/category/education/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/\",\"url\":\"https://ghkasa.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/category/education/\",\"url\":\"https://ghkasa.com/category/education/\",\"name\":\"EDUCATION\"}}]}]}</script>\n<!-- / Yoast SEO Premium plugin. -->",
          "_links": {
            "self": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories/5292"
              }
            ],
            "collection": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories"
              }
            ],
            "about": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/taxonomies/category"
              }
            ],
            "wp:post_type": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/posts?categories=5292"
              }
            ],
            "curies": [
              {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
              }
            ]
          }
        },
        {
          "id": 58,
          "count": 531,
          "description": "",
          "link": "https://ghkasa.com/category/gossip-konkonsa/",
          "name": "GOSSIP/KONKONSA",
          "slug": "gossip-konkonsa",
          "taxonomy": "category",
          "parent": 0,
          "meta": [],
          "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Ghana&#039;s Gossip Hub &amp; More - GOSSIP/KONKONSA</title>\n<meta name=\"description\" content=\"Ghana&#039;s Gossip Hub &amp; More - GOSSIP/KONKONSA is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing...\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://ghkasa.com/category/gossip-konkonsa/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Ghana&#039;s Gossip Hub &amp; More - GOSSIP/KONKONSA\" />\n<meta property=\"og:description\" content=\"Ghana&#039;s Gossip Hub &amp; More - GOSSIP/KONKONSA is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing...\" />\n<meta property=\"og:url\" content=\"https://ghkasa.com/category/gossip-konkonsa/\" />\n<meta property=\"og:site_name\" content=\"GhKasa\" />\n<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@officialghkasa\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://ghkasa.com/#organization\",\"name\":\"GhKasa\",\"url\":\"https://ghkasa.com/\",\"sameAs\":[\"https://www.facebook.com/officialghkasa/\",\"https://www.instagram.com/yekasatv/\",\"http://youtube.com/y3kasatv\",\"https://twitter.com/officialghkasa\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://ghkasa.com/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https://i0.wp.com/ghkasa.com/wp-content/uploads/2019/05/Ghkasa-Logo.png?fit=624%2C120&ssl=1\",\"width\":624,\"height\":120,\"caption\":\"GhKasa\"},\"image\":{\"@id\":\"https://ghkasa.com/#logo\"}},{\"@type\":\"WebSite\",\"@id\":\"https://ghkasa.com/#website\",\"url\":\"https://ghkasa.com/\",\"name\":\"GhKasa\",\"description\":\"Ghana&#039;s Fact Hub &amp; More\",\"publisher\":{\"@id\":\"https://ghkasa.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":\"https://ghkasa.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"CollectionPage\",\"@id\":\"https://ghkasa.com/category/gossip-konkonsa/#webpage\",\"url\":\"https://ghkasa.com/category/gossip-konkonsa/\",\"name\":\"Ghana's Gossip Hub & More - GOSSIP/KONKONSA\",\"isPartOf\":{\"@id\":\"https://ghkasa.com/#website\"},\"description\":\"Ghana's Gossip Hub & More - GOSSIP/KONKONSA is Ghana's celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing...\",\"breadcrumb\":{\"@id\":\"https://ghkasa.com/category/gossip-konkonsa/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://ghkasa.com/category/gossip-konkonsa/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://ghkasa.com/category/gossip-konkonsa/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/\",\"url\":\"https://ghkasa.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/category/gossip-konkonsa/\",\"url\":\"https://ghkasa.com/category/gossip-konkonsa/\",\"name\":\"GOSSIP/KONKONSA\"}}]}]}</script>\n<!-- / Yoast SEO Premium plugin. -->",
          "_links": {
            "self": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories/58"
              }
            ],
            "collection": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories"
              }
            ],
            "about": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/taxonomies/category"
              }
            ],
            "wp:post_type": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/posts?categories=58"
              }
            ],
            "curies": [
              {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
              }
            ]
          }
        },
        {
          "id": 60,
          "count": 250,
          "description": "",
          "link": "https://ghkasa.com/category/listen/",
          "name": "LISTEN",
          "slug": "listen",
          "taxonomy": "category",
          "parent": 0,
          "meta": [],
          "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Ghana&#039;s Gossip Hub &amp; More - LISTEN and More</title>\n<meta name=\"description\" content=\"Ghana&#039;s Gossip Hub &amp; More - LISTEN is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://ghkasa.com/category/listen/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Ghana&#039;s Gossip Hub &amp; More - LISTEN and More\" />\n<meta property=\"og:description\" content=\"Ghana&#039;s Gossip Hub &amp; More - LISTEN is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta property=\"og:url\" content=\"https://ghkasa.com/category/listen/\" />\n<meta property=\"og:site_name\" content=\"GhKasa\" />\n<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@officialghkasa\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://ghkasa.com/#organization\",\"name\":\"GhKasa\",\"url\":\"https://ghkasa.com/\",\"sameAs\":[\"https://www.facebook.com/officialghkasa/\",\"https://www.instagram.com/yekasatv/\",\"http://youtube.com/y3kasatv\",\"https://twitter.com/officialghkasa\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://ghkasa.com/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https://i0.wp.com/ghkasa.com/wp-content/uploads/2019/05/Ghkasa-Logo.png?fit=624%2C120&ssl=1\",\"width\":624,\"height\":120,\"caption\":\"GhKasa\"},\"image\":{\"@id\":\"https://ghkasa.com/#logo\"}},{\"@type\":\"WebSite\",\"@id\":\"https://ghkasa.com/#website\",\"url\":\"https://ghkasa.com/\",\"name\":\"GhKasa\",\"description\":\"Ghana&#039;s Fact Hub &amp; More\",\"publisher\":{\"@id\":\"https://ghkasa.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":\"https://ghkasa.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"CollectionPage\",\"@id\":\"https://ghkasa.com/category/listen/#webpage\",\"url\":\"https://ghkasa.com/category/listen/\",\"name\":\"Ghana's Gossip Hub & More - LISTEN and More\",\"isPartOf\":{\"@id\":\"https://ghkasa.com/#website\"},\"description\":\"Ghana's Gossip Hub & More - LISTEN is Ghana's celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\",\"breadcrumb\":{\"@id\":\"https://ghkasa.com/category/listen/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://ghkasa.com/category/listen/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://ghkasa.com/category/listen/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/\",\"url\":\"https://ghkasa.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/category/listen/\",\"url\":\"https://ghkasa.com/category/listen/\",\"name\":\"LISTEN\"}}]}]}</script>\n<!-- / Yoast SEO Premium plugin. -->",
          "_links": {
            "self": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories/60"
              }
            ],
            "collection": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories"
              }
            ],
            "about": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/taxonomies/category"
              }
            ],
            "wp:post_type": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/posts?categories=60"
              }
            ],
            "curies": [
              {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
              }
            ]
          }
        },
        {
          "id": 509,
          "count": 11,
          "description": "",
          "link": "https://ghkasa.com/category/music-review-lyrified-africa/",
          "name": "MUSIC REVIEW || LYRIFIED AFRICA",
          "slug": "music-review-lyrified-africa",
          "taxonomy": "category",
          "parent": 0,
          "meta": [],
          "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>MUSIC REVIEW | LYRIFIED AFRICA Archives | GhKasa</title>\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://ghkasa.com/category/music-review-lyrified-africa/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"MUSIC REVIEW | LYRIFIED AFRICA Archives | GhKasa\" />\n<meta property=\"og:url\" content=\"https://ghkasa.com/category/music-review-lyrified-africa/\" />\n<meta property=\"og:site_name\" content=\"GhKasa\" />\n<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@officialghkasa\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://ghkasa.com/#organization\",\"name\":\"GhKasa\",\"url\":\"https://ghkasa.com/\",\"sameAs\":[\"https://www.facebook.com/officialghkasa/\",\"https://www.instagram.com/yekasatv/\",\"http://youtube.com/y3kasatv\",\"https://twitter.com/officialghkasa\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://ghkasa.com/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https://i0.wp.com/ghkasa.com/wp-content/uploads/2019/05/Ghkasa-Logo.png?fit=624%2C120&ssl=1\",\"width\":624,\"height\":120,\"caption\":\"GhKasa\"},\"image\":{\"@id\":\"https://ghkasa.com/#logo\"}},{\"@type\":\"WebSite\",\"@id\":\"https://ghkasa.com/#website\",\"url\":\"https://ghkasa.com/\",\"name\":\"GhKasa\",\"description\":\"Ghana&#039;s Fact Hub &amp; More\",\"publisher\":{\"@id\":\"https://ghkasa.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":\"https://ghkasa.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"CollectionPage\",\"@id\":\"https://ghkasa.com/category/music-review-lyrified-africa/#webpage\",\"url\":\"https://ghkasa.com/category/music-review-lyrified-africa/\",\"name\":\"MUSIC REVIEW | LYRIFIED AFRICA Archives | GhKasa\",\"isPartOf\":{\"@id\":\"https://ghkasa.com/#website\"},\"breadcrumb\":{\"@id\":\"https://ghkasa.com/category/music-review-lyrified-africa/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://ghkasa.com/category/music-review-lyrified-africa/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://ghkasa.com/category/music-review-lyrified-africa/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/\",\"url\":\"https://ghkasa.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/category/music-review-lyrified-africa/\",\"url\":\"https://ghkasa.com/category/music-review-lyrified-africa/\",\"name\":\"MUSIC REVIEW || LYRIFIED AFRICA\"}}]}]}</script>\n<!-- / Yoast SEO Premium plugin. -->",
          "_links": {
            "self": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories/509"
              }
            ],
            "collection": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories"
              }
            ],
            "about": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/taxonomies/category"
              }
            ],
            "wp:post_type": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/posts?categories=509"
              }
            ],
            "curies": [
              {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
              }
            ]
          }
        },
        {
          "id": 57,
          "count": 421,
          "description": "",
          "link": "https://ghkasa.com/category/people-lifestyle/",
          "name": "PEOPLE &amp; LIFESTYLE",
          "slug": "people-lifestyle",
          "taxonomy": "category",
          "parent": 0,
          "meta": [],
          "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Ghana&#039;s Gossip Hub &amp; More - PEOPLE &amp; LIFESTYLE</title>\n<meta name=\"description\" content=\"Ghana&#039;s Gossip Hub &amp; More - PEOPLE &amp; LIFESTYLE is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://ghkasa.com/category/people-lifestyle/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Ghana&#039;s Gossip Hub &amp; More - PEOPLE &amp; LIFESTYLE\" />\n<meta property=\"og:description\" content=\"Ghana&#039;s Gossip Hub &amp; More - PEOPLE &amp; LIFESTYLE is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing\" />\n<meta property=\"og:url\" content=\"https://ghkasa.com/category/people-lifestyle/\" />\n<meta property=\"og:site_name\" content=\"GhKasa\" />\n<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@officialghkasa\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://ghkasa.com/#organization\",\"name\":\"GhKasa\",\"url\":\"https://ghkasa.com/\",\"sameAs\":[\"https://www.facebook.com/officialghkasa/\",\"https://www.instagram.com/yekasatv/\",\"http://youtube.com/y3kasatv\",\"https://twitter.com/officialghkasa\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://ghkasa.com/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https://i0.wp.com/ghkasa.com/wp-content/uploads/2019/05/Ghkasa-Logo.png?fit=624%2C120&ssl=1\",\"width\":624,\"height\":120,\"caption\":\"GhKasa\"},\"image\":{\"@id\":\"https://ghkasa.com/#logo\"}},{\"@type\":\"WebSite\",\"@id\":\"https://ghkasa.com/#website\",\"url\":\"https://ghkasa.com/\",\"name\":\"GhKasa\",\"description\":\"Ghana&#039;s Fact Hub &amp; More\",\"publisher\":{\"@id\":\"https://ghkasa.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":\"https://ghkasa.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"CollectionPage\",\"@id\":\"https://ghkasa.com/category/people-lifestyle/#webpage\",\"url\":\"https://ghkasa.com/category/people-lifestyle/\",\"name\":\"Ghana's Gossip Hub & More - PEOPLE & LIFESTYLE\",\"isPartOf\":{\"@id\":\"https://ghkasa.com/#website\"},\"description\":\"Ghana's Gossip Hub & More - PEOPLE & LIFESTYLE is Ghana's celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing\",\"breadcrumb\":{\"@id\":\"https://ghkasa.com/category/people-lifestyle/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://ghkasa.com/category/people-lifestyle/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://ghkasa.com/category/people-lifestyle/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/\",\"url\":\"https://ghkasa.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/category/people-lifestyle/\",\"url\":\"https://ghkasa.com/category/people-lifestyle/\",\"name\":\"PEOPLE &amp; LIFESTYLE\"}}]}]}</script>\n<!-- / Yoast SEO Premium plugin. -->",
          "_links": {
            "self": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories/57"
              }
            ],
            "collection": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories"
              }
            ],
            "about": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/taxonomies/category"
              }
            ],
            "wp:post_type": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/posts?categories=57"
              }
            ],
            "curies": [
              {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
              }
            ]
          }
        },
        {
          "id": 2411,
          "count": 3,
          "description": "",
          "link": "https://ghkasa.com/category/sissala-acts/",
          "name": "SISSALA ACTS",
          "slug": "sissala-acts",
          "taxonomy": "category",
          "parent": 0,
          "meta": [],
          "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Ghana&#039;s Gossip Hub &amp; More - Sissala Music</title>\n<meta name=\"description\" content=\"Ghana&#039;s Gossip Hub &amp; More - Sissala Music is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://ghkasa.com/category/sissala-acts/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Ghana&#039;s Gossip Hub &amp; More - Sissala Music\" />\n<meta property=\"og:description\" content=\"Ghana&#039;s Gossip Hub &amp; More - Sissala Music is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta property=\"og:url\" content=\"https://ghkasa.com/category/sissala-acts/\" />\n<meta property=\"og:site_name\" content=\"GhKasa\" />\n<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@officialghkasa\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://ghkasa.com/#organization\",\"name\":\"GhKasa\",\"url\":\"https://ghkasa.com/\",\"sameAs\":[\"https://www.facebook.com/officialghkasa/\",\"https://www.instagram.com/yekasatv/\",\"http://youtube.com/y3kasatv\",\"https://twitter.com/officialghkasa\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://ghkasa.com/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https://i0.wp.com/ghkasa.com/wp-content/uploads/2019/05/Ghkasa-Logo.png?fit=624%2C120&ssl=1\",\"width\":624,\"height\":120,\"caption\":\"GhKasa\"},\"image\":{\"@id\":\"https://ghkasa.com/#logo\"}},{\"@type\":\"WebSite\",\"@id\":\"https://ghkasa.com/#website\",\"url\":\"https://ghkasa.com/\",\"name\":\"GhKasa\",\"description\":\"Ghana&#039;s Fact Hub &amp; More\",\"publisher\":{\"@id\":\"https://ghkasa.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":\"https://ghkasa.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"CollectionPage\",\"@id\":\"https://ghkasa.com/category/sissala-acts/#webpage\",\"url\":\"https://ghkasa.com/category/sissala-acts/\",\"name\":\"Ghana's Gossip Hub & More - Sissala Music\",\"isPartOf\":{\"@id\":\"https://ghkasa.com/#website\"},\"description\":\"Ghana's Gossip Hub & More - Sissala Music is Ghana's celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\",\"breadcrumb\":{\"@id\":\"https://ghkasa.com/category/sissala-acts/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://ghkasa.com/category/sissala-acts/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://ghkasa.com/category/sissala-acts/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/\",\"url\":\"https://ghkasa.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/category/sissala-acts/\",\"url\":\"https://ghkasa.com/category/sissala-acts/\",\"name\":\"SISSALA ACTS\"}}]}]}</script>\n<!-- / Yoast SEO Premium plugin. -->",
          "_links": {
            "self": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories/2411"
              }
            ],
            "collection": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories"
              }
            ],
            "about": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/taxonomies/category"
              }
            ],
            "wp:post_type": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/posts?categories=2411"
              }
            ],
            "curies": [
              {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
              }
            ]
          }
        },
        {
          "id": 61,
          "count": 262,
          "description": "",
          "link": "https://ghkasa.com/category/watch/",
          "name": "WATCH",
          "slug": "watch",
          "taxonomy": "category",
          "parent": 0,
          "meta": [],
          "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Ghana&#039;s Gossip Hub &amp; More - Watch and More</title>\n<meta name=\"description\" content=\"Ghana&#039;s Gossip Hub &amp; More - Watch is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://ghkasa.com/category/watch/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Ghana&#039;s Gossip Hub &amp; More - Watch and More\" />\n<meta property=\"og:description\" content=\"Ghana&#039;s Gossip Hub &amp; More - Watch is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta property=\"og:url\" content=\"https://ghkasa.com/category/watch/\" />\n<meta property=\"og:site_name\" content=\"GhKasa\" />\n<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@officialghkasa\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://ghkasa.com/#organization\",\"name\":\"GhKasa\",\"url\":\"https://ghkasa.com/\",\"sameAs\":[\"https://www.facebook.com/officialghkasa/\",\"https://www.instagram.com/yekasatv/\",\"http://youtube.com/y3kasatv\",\"https://twitter.com/officialghkasa\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://ghkasa.com/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https://i0.wp.com/ghkasa.com/wp-content/uploads/2019/05/Ghkasa-Logo.png?fit=624%2C120&ssl=1\",\"width\":624,\"height\":120,\"caption\":\"GhKasa\"},\"image\":{\"@id\":\"https://ghkasa.com/#logo\"}},{\"@type\":\"WebSite\",\"@id\":\"https://ghkasa.com/#website\",\"url\":\"https://ghkasa.com/\",\"name\":\"GhKasa\",\"description\":\"Ghana&#039;s Fact Hub &amp; More\",\"publisher\":{\"@id\":\"https://ghkasa.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":\"https://ghkasa.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"CollectionPage\",\"@id\":\"https://ghkasa.com/category/watch/#webpage\",\"url\":\"https://ghkasa.com/category/watch/\",\"name\":\"Ghana's Gossip Hub & More - Watch and More\",\"isPartOf\":{\"@id\":\"https://ghkasa.com/#website\"},\"description\":\"Ghana's Gossip Hub & More - Watch is Ghana's celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\",\"breadcrumb\":{\"@id\":\"https://ghkasa.com/category/watch/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://ghkasa.com/category/watch/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://ghkasa.com/category/watch/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/\",\"url\":\"https://ghkasa.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/category/watch/\",\"url\":\"https://ghkasa.com/category/watch/\",\"name\":\"WATCH\"}}]}]}</script>\n<!-- / Yoast SEO Premium plugin. -->",
          "_links": {
            "self": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories/61"
              }
            ],
            "collection": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories"
              }
            ],
            "about": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/taxonomies/category"
              }
            ],
            "wp:post_type": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/posts?categories=61"
              }
            ],
            "curies": [
              {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
              }
            ]
          }
        },
        {
          "id": 248,
          "count": 27,
          "description": "",
          "link": "https://ghkasa.com/category/world-stars/",
          "name": "WORLD STARS",
          "slug": "world-stars",
          "taxonomy": "category",
          "parent": 0,
          "meta": [],
          "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.2 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Ghana&#039;s Gossip Hub &amp; More - World Stars</title>\n<meta name=\"description\" content=\"Ghana&#039;s Gossip Hub &amp; More - World Stars is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://ghkasa.com/category/world-stars/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Ghana&#039;s Gossip Hub &amp; More - World Stars\" />\n<meta property=\"og:description\" content=\"Ghana&#039;s Gossip Hub &amp; More - World Stars is Ghana&#039;s celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\" />\n<meta property=\"og:url\" content=\"https://ghkasa.com/category/world-stars/\" />\n<meta property=\"og:site_name\" content=\"GhKasa\" />\n<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@officialghkasa\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://ghkasa.com/#organization\",\"name\":\"GhKasa\",\"url\":\"https://ghkasa.com/\",\"sameAs\":[\"https://www.facebook.com/officialghkasa/\",\"https://www.instagram.com/yekasatv/\",\"http://youtube.com/y3kasatv\",\"https://twitter.com/officialghkasa\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://ghkasa.com/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https://i0.wp.com/ghkasa.com/wp-content/uploads/2019/05/Ghkasa-Logo.png?fit=624%2C120&ssl=1\",\"width\":624,\"height\":120,\"caption\":\"GhKasa\"},\"image\":{\"@id\":\"https://ghkasa.com/#logo\"}},{\"@type\":\"WebSite\",\"@id\":\"https://ghkasa.com/#website\",\"url\":\"https://ghkasa.com/\",\"name\":\"GhKasa\",\"description\":\"Ghana&#039;s Fact Hub &amp; More\",\"publisher\":{\"@id\":\"https://ghkasa.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":\"https://ghkasa.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"CollectionPage\",\"@id\":\"https://ghkasa.com/category/world-stars/#webpage\",\"url\":\"https://ghkasa.com/category/world-stars/\",\"name\":\"Ghana's Gossip Hub & More - World Stars\",\"isPartOf\":{\"@id\":\"https://ghkasa.com/#website\"},\"description\":\"Ghana's Gossip Hub & More - World Stars is Ghana's celebrity gossip hub where we say everything as it is. Hottest trends, discovering and showcasing Ghana\",\"breadcrumb\":{\"@id\":\"https://ghkasa.com/category/world-stars/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://ghkasa.com/category/world-stars/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://ghkasa.com/category/world-stars/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/\",\"url\":\"https://ghkasa.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"WebPage\",\"@id\":\"https://ghkasa.com/category/world-stars/\",\"url\":\"https://ghkasa.com/category/world-stars/\",\"name\":\"WORLD STARS\"}}]}]}</script>\n<!-- / Yoast SEO Premium plugin. -->",
          "_links": {
            "self": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories/248"
              }
            ],
            "collection": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/categories"
              }
            ],
            "about": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/taxonomies/category"
              }
            ],
            "wp:post_type": [
              {
                "href": "https://ghkasa.com/wp-json/wp/v2/posts?categories=248"
              }
            ],
            "curies": [
              {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
              }
            ]
          }
        }
      ]
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
