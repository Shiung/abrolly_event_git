<?php  
// 語系判斷
$langWeb = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 4);//只取前4位，這樣只判斷最優先的語言。如果取前5位，可能出現en,zh的情況，影響判斷。


$language = isset($_REQUEST["lang"]) ? $_REQUEST["lang"] : "other"; //1: ch繁體中文 2:chs簡體中文 3:en 英文 4:jp 日文

switch ($language){
	case "ch":
		$langPage = "繁體中文";
	break;
	// case "chs":
	// 	$langPage = "简体中文";
	// break;
	case "en":
		$langPage = "English";
	break;
	// case "jp":
	// 	$langPage = "日本語";
	// break;
	default: //如果沒有選擇語系 會以server 語系來執行
		$langPage = "English";
		$language = "en";
		 // if (preg_match("/zh-c/i", $langWeb)) {
			// $langPage = "简体中文";
			// $language = "chs";
	  //   } else if (preg_match("/zh/i", $langWeb)) {
	  //   	$langPage = "繁體中文";
			// $language = "ch";
	  //   } else if (preg_match("/en/i", $langWeb)) {
	  //   	$langPage = "English";
			// $language = "en";
	  //   } else if (preg_match("/jp/i", $langWeb)) {
	  //   	$langPage = "日本語";
			// $language = "jp";
	  //   } else {
	  //   	$langPage = "English";
			// $language = "en";
	  //   }
	break;
}

?>
<!doctype html>
<html lang="en">
  <head>
    <title>A.Brolly</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- jquery -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
	
	<!-- sweetalert.js -->
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

	<!-- user -->
	<link rel="stylesheet" type="text/css" href="css/index.css?v1.2">
	<script src="js/index.js?v1.2"></script>

	<!-- slick -->
	<link rel="stylesheet" type="text/css" href="plugIn/slick/css/slick.css">
  	<link rel="stylesheet" type="text/css" href="plugIn/slick/css/slick-theme.css">
	<script src="plugIn/slick/js/slick.js"></script>


	<!-- fontawesome	 -->
	<link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/fa-svg-with-js.css">
	<script defer src="js/fontawesome/fontawesome-all.js"></script>	
	
	<!-- short-icon -->
	<!-- <link rel="Shortcut Icon" type="image/x-icon" href=""> -->

  </head>
<body>
<header>
	<div class="nav-logo"><img src="img/logo.png" class="img-fluid"></div>
	<div class="container-fluid">
		<div class="row">
			<div class="nav col-12 d-flex flex-wrap align-content-center justify-content-center">
				<ul class="d-flex justify-content-center my-1">
					<li><a href="">系列簡介</a></li>
					<li><a href="">特色專欄</a></li>
					<li><a href="">設計理念</a></li>
					<li><a href="">環保傘面</a></li>
					<li><a href="">產品展示</a></li>
					<li><a href="">品牌故事</a></li>
				</ul>
			</div>
		</div>
	</div>  
</header>
<div id="loadingPage">
	<div class="fa-5x" id="loadBox">
		<div class="loadBoxLogo"><img src="img/logo-white.png" class="img-fluid"></div>
  		<i class="fas fa-circle-notch fa-spin"></i>
  		<div class="loadBoxTitle">Loading</div>
	</div>
</div>
<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s1Box d-flex flex-column justify-content-end align-items-center">
				<div class="logo"><img src="img/logo-white.png" class="img-fluid"></div>
				<!-- 募資 -->
				<div class="title font-size-22 font-color-w text-shadow-b1">立即訂閱即可獲得57折早鳥優惠通知！</div>
				<div>	
					<a href="" class="btn btn-customer">獲得1+1優惠</a>
					<div class="ahref text-center">網址</div>
				</div>
				<div class="sale-logo">
					<img src="img/uk.png" class="img-fluid" alt="">
				</div>
				<!-- scrollDown -->
				<div class="scroll font-color-w">Scroll Down<div class="text-center"><i class="fas fa-angle-down"></i></div></div>
				<!-- drowpdown -->
				<div class="dropdown open">
				  <button class="btn btn-secondary dropdown-toggle"
				          type="button" id="dropdownMenu3" data-toggle="dropdown"
				          aria-haspopup="true" aria-expanded="false">
				    <?php echo $langPage; ?>
				  </button>
				  <div class="dropdown-menu">
				    <a id="ch" class="dropdown-item <?php if($language == "ch"){echo "active";} ?>" href="#!">繁體中文</a>
				    <!-- <a id="chs" class="dropdown-item <?php //if($language == "chs"){echo "active";} ?>" href="#!">简体中文</a> -->
				    <a id="en" class="dropdown-item <?php if($language == "en"){echo "active";} ?>" href="#!">English</a>
				    <!-- <a id="jp" class="dropdown-item <?php //if($language == "jp"){echo "active";} ?>" href="#!">日本語</a> -->
				  </div>
				  <form id="langForm" action="index.php" method="GET">
				  	 <input type="hidden" name="lang" value="ch">
				  </form>
				</div>
			</div>
			
		</div>
	</div>
