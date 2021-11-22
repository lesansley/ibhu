import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from '../components/image'
import japanStyles from './japan.module.scss';

const Japan = () => {

	const data = useStaticQuery(graphql`
		query	{file(name: {eq: "hero-image"}) {
			publicURL
		}}`)
	
	return (
	<div className={`body ${japanStyles.body}`}>
		<div className={`container-fluid ${japanStyles.row}`}>
				<div className={`container-fluid ${japanStyles.containerFluid} ${japanStyles.row}`}>
					<div className={`${japanStyles.heroSection} col-12 col-md-12`} style={{ backgroundImage: `url(${data.file.publicURL})` }}>
					<div className='container'>
						<div className={`top-right ${japanStyles.topRight} text-center text-md-right pt-3`}>
							<a href="/japan">インドラブジン　日本語ページ</a>
								<span className='px-2 text-white'><i className={`fa ${japanStyles.fa} fa-angle-right ${japanStyles.faAngleRight}`}></i></span>
							<a href="/">go to English page</a>
						</div>
							<div className={`container-fluid ${japanStyles.containerFluid} ${japanStyles.row}`}>
								<div className={`menu ${japanStyles.menu} col-12 p-0`}>
									<nav className={`navbar ${japanStyles.navbar} navbar-expand-lg p-0`}>
										<div>
											<Link className={`logo-image ${japanStyles.logoImage} navbar-brand`} to="https://ibhu.co.za">
												<Image filename='ibhu-logo.png' alt='ibhu logo'/>
											</Link>
										</div>
										<button className={`navbar-toggler ${japanStyles.navbarToggler}`} type="button" data-toggle="collapse" data-target="#navv" aria-controls="navv">
          						<i className={`fa ${japanStyles.fa} fa-bars ${japanStyles.faBars}`}></i>
        						</button>
        						<div className='collapse navbar-collapse' id="navv">
											<ul className='navbar-nav ml-auto'>
												<li className='nav-item'>
													<a className='nav-link page-scroll' href="#インドラブジンとは">インドラブジンとは　</a>
												</li>
												<li className='nav-item'>
													<a className='nav-link page-scroll' href="#インドラブジンのシリーズ">　インドラブジンのシリーズ　</a>
												</li>
												<li className='nav-item'>
													<a className='nav-link page-scroll' href="#品質の保証">品質の保証 </a>
												</li>
												<li className='nav-item'>
													<a className='nav-link page-scroll' href="#sectionD">日本での購入・お問い合わせ</a>
												</li>
											</ul>
										</div>
									</nav>
						</div>
					</div>
				</div>
			</div>
		</div>	
		<div className={`row ${japanStyles.row} ptb-50 ${japanStyles.ptb50}`}>
			<div className='col-12 col-md-12 second-section' id="インドラブジンとは">
				<div className='container'>
					<h2 className='text-center'>南アフリカ “象がもたらした最高峰のクラフト GIN”</h2>
					<div className='row mt-5'>
						<div className={`col-12 col-md-6 mb3 ${japanStyles.mb3}`}>
							<Image filename='elephant.jpg' alt='Elephant'/>
						</div>
						<div className={`col-12 col-md-6 mb3 ${japanStyles.mb3}`}>
							<p className={`normal-p ${japanStyles.normalP}`}>
								インドラブジンはアフリカ・サバンナに生息する象の糞から取り出し
								たアカシアやアロエ、アガトスマなどをボタニカルとしています。
								象の好物であるこれらの植物は、香りの良さはもちろん強力な抗酸化
								作用（ポリフェノール）を含み、胃腸炎などの内服または下剤として
								利用される薬草として現地ネイティブの間で珍重されてきたものばか りです。
								<br /><br />
								さらに象はその植物の中でも良質で新鮮なものを厳選し食すので、ア フリカでは古くから象からのボタニカルは薬として使用されてきまし
								た。その上質なボタニカルを抽出してできたのがインドラブジンです。
								インドラブジンの美しい透き通る “ボタニカルイエロー” は、それら 植物繊維が厳選された証なのです。
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={`row ${japanStyles.row} ptb-50 ${japanStyles.ptb50}`}>
			<div className='col-12 col-md-12 second-section'>
				<div className='container'>
					<div className='text-center'>
						<h2 className={`text-center subheading ${japanStyles.subheading}`} id="インドラブジンのシリーズ">
						インドラブのシリーズ
						</h2>
					</div>
					<div className='row mt-5'>
										<div className={`col-12 col-md-6 mb3 ${japanStyles.mb3}`}>
										<Image filename='indlovu-original-with-box.jpg' alt='Indlovu Original gin with presentation box'/>
							<h3 className={`p-Title ${japanStyles.pTitle}`}>インドラブ・ジン オリジナル</h3> 
							<p className={`normal-p ${japanStyles.normalP}`}>
								アフリカ・サバンナに生息する、象の糞を洗浄・抽出して作られた最 高峰のクラフトジン。 <br />
								象たちによって良質で新鮮な植物が厳選され、香り高いだけでなく、
								強い抗酸化作用を持つため現地では古くから薬として使用されるほど、<br />
								豊富な栄養を含んでいます。<br />
								豊富で良質な食物繊維が厳選された証は、この美しく透き通る “ボタ ニカルイエロー” に現れています。
							</p>
						</div>
										<div className={`col-12 col-md-6 mb3 ${japanStyles.mb3}`}>
										<Image filename='indlovu-pink-with-box.jpg' alt='Indlovu pink gin bottle with presentation box'/>
							<h3 className={`p-Title ${japanStyles.pTitle}`}>インドラブ・ピンクジン</h3> 
							<p className={`normal-p ${japanStyles.normalP}`}>
								サバンナの象が好んで食す果物「ウチワサボテン」の実。この果物に <br />
								はポリフェノール、ミネラル、ビタミンを多く含みます。 <br />
								サボテンのトゲを、知的で器用な象たちは上手く足で処理しながら食 <br />
								します。そんな象が好むウチワサボテンをジンに香り付けし、誕生し <br />
								たのがインドラブ・ピンクジンです。 <br />
								目を閉じて、この一滴を味わって下さい。アフリカ象のもたらすサバ <br />
								ンナの優美な味わいと、アフリカの香りに身を委ねて下さい。 <br />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={`row ${japanStyles.row} ptb-50 ${japanStyles.ptb50}`}>
			<div className='col-12 col-md-12 second-section'>
				<div className='container'>
					<div className='row mt-5'>
						<div className={`col-12 col-md-6 mb3 ${japanStyles.mb3}`}>
							<h4 className={`subheading ${japanStyles.subheading} text-center d-block pb-2`} id="品質の保証">
								品質の保証
							</h4>
									<p className={`normal-p ${japanStyles.normalP} pt-3`}>
								ボタニカルを抽出する工程で洗浄作業を入念におこなっています。 もともと象は食した 30％しか消化しません。体内を通るスピードが速 く、70％は植物性物質を含みバクテリアの値がとても低いですが、象 の糞ということから抵抗を感じる方のために、衛生機関に検査を依頼 し（VinLab 社）、バクテリア、ウィルスなど有害細菌数が０であるこ とが証明されています。
							</p>
							<div className='text-center'>
								<Image filename='test-report.jpg' className='img-fluid' alt='Analysis report from Vinlabs'/>
							</div>
						</div>
						<div className={`col-12 col-md-6 mb3 ${japanStyles.mb3}`}>
							<h4 className={`subheading ${japanStyles.subheading} text-center d-block pb-2`}>
								受　　賞
							</h4>
							<div className="row mt-4">
												<div className={`col-12 col-md-4 text-center smlogo ${japanStyles.smlogo}`}>
													<Image filename='proudlysa-logo.jpg' className='img-fluid' alt='Proudly South African logo'/>
								</div>
								<div className='col-12 col-md-8'>
											<h5 className={`sub-sub-heading ${japanStyles.subSubHeading} text-center text-md-left py-2`}>Proudly South African 2018 受賞</h5>
													<p className={`normal-p ${japanStyles.normalP} text-center text-md-left py-2`}>
										南アフリカ公的機関が、製品やサービスの品 質・安全性、自然環境への配慮・校正な労働 環境の整備、かつ南アフリカ国内で生産され ているなど、様々な条件を満たしたものだけ に送られる称号。
									</p>
								</div>
							</div>
							<div className='row mt-4'>
												<div className={`col-12 col-md-4 text-center smlogo ${japanStyles.smlogo}`}>
												<Image filename='sacraft-2019.png' className='img-fluid' alt='South African Craft Gin Award DOuble Gold'/>
								</div>
								<div className='col-12 col-md-8'>
											<h5 className={`sub-sub-heading ${japanStyles.subSubHeading} mt-0 text-center text-md-left py-2`}>SA CRAFT GIN AWARDS 2019 <br /> ダブルゴールドメダル受賞</h5>
									<p className={`normal-p ${japanStyles.normalP} text-center text-md-left py-2`}>
										南アフリカ全土から集められるクラフトジン
										コンテスト。「インドラブ・ジン オリジナル」
										はダブルゴールドメダルを受賞しました。
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={`row ${japanStyles.row} ptb-50 ${japanStyles.ptb50}`}>
			<div className='col-12 col-md-12'>
				<div className='container'>
					<h1 className='text-center bigheading'>
						アフリカの香りと <br />
						“野生動物保護” の精神を持った <br />
						ヴィンテージ GIN
					</h1>
					<div className='row mt-4'>
						<div className='col-12 col-md-8 col-lg-9 mb3'>
							<p className={`normal-p ${japanStyles.normalP}`}>
								インドラブジンはアフリカ・サバンナに生息する象の糞から取り出したアカシアやアロエ、アガトスマなどをボタニカルとしています。
								象の好物であるこれらの植物は、香りの良さはもちろん強力な抗酸化作用（ポリフェノール）を含み、胃腸炎などの内服または下剤として利用される薬草として現地ネイティブの間で珍重されてきたものばかりです。
								さらに象はその植物の中でも良質で新鮮なものを厳選し食すので、アフリカでは古くから象からのボタニカルは薬として使用されてきました。その上質なボタニカルを抽出してできたのがインドラブジンです。
								インドラブジンの美しい透き通る“ボタニカルイエロー”は、それら植物繊維が厳選された証なのです。
							</p>
							<div className={`blueshade ${japanStyles.blueshade}`}>
								<div className={`container-fluid ${japanStyles.row}`}>
													<div className='col-12 col-md-2 left-log mb3'>
													<Image filename='donation-medal.png' className='img-fluid' alt='Donation to wildlife conservation'/>
									</div>
									<div className='col-12 col-md-8 center-log mb3'>
									<h5 className='sub-sub-heading py-2'>ジンを味わって、野生動物が救えるということ。</h5>
									<p className='mb-0'>
										南アフリカ現地のイブフ社（ I b h u(Pt y)Ltd. ）は販売利益の 15% をアフリカ
										財団に寄付しています。
										この取り組みはまた、SDGs の 15 番目「豊かな陸を守る」活動となり、絶滅危
										惧種であるアフリカゾウを守ることの一助となっています。
										私達がインドラブ・ジンの香りと味わいを楽しむことが、野生動物を救う活動
										の一助となる。それがまた、ジンを味わうひとときをさらに豊かで、素敵なも
										のにしてくれると思いませんか。
									</p>
									</div>
													<div className='col-12 col-md-2 right-log mb3'>
													<Image filename='sustainability.jpg' className='img-fluid' alt='Sustainability'/>
									</div>
								</div>
							</div>
						</div>
										<div className='col-12 col-md-4 col-lg-3 mb3'>
										<Image filename='paula-ansley-profile.jpg' className='img-fluid' alt='Paula Ansley'/>
							<h4 className='text-center pt-3'>Paula Ansley</h4>
							<h4 className='text-center'>ポーラ・アンスレイ</h4>
							<p className='p-0'>イングランドのノーサンブリア大学で免
								疫学を教え、その後野生動物の保護のた
								め家族で南アフリカへ移住。
								研究者として野生動物の保護に積極的に
								携わっている。
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={`row ${japanStyles.row} ptb-50 ${japanStyles.ptb50}`}>
			<div className='col-12 col-md-12'>
				<div className='container'>
					<h1 className='text-center bigheading'>
						密猟によりアフリカ象が激減しています
					</h1>
					<div className={`container-fluid ${japanStyles.row}`}>
						<div className='col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center'>
									<p className={`normal-p ${japanStyles.normalP} mt-4`}>
								野生のアフリカ象は１５分に１頭、１日にして９６頭が殺されていま<br />
								す。これは、地球上のアフリカ象の出生数をはるかに上回っており、 <br />
								必然的に頭数が激減するわけです。
							</p>
							<Image filename='series01.jpg' className='img-fluid mt-4' alt=''/>
							<h1 className='bigheading py-3 mt-4'>
								なぜ殺される？｢象牙｣目的の密猟です
							</h1>
							<p className={`normal-p ${japanStyles.normalP}`}>
							ワシントン条約でも、１９８９年以降、保護対象となっており、絶滅 <br />
							危惧種に指定されていますが、密猟されたゾウの牙は象牙として簡単 <br />
							に現金収入化できるので、密猟がなくなりません。	
							</p>
							<h1 className='bigheading py-3 mt-4'>
								日本が世界最大の象牙消費国です
							</h1>
							<p className={`normal-p ${japanStyles.normalP}`}>
							１９９５年以降だけでも、登録されているもので、１４，０００本、 <br />
							１８５トンもの象牙が日本に輸入されています。１本ものの象牙の輸 <br />
							入は違法ですが、象牙が分割されていると違法ではなく登録外の扱い <br />
							になっています。
							</p>
											<Image filename='series02.jpg' className='img-fluid pb-5' alt=''/>
							<p className={`normal-p ${japanStyles.normalP}`}>
							日本には、象牙を扱っている会社・お店が８，０００店もあり、輸入 <br />
							している金額では世界で一番です。　言い換えれば、アフリカ象の年<br />
							間３５，０００頭もの密猟の原因の最右翼に “日本があります。	
							</p>
							<Image filename='series03.jpg' className='img-fluid py-5' alt=''/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={`container-fluid ${japanStyles.row}`}>
		<div className='col-12 pb-5' id="sectionD">
			<div className='container'>
				<div className='text-center'>
					<h2 className={`text-center subheading ${japanStyles.subheading}`}>
					日本での購入・お問い合わせ
					</h2>
					<p className={`normal-p ${japanStyles.normalP} text-center py-4`}>
						日本での購入・お問い合わせは、下記項目を入力の上、送信してください。 <br />
						近日中に、担当者からご連絡させていただきます。 <br />
						万が一、返信が届かない場合は迷惑メールなどに分類されている可能性もございます。 <br />
						お手数ですが、下記メールアドレスまでご連絡ください。
					</p>

					<div className={`container-fluid ${japanStyles.row}`}>
						<div className={`col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center grayshade ${japanStyles.grayshade}`}>
							<h2 className={`aheria-heading ${japanStyles.aheriaHeading}`}>総代理店 アセントジャパン合同会社</h2>
							<h4>Ascent Japan LLC</h4>
							<h3 className={`emailink ${japanStyles.emailink}`}>Email:<a href="mailto:info@ascentjapan.co.jp">info@ascentjapan.co.jp</a></h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		<div className={`container-fluid ${japanStyles.row}`}>
			<div className={`col-12 col-md-12 footer ${japanStyles.footer} py-4 text-center`}>
				<p>アセントジャパン合同会社</p>
				<p>〒569-1042 大阪府高槻市南平台 5-9-31</p>
				<p>&copy ASCENT JAPAN LLC 2021 all rights reserved.</p>
			</div>
		</div>
	</div>
	<script type="text/javascript"></script>
	</div>


	)
}

export default Japan
