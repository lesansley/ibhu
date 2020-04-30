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
		menuLinks:[
			{
				name:'Home',
				link:'/'
			},
			{
				name:'Indlovu Gin',
				link:'/indlovu/'
			},
			{
				name:'Our Story',
				link:'/story/'
			},
			{
				name:'Giving Back',
				link:'/giving/'
			},
			{
				name:'Contact',
				link:'/contact/'
			},
			{
				name:'FAQ',
				link:'/faq/'
			},
			{
				name:'About',
				link:'/about/'
			}
		]
	},
  plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
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
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
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