</section>
<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s2Box">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<div class="img"></div>
					</div>
					<div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
						<div class="title font-size-22">結合巨石陣堅實精神與環保理念之作</div>
						<div class="content font-size-16">
							《Stonehenge巨石陣》這是英國最著名的史前建築遺跡，科學與歷史學家皆無法解釋在公元前2800年前的時代，這鬼斧神工的景觀如何完成或其代表的意義是什麼？有學者認為巨石是一種「文化」，一種古人對巨石的敬仰和尊重。<br>
							對於巨石陣文化感到景仰且也貫徹環保精神的A.Brolly亞伯尼及共同創辦人——英國百年傘商Grant Barnett公司有感環境污染惡化與水資源的匱乏，因此決定結合環保專利技術融入傘款中，進而設計出《Stonehenge巨石陣環保機能自動傘》。
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	</div>
</section>

<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s3Box">
				<div class="row">
					<div class="col-md-6 md-right d-flex align-items-center">
						<img class="d-block w-100 img-fluid" src="img/abrolly_event_01.jpg">
					</div>
					<div class="col-md-6 md-left d-flex flex-column justify-content-center align-items-center">
						<div class="title font-size-22">超大傘面與綠色設計EcoStream</div>
						<div class="content font-size-16">比一般傘款多了更多綠色環保機能設計，如：無水染色、寶特瓶回收布、無氟碳紡織及超潑水加工，最重要的是展開傘面超大122cm，3至4人一起撐也沒問題！</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</section>
<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s4Box">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<img class="d-block w-100 img-fluid" src="img/abrolly_event_02.jpg">
					</div>
					<div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
						<div class="title font-size-22">防潑水傘布設計</div>
						<div class="content font-size-16">全傘布使用福懋100%聚酯纖維布，並以獨家技術極度快乾AquaRepel超潑水加工處理。</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</section>
<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s5Box">
				<div class="row">
					<div class="col-md-6 md-right d-flex align-items-center">
						<img class="d-block w-100 img-fluid" src="img/abrolly_event_03.jpg">
					</div>
					<div class="col-md-6 md-left d-flex flex-column justify-content-center align-items-center">
						<div class="title font-size-22">首創旋轉防撞設計</div>
						<div class="content font-size-16">旋轉防撞Vortex技術，以360度旋轉傘骨，防止雨傘糟碰撞擠壓，可從容穿梭都市叢林的人群中。</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</section>
<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s6Box">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<img class="d-block w-100 img-fluid" src="img/abrolly_event_04.jpg">
					</div>
					<div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
						<div class="title font-size-22">緩衝裝置AntiBlaster</div>
						<div class="content font-size-16">多段式收傘設計，讓雨傘中棒隨推收合不回彈。</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</section>

<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s7Box">
				<div class="videoBoxFather">
					<div class="videoBox">
						<!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GneZCMZnEzk" frameborder="0" allowfullscreen></iframe> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s8Box">
				<div class="row">
					<div class="col-md-6 md-right d-flex align-items-center">
						<div class="videoBoxFather">
							<div class="videoBox">
								<!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yoWv23T0LLU" frameborder="0"  allowfullscreen></iframe> -->
							</div>
						</div>
					</div>
					<div class="col-md-6 md-left d-flex flex-column justify-content-center align-items-center">
						<div class="title font-size-22">環保傘面</div>
						<div class="content font-size-16">
							全世界每年製造超過2.75億噸的垃圾，其中約有800萬百萬噸是塑膠垃圾，這些垃圾最終的處理方式不外乎填埋或是丟到海岸，兩種方式都對環境造成嚴重傷害。同時也正加速耗盡地球上的水資源，如：全球的染布廠每天平均使用315萬公升的水並排放大量廢水至河川中，這消耗的水量足以供給1萬6千人使用，不僅消耗飲用水更讓河川污染影響生態完整性。
							<br>
							A.Brolly亞伯尼認為環保不該只是呼口號，應力求真正實踐，因此運用無水染色、寶特瓶回收製成傘布及無氟碳紡織技術等專利技術製造這款商品，也誠摯希望您跟A.Brolly亞伯尼一起以行動守護地球。
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s9Box">
				<div class="row">
					<div class="col-md-6 ">
						<div class="center slide slider-for">
							<div>
								<img src="img/BA71215-01.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-02.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-03.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-04.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-05.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-06.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-07.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-08.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71212-09.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71212-10.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71212-11.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71212-12.jpg" class="img-fluid">
							</div>
						</div>
						<div class="center slide slider-nav">
							<div>
								<img src="img/BA71215-01.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-02.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-03.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-04.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-05.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-06.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-07.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71215-08.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71212-09.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71212-10.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71212-11.jpg" class="img-fluid">
							</div>
							<div>
								<img src="img/BA71212-12.jpg" class="img-fluid">
							</div>
						</div>
					</div>
					<div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
						<div class="title font-size-22">產品展示</div>
						<div class="content font-size-16">
							重量：540g±5g<br>
							顏色：仕紳藍/優雅棕/典雅黑<br>
							傘骨材質：黑電鑄鐵槽/黑色玻璃纖維骨(FRP)/黑色玻璃纖維骨(FRP)珠尾骨<br>
							傘面與骨架：長68.5cm x 寬122cm 8支傘骨、三折自動開收傘<br>
							傘款收合：長34cm<br>
							傘布材質：福懋100%聚脂纖維布(Polyester)<br>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	</div>
