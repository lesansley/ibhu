module.exports = {
  siteMetadata: {
    title: `Ibhu - Dare to be different.`,
    description: `Home of Africa's Original Elephant Dung Gin`,
		author: `Les Ansley`,
		email: `info 'at' ibhu.co.za`,
		lang: 'en',
		social: [
			{
				name: 'facebook',
				url: 'https://www.facebook.com/Indlovugin/'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/indlovugin',
				site: '@indlovugin'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/indlovugin',
				site: '@indlovugin'
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
