module.exports = {
	siteMetadata: {
		title: `Ibhu - Dare to be different`,
		name: 'Ibhu',
		description: `Home of Africa's Original Elephant Dung Gin`,
		contact: `Les Ansley`,
		email: `info@ibhu.co.za`,
		tel: '+27 66 216 9667',
		lang: 'en',
		social: [
			{
				name: 'facebook',
				url: 'https://www.facebook.com/Indlovugin/',
				handle: ''
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/indlovugin',
				handle: '@indlovugin'
			},
		],
		breakPoints: [
			{
				ref: 'mega',
				value: '1200px'
			},
			{
				ref: 'large',
				value: '992px'
			},
			{
				ref: 'med',
				value: '768px'
			},
			{
				ref: 'small',
				value: '576px'
			}
		],
		menuLinks: [
			{
				name: 'Home',
				link: '/'
			},
			{
				name: 'Our Story',
				link: '/story/'
			},
			{
				name: 'Indlovu Gin',
				link: '/indlovu/'
			},
			{
				name: 'Giving Back',
				link: '/giving/'
			},
			{
				name: 'Stockists',
				link: '/stockists/'
			},
			{
				name: 'Contact',
				link: '/contact/'
			},
			
			{
				name: 'About',
				link: '/about/'
			}
		],
		originalMenu: [
			{
				name: 'Original',
				link: '#original'
			},
			{
				name: 'Provenance',
				link: '#provenance'
			},
			{
				name: 'testamonials',
				link: '#testamonials'
			},
			{
				name: 'FAQ',
				link: '#faq'
			}
		]
	},
  plugins: [
		`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `gatsby`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/icons/ibhu-black.png`
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