</section>

<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s10Box">
				<div class="img d-flex flex-column justify-content-center align-items-center">
					<div class="title font-size-22 font-color-w brand-title">品牌故事</div>
					<div class="content font-size-18 font-color-w text-center">
						<div class="story-1">英國知名百年老字號雨傘品牌公司Grant Barnett創立於1900年1月12日，是英國雨具製品的領導品牌、供應商及製造商，以提供各式高品質之晴雨傘、雨靴和雨衣等配件用品聞名。</div>
						<br>
						<div class="story-2">他們多年來一直在幫別人做傘，留意到因為價錢的因素，品質差劣的傘不斷地進入市場並且被大眾使用。也因為這些傘的品質不佳，使用不久就會損壞。</div>
						<br>
						<div class="story-3">這些廢棄傘為這個地球製造了大量的垃圾，也對環境造成汙染。尤其目前全世界處理廢棄傘只有掩埋與填海兩種方法，而兩者都會造成嚴重的水資源汙染，只是沒有人去真正的了解。</div><br>
						<div class="story-4">因此，Grant Barnett在2016年推出自有品牌A.Brolly亞伯尼，由英國時尚設計師負責各系列的設計，配以獨特的材質和機能，要打造環保且兼具高規格的洋傘。</div><br>
						<div class="story-5">A.Brolly的理念是製造出品質好的傘給大眾使用，讓大家都能擁有一支可以持續使用多年的傘，讓它不輕易變成垃圾。與此同時，我們也不斷對材質作出研究，務求要製造出減少環境汙染，但也同時兼具功能性與流行元素的產品。<br>
						這就是亞伯尼。</div>
						
					</div>
				</div>
			</div>
			
		</div>
	</div>
</section>

<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 s11Box d-flex flex-column justify-content-end align-items-center">
				<div class="title font-size-22 font-color-w text-shadow-b1">立即訂閱即可獲得57折早鳥優惠通知！</div>
				<div>
					<a href="" class="btn btn-customer">獲得1+1優惠</a>
					<div class="ahref text-center">ssjijaod</div>
				</div>
			</div>
			
		</div>
	</div>
</section>

<!-- gotop -->
<div class="gotop">
  	<i class="fas fa-angle-up fa-3x"></i>
</div>

<footer>
	<div class="container-fluid">
		<div class="copyright text-center font-size-12">
			Copyright A.Brolly &copy; 2018 , All Rights Reserved.
		</div>
	</div>
	<div class="social-area d-flex flex-row">
		<div class="twitter"><a href="https://twitter.com/abrollyuk" target="_blank"><i class="fab fa-twitter-square fa-2x"></i></a></div>
		<div class="werxin">
			<a href=""><i class="fab fa-weixin fa-2x"></i>
				<span class="qrcode">
					<img src="img/abrolly_wechat.JPG" class="img-fluid">
					<p class="qrcodeTitle">立即關注A.Brolly亞伯尼微信公眾號</p>
					<p class="qrcodeID">ID搜尋：gh_2c76d979bffb</p>
				</span>
			</a>
		</div>
		<div class="instagram"><a href="https://www.instagram.com/abrollyuk/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a></div>
		<div class="facebook"><a href="https://www.facebook.com/ABrolly.asia" target="_blank"><i class="fab fa-facebook-square fa-2x"></i></a></div>
	</div>
	
</footer>

<!-- Facebook Pixel Code -->
	<script>
	  !function(f,b,e,v,n,t,s)
	  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	  n.queue=[];t=b.createElement(e);t.async=!0;
	  t.src=v;s=b.getElementsByTagName(e)[0];
	  s.parentNode.insertBefore(t,s)}(window, document,'script',
	  'https://connect.facebook.net/en_US/fbevents.js');
	  fbq('init', '1892773974325375');
	  fbq('track', 'PageView');
	</script>
	<noscript><img height="1" width="1" style="display:none"
	  src="https://www.facebook.com/tr?id=1892773974325375&ev=PageView&noscript=1"
	/></noscript>
	<!-- End Facebook Pixel Code -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-97477245-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-97477245-3');
</script>


</body>  
</html>