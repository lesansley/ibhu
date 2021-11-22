import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from '../components/image'
import Flags from '../components/flags';
import taiwanStyles from './taiwan.module.scss';

const Taiwan = () => {
	let data = useStaticQuery(graphql`
		query	{allFile(filter: {name: {regex: "/section/i"}}) {
			nodes {
				publicURL
				name
			}
	}}`)
	data = data.allFile.nodes
	let section1url;
	let section2url;
	let section5url;
	let section6url;
	let section7url;
	for (let i = 0; i < data.length; i++) {
		switch(data[i].name.charAt(data[i].name.length-1)) {
			case '1':
				section1url = data[i].publicURL;
				break;
			case '2':
				section2url = data[i].publicURL;
				break;
			case '5':
				section5url = data[i].publicURL;
				break;
			case '6':
				section6url = data[i].publicURL;
				break;
			case '7':
				section7url = data[i].publicURL;
				break;
			default:
				break;
		}
	}

	return (
		<div className={`container-fluid ${taiwanStyles.containerFluid} ${taiwanStyles.body}`}>
			<div className='row'>
				<div className={`col-12 col-md-12 ${taiwanStyles.main_hero_section}`} style={{ backgroundImage: `url(${section1url})` }}>
				<div className={`${taiwanStyles.flags}`}>
						<Flags />
					</div>
					<h2 className={`${taiwanStyles.main_heading}`}>RÒU BY T-HAM 獨家代理 </h2>
					<div className='container'>
						<h1 className={`${taiwanStyles.hero_heading}`}>蘊含非洲精髓的 Indlovu琴酒</h1>
						<p className={`${taiwanStyles.herop}`}>
							非洲的大象有三分之一生活在南非的博茨瓦納，<br />
							因偷獵、疾病等各種原因，近年來數量正在不斷銳減中，<br />
							一對釀酒師夫婦Les 和Paula 在南非野遊中得到的奇想，<br />
							以象糞釀造、風格全球獨一的精品琴酒，<br />
							作為遊訪南非的熱門伴手禮，使享受美酒也助於拯救大象!
						</p>
					</div>
				</div>
			</div>

			<div className='row'>
				<div className={`col-12 col-md-12 ${taiwanStyles.second_section} d-flex align-items-center`} style={{ backgroundImage: `url(${section2url})` }}>
					<div className='container'>
						<div className='row px-4'>
							<div className='col-12 col-md-5 mb3'>
								<div className='img-fluid'>
									<Image filename='three-bottles.png' />
								</div>
							</div>
							<div className={`col-12 col-md-7 ${taiwanStyles.rightside}`}>
								<h2 className={`${taiwanStyles.first_sub_heading} col-6 d-inline`}>| 象糞釀造的琴酒！？ | <span className={`col-6 ${taiwanStyles.elephantLogo}`}><Image filename='elephant-logo.png'/></span></h2>
								<p className={`${taiwanStyles.gen_p} mt-5`}>
									大象消化快、腸道細菌數量低，經過消化的食物不到吃進去的三分之一。象糞中會充滿著多種多樣植物。Les：「正因如此，在大象的糞便中你可以找到最棒的植物。為什麼我們不乾脆讓大象負責收集這些植物，然後我們利用這些植物來釀製琴酒呢？」
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='row'>
				<div className={`col-12 col-md-12 ${taiwanStyles.third_section} d-flex align-items-center`}>
					<div className='container'>
						<div className='row px-4 px-md-0 d-flex'>
							<div className='col-12 col-md-6 mb3'>
								<h2 className={`${taiwanStyles.first_sub_heading} redcolor`}>
									| 關於Indlovu 琴酒 |
								</h2>
								<div className='mt-4'>
									<div className={`img-fluid ${taiwanStyles.ibhulogo}`}>
										<Image filename='ibhu-icon-512x512.png' alt='Ibhu Logo' />
									</div>
									<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor}`}>
										IBHU品牌以創新精神創立。Indlovu是品牌旗下琴酒名稱，取自南非祖魯語Indlovu「大象」一詞，Indlovu琴酒的基本成份來自經過清洗和乾燥的大象糞便，將提取的植物成分注入琴酒以提供獨一無二的非洲風味。
									</p>
								</div>
								
							</div>
							<div className={`col-12 col-md-6 ${taiwanStyles.rightside}`}>
								<div className='img-fluid'>
									<Image filename='pink-and-original.jpg' alt='Indlovu Pink and Indlovu Original gin bottles' />
								</div>
							</div>
						</div>

						<div className={`row px-4 px-md-0 d-flex ${taiwanStyles.mtt5}`}>
							<div className='col-12 col-md-6 order-2 order-md-1 rightside'>
								<div className='img-fluid'>
									<Image filename='dung-collecting.jpg'  alt='Collecting elephant dung ' />
								</div>
							</div>

							<div className='col-12 col-md-6 order-1 order-md-2 mb3'>
								<h2 className={`${taiwanStyles.first_sub_heading} ${taiwanStyles.redcolor}`}>
									| 具有大地的獨特風味 |
								</h2>
								<div className='mt-4'>
									
									<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor}`}>
										象糞在經過清洗風乾後會存留花朵、樹葉和樹皮等植物。把這些植物消毒乾燥後放在通風的櫥櫃中，最終用於釀造琴酒。因此，象糞便能賦予酒中甜美木質及土地、壤土氣息，並且些許如辛香料的辣感。
									</p>
									<div className='row'>
										<div className='col-6 col-md-6 col-lg-3 text-center mb3'>
											<span className={`${taiwanStyles.steptext}`}>Step 1</span>
											<div className={`${taiwanStyles.circle}`}>
												收集
											</div>
										</div>
										<div className='col-6 col-md-6 col-lg-3 text-center mb3'>
											<span className={`${taiwanStyles.steptext}`}>Step 2</span>
											<div className={`${taiwanStyles.circle}`}>
												乾燥磨碎
											</div>
										</div>
										<div className='col-6 col-md-6 col-lg-3 text-center mb3'>
											<span className={`${taiwanStyles.steptext}`}>Step 3</span>
											<div className={`${taiwanStyles.circle}`}>
												過濾消毒
											</div>
										</div>
										<div className='col-6 col-md-6 col-lg-3 text-center mb3'>
											<span className={`${taiwanStyles.steptext}`}>Step 4</span>
											<div className={`${taiwanStyles.circle}`}>
												釀造
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className={`row px-4 px-md-0 d-flex ${taiwanStyles.mtt5}`}>
							<div className='col-12 col-md-6 mb3'>
								<h2 className={`${taiwanStyles.first_sub_heading} ${taiwanStyles.redcolor}`}>
									| 每批Indlovu琴酒都是限量 |
								</h2>
								<div className='mt-4'>
									<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} `}>
										五大袋原料可釀造4,000瓶Indlovu琴酒，不僅每批都是限量製作且風味呈現上，也因批次、年份不同而有所差異，如同葡萄酒。
										而採收的日期和地點不同。隨著季節和大象食入的植物種類也有所不同，因此賦予琴酒的風味在細微處也不會千遍一律。
									</p>
								</div>
							</div>
							<div className={`col-12 col-md-6 ${taiwanStyles.rightside}`}>
								<Image filename='elephants-in-a-glass.jpg' className='img-fluid' alt='Elephants in a glass of Indlocu Original' />
							</div>
						</div>

						<div className={`row px-4 px-md-0 d-flex ${taiwanStyles.mtt5}`}>
							<div className='col-12 col-md-6 order-2 order-md-1  rightside'>
								<Image filename='original-in-a-hand.jpg' className='img-fluid' alt='Beautiful hand hold Indlovu Original gin bottle ' />
							</div>

							<div className='col-12 col-md-6 order-1 order-md-2  mb3'>
								<h2 className={`${taiwanStyles.first_sub_heading} ${taiwanStyles.redcolor} `}>
									| 出處都可以被完整查驗 |
								</h2>
								<div className='mt-4'>
									<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} `}>
										瓶身上會標示原料出產地及收集日期，其中包含兩組關鍵數字。
										<span className={`${taiwanStyles.differentbg}`}>大象收集原料的禁獵區坐標</span> <br />
										例. 34.03S 22.14E = Botlierskop 禁獵區
										<span className={`${taiwanStyles.differentbg}`}>大象收集原料的日期</span> <br />
										例. 260618 = 2018年06月26日
										如此一來，就可以比較不同年份的象糞琴酒了。
									</p>
								</div>
							</div>
						</div>


						<div className={`row px-4 px-md-0 d-flex ${taiwanStyles.mtt5}`}>
							

							<div className='col-12 col-md-6 order-2 order-md-1 mb3'>
								<h2 className={`${taiwanStyles.first_sub_heading} ${taiwanStyles.redcolor} `}>
									| 具有“野生動物保護”精神的琴酒 |
								</h2>
								<div className='mt-4'>
									<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} `}>
										南非當地公司 IBHU (Pty) Ltd.|
										將其銷售利潤的|15%|捐贈給非洲基金會，讓我們享受美酒也能幫助保育瀕臨滅絕的非洲象。
									</p>
									<div className='text-center text-md-right'>
										<Image filename='certificates.png' className='img-fluid ' />
									</div>
								</div>
							</div>
							<div className={`col-12 col-md-6 order-1 order-md-2 mb3 ${taiwanStyles.rightside}`}>
								<Image filename='elephant-and-prickly-pear.jpg' className='img-fluid' alt='Elephant behind prickly pear tree ' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='row d-flex align-items-center'>
				<div className={`col-12 ${taiwanStyles.fifth_section} d-flex align-items-center px-4`} style={{ backgroundImage: `url(${section5url})` }}>
					<div className='container'>
						<div className={`col-12 offset-0 col-md-10 offset-md-2 col-lg-8 offset-lg-4 forbg d-flex align-items-center ${taiwanStyles.formargintop} `}>
							<div>
								<h2 className={`${taiwanStyles.forheading}`}>南非大象琴酒 Indlovu Original</h2>
								<p className={`${taiwanStyles.gen_pp}`}>
									適合擁有冒險精神和挑剔的琴酒收藏家。唯一從“非洲象覓食植物”中獲得靈感而生的琴酒，色澤光滑剔透，酒中帶有壤土、土質等豐富有層次的風味；此外，一只杯子與數顆冰塊能將之中細節展現得更加淋漓盡致。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='row d-flex align-items-center'>
				<div className={`col-12 ${taiwanStyles.sixth_section} d-flex align-items-center px-4`} style={{ backgroundImage: `url(${section6url})` }}>
					<div className='container'>
						<div className={`col-12 col-md-10 offset-md-2 col-lg-8 offset-lg-4 ${taiwanStyles.forbg} d-flex align-items-center ${taiwanStyles.formargintop}`}>
							<div>
								<h2 className={`${taiwanStyles.forheading}`}>粉紅大象琴酒Indlovu Pink  </h2>
								<p className={`${taiwanStyles.gen_pp}`}>
									大象的叢林美食是果實可口、風味細膩的刺梨仙人掌。對於聰明大象來說，利用粗重的腳底去除尖刺是易如反掌！刺梨含有豐富的多酚、礦物質和維生素。在傳統醫學中，刺梨果實的果肉常用於治療各式炎症甚至宿醉。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='row d-flex align-items-center'>
				<div className={`col-12 ${taiwanStyles.seventh_section} d-flex align-items-center px-4`} style={{ backgroundImage: `url(${section7url})` }}>
					<div className='container'>
						<div className={`col-12 col-md-10 offset-md-2 col-lg-8 offset-lg-4 ${taiwanStyles.forbg} d-flex align-items-center ${taiwanStyles.formargintop}`}>
							<div>
								<h2 className={`${taiwanStyles.forheading}`}>柑橘大象琴酒Indlovu Citrus </h2>
								<p className={`${taiwanStyles.gen_pp}`}>
									大象對在大草原上自然生長、美味濃郁的馬魯拉果和柑橘充滿熱情。憑藉其卓越的嗅覺，從很遠的距離就可以嗅到柑橘香味的馬魯拉果和橙果，含有高含量、可強化免疫系統的抗氧化劑和維生素C。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='row d-flex align-items-center'>
				<div className={`col-12 ${taiwanStyles.eight_section} d-flex align-items-center py-5 px-4 px-md-auto`}>
					<div className='container py-5'>
						<div className='row'>
							<div className='col-12 col-md-6 mb3'>
								<Image filename='profile-images.jpg' className='img-fluid' alt='Black and white profile image of Paula and Les Ansley' />
								<Image filename='les-holding-gin.jpg' className='img-fluid' alt='Les Ansley holding a bottle of Indlovu Original gin'/>
							</div>
							<div className='col-12 col-md-6 mb3'>
								<h2 className={`${taiwanStyles.first_sub_heading} ${taiwanStyles.redcolor}`}>| 關於創辦人 |</h2>
								<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} mt-4`}>
									Les Ansley 與Paula 這對夫妻，搬離居住長達15年的英國而定居南非，認為南非不僅提供更好的創業環境，還有更多能夠做出對社會有貢獻價值的機會。
								</p>
								<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} mt-4`}>
									在肯尼亞旅行中。當時寶拉一邊啜飲著琴通寧，一邊看著一群大象，一邊聽著導遊解釋大象選擇棲息地的方式、生活習性和牠們實際消化吸收的植物比例有多低。而這也是她瘋狂的想法開始…
								</p>
								<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} mt-4`}>
									所以Indlovu 琴酒就是這樣誕生的，一款由大象設計，非洲製造的琴酒。“Indlovu” 是幾種非洲語言中大象的意思，利用世界最大陸地動物的覓食習慣來選擇入酒的植物性香料。
								</p>
							</div>
						</div>

						<div className='row mt-5'>
							<div className='col-12 col-md-6 mb3 px-md-5 text-center'>
								<h2 className={`${taiwanStyles.first_sub_heading} ${taiwanStyles.redcolor} ${taiwanStyles.litlesmall}`}>| 2018年驕傲南非獎得主酒  |</h2>
								<div className='row mt-2 mt-md-5'>
									<div className='col-12 text-center text-md-left col-md-3 mb3'>
									<Image filename='proudlysa-logo.png' className='img-fluid' alt='Proudly South African logo'/>
									</div>
									<div className='col-12 col-md-9 text-md-left'>
										<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} mt-4`}>南非公共機構僅向滿足產品和服務的品質和安全、考慮自然環境、維護校準的工作環境以及在南非生產等各種條件的人員發送。</p>
									</div>
								</div>
							</div>
							<div className='col-12 col-md-6 px-md-5'>
								<h2 className={`${taiwanStyles.first_sub_heading} ${taiwanStyles.redcolor} ${taiwanStyles.litlesmall}`}>| SA CRAFT GIN AWARDS 2019雙金獎得主 |</h2>
								<div className='row'>
									<div className='col-12 text-center text-md-left col-md-4 mb3'>
										<Image filename='sacraft-2019.png' className='img-fluid' alt='South African Craft Gin award double gold for 2021' />
									</div>
									<div className='col-12 col-md-8'>
										<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor}  mt-4`}>南非精品琴酒比賽。《印愛錦原創》雙金獎。</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='row'>
				<div className={`col-12 col-md-12 ${taiwanStyles.ninth_section} pb-0 px-4`}>
					<div className='container'>
						<div className='row'>
							<h2 className={`${taiwanStyles.first_sub_heading} col-6 d-inline`}>| 品酒見證分享 | <span className={`col-6 ${taiwanStyles.elephantLogo}`}><Image filename='elephant-logo.png'/></span></h2>
						</div>
						<div className='row mt-5'>
							<div className='col-12 col-md-6 mb-0 mb-md-auto'>
								<div className={`${taiwanStyles.forrating}`}>
									<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} mt-4`}>最為一位琴通寧愛好者，我一直想要了解為什麼最近南非精品琴酒這麼的熱門 … 以至於我品嚐了Indlovu琴酒。非常卓越的風味、味道豐富且有層次。另外含有動物保育理念更是難得。</p>
									<p className={`text-right ${taiwanStyles.reviewer}`}>Fiona•P</p>
								</div>
								<div className={`${taiwanStyles.forrating}`}>
									<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} mt-4`}>到目前為止我最喜歡的琴酒。 我喜歡它獨特的口味。與一般大量生產的琴酒不同，到目前為止，我品嚐過的每一瓶都有細微的差別。它的味道細膩內斂，但在對上味道強勁的通寧水卻毫不遜色。</p>
									<p className={`text-right ${taiwanStyles.reviewer}`}>Chris H</p>
								</div>
							</div>
							<div className='col-12 col-md-6 mb3'>
								<div className={`${taiwanStyles.forrating} mt-0 mt-md-auto`}>
									<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor}`}>作為一個威士忌愛好者，我對它豐富的味道感到特別驚訝和印象深刻。加顆冰塊即可輕鬆易飲。美麗不凡的色澤。以琴通寧方式呈現也非常棒，但要記得多加一片檸檬。我會推薦給任何一位琴酒和威士忌愛好者:)</p>
									<p className={`text-right ${taiwanStyles.reviewer}`}>Ronelle•L</p>
								</div>
								<div className={`${taiwanStyles.forrating}`}>
									<p className={`${taiwanStyles.gen_p} ${taiwanStyles.notbold} ${taiwanStyles.redcolor} mt-4`}>這是一款酒體豐滿、高度芳香的琴酒，帶有青草、壤土的氣息。它適合搭配印度通寧水，但更適合搭配巧克力或咖啡一起啜飲…我在2018年發現的三大南非琴酒之一。</p>
									<p className={`text-right ${taiwanStyles.reviewer}`}>Surita@Ginned Up</p>
								</div>
							</div>
						</div>
						<div className='row py-5'>
							<div className='col-12 text-center py-5 text-white'>
								<h2 className={`${taiwanStyles.footerheading}`}>
									於台灣地區，如需購買與詢洽，歡迎通過以下電子郵件與我們聯繫。</h2>
								<h3 className={`${taiwanStyles.footerheadingthree}`}>台灣地區獨家代理  RÒU BY T-HAM</h3>
									<span><i className={`fa ${taiwanStyles.fa} fa-envelope ${taiwanStyles.faEnvelope}`}></i> </span>
									<a href='mailto:rou@tham.com.tw' className={`${taiwanStyles.fotlink}`}>rou@tham.com.tw</a>
							</div>
						</div>
					</div>
					<Image filename='pattern2.png' />
				</div>
			</div>
		</div>
	)
}

export default Taiwan
