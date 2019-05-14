$(document).ready(function(){	

	langSelect = $(".dropdown-item.active").attr("id");
	// 警示內容 
	switch (langSelect){
		case "ch":
			nameAlert = "出現錯誤囉！請確認姓名欄位是否已填寫內容。";
			ageAlert = "出現錯誤囉！請確認年齡欄位是否已填寫內容。";
			mailAlert = "您填寫的Email格式有誤，請重新填入！";

			confirm ="感謝您的訂閱！我們將在《StoneHenge巨石陣環保機能自動傘》正式開放預購前將優惠訊息與折扣Email給您！敬請期待。";
		break;
		case "chs":
			nameAlert = "出现错误啰！请确认姓名栏位是否已填写内容。";
			ageAlert = "出现错误啰！请确认年龄栏位是否已填写内容。";
			mailAlert = "您填写的Email格式有误，请重新填入！";

			confirm ="感谢您的订阅！我们将在《StoneHenge巨石阵环保机能自动伞》正式开放预购前将优惠讯息与折扣Email给您！敬请期待。";
		break;
		case "en":
			nameAlert = "There is an error! Please confirm the Name fields have been filled in.";
			ageAlert = "There is an error! Please confirm the Age fields have been filled in.";
			mailAlert = "The e-mail format you filled in is incorrect, and please fill in again if there is any error.";

			confirm ="Thanks for your subscription! We will mail to you the preferential information and discount before《A.brolly Stonehenge umbrella》is officially open for presale ! Stay tuned !";
		break;
		case "jp":
			nameAlert = "エラーが出たよ! 名前の欄位に入力しているかをご確認お願い致します。";
			ageAlert = "エラーが出たよ! 年齢の欄位に入力しているかをご確認お願い致します。";
			mailAlert = "たはEmailの入力内容に誤りが無いかご確認の上、再度入力するようにお願い致します。";

			confirm ="定期購読頂きましてありがとうございます！《StoneHenge環境保護機能自動傘》の先行予約発表前に、優先にお得情報をEmailでご提供させて頂きます！どうぞお楽しみにしてください。";
		break;
		default:
			nameAlert = "出現錯誤囉！請確認姓名欄位是否已填寫內容。";
			ageAlert = "出現錯誤囉！請確認年齡欄位是否已填寫內容。";
			mailAlert = "您填寫的Email格式有誤，請重新填入！";

			confirm ="感謝您的訂閱！我們將在《StoneHenge巨石陣環保機能自動傘》正式開放預購前將優惠訊息與折扣Email給您！敬請期待。";
		break;
	}
   language(langSelect);

	//language 選單
	$(".dropdown-item").click(function(e){
		e.preventDefault();
		var selectName =  $(this).text().trim();
		var selectType = $(this).attr("id");
		// language(selectType);
		// $(".dropdown-item").removeClass("active");
		// $(this).addClass("active");
		// $(this).parents(".dropdown").find("button.btn").text(selectName);
		$("form#langForm").find("input[name='lang']").val(selectType);
		$("form#langForm").submit();
	});

	$(window).scroll(function(){
		var section1Top = $("section").eq(1).offset().top;
		if($(window).scrollTop() >= section1Top){
			$(".gotop").show(500);
		}else{
			$(".gotop").hide(500);
		}
	});

	function language(l){

		switch(l) {
		    case "ch": //繁體中文
		    	inputName = "姓名";
		    	inputAge = "年齡";

		    	videoSrc1 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GneZCMZnEzk" frameborder="0" allowfullscreen></iframe>';
		    	videoSrc2 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yoWv23T0LLU" frameborder="0"  allowfullscreen></iframe>'; 		    	

		        s1Title = "立即訂閱即可獲得57折早鳥優惠通知！";
		        s1btn = "立即訂閱";
		        s1describe = "業界首創多項專利技術之作，邀請您以行動支持這款貫徹環保精神的革命性商品！";
		        s2Title = "結合巨石陣堅實精神與環保理念之作";
		        s2Content = "《Stonehenge巨石陣》這是英國最著名的史前建築遺跡，科學與歷史學家皆無法解釋在公元前2800年前的時代，這鬼斧神工的景觀如何完成或其代表的意義是什麼？有學者認為巨石是一種「文化」，一種古人對巨石的敬仰和尊重。<br>對於巨石陣文化感到景仰且也貫徹環保精神的A.Brolly亞伯尼及共同創辦人——英國百年傘商Grant Barnett公司有感環境污染惡化與水資源的匱乏，因此決定結合環保專利技術融入傘款中，進而設計出《Stonehenge巨石陣環保機能自動傘》。";
		        s3Title = "超大傘面與綠色設計EcoStream";
		        s3Content = "比一般傘款多了更多綠色環保機能設計，如：無水染色、寶特瓶回收布、無氟碳紡織及超潑水加工，最重要的是展開傘面超大122cm，3至4人一起撐也沒問題！";
		        s4Title = "防潑水傘布設計";
		        s4Content = "全傘布使用福懋100%聚酯纖維布，並以獨家技術極度快乾AquaRepel超潑水加工處理。";
		        s5Title = "首創旋轉防撞設計";
		        s5Content = "旋轉防撞Vortex技術，以360度旋轉傘骨，防止雨傘糟碰撞擠壓，可從容穿梭都市叢林的人群中。";
		        s6Title = "緩衝裝置AntiBlaster";
		        s6Content = "多段式收傘設計，讓雨傘中棒隨推收合不回彈。";
		        s8Title = "環保傘面";
		        s8Content = "全世界每年製造超過2.75億噸的垃圾，其中約有800萬百萬噸是塑膠垃圾，這些垃圾最終的處理方式不外乎填埋或是丟到海岸，兩種方式都對環境造成嚴重傷害。同時也正加速耗盡地球上的水資源，如：全球的染布廠每天平均使用315萬公升的水並排放大量廢水至河川中，這消耗的水量足以供給1萬6千人使用，不僅消耗飲用水更讓河川污染影響生態完整性。<br>A.Brolly亞伯尼認為環保不該只是呼口號，應力求真正實踐，因此運用無水染色、寶特瓶回收製成傘布及無氟碳紡織技術等專利技術製造這款商品，也誠摯希望您跟A.Brolly亞伯尼一起以行動守護地球。";
		        s9Title = "產品展示";
		        s9Content = "重量：540g±5g<br>顏色：仕紳藍/優雅棕/典雅黑<br>傘骨材質：黑電鑄鐵槽/黑色玻璃纖維骨(FRP)/黑色玻璃纖維骨(FRP)珠尾骨<br>傘面與骨架：長68.5cm x 寬122cm，8支傘骨、三折自動開收傘<br>傘款收合：長34cm<br>傘布材質：福懋100%聚脂纖維布(Polyester)<br>";
		        s10Title = "品牌故事";
		        s10ContentStory1 = "英國知名百年老字號雨傘品牌公司Grant Barnett創立於1900年1月12日，是英國雨具製品的領導品牌、供應商及製造商，以提供各式高品質之晴雨傘、雨靴和雨衣等配件用品聞名。";
		        s10ContentStory2 = "他們多年來一直在幫別人做傘，留意到因為價錢的因素，品質差劣的傘不斷地進入市場並且被大眾使用。也因為這些傘的品質不佳，使用不久就會損壞。";
		        s10ContentStory3 = "這些廢棄傘為這個地球製造了大量的垃圾，也對環境造成汙染。尤其目前全世界處理廢棄傘只有掩埋與填海兩種方法，而兩者都會造成嚴重的水資源汙染，只是沒有人去真正的了解。";
		        s10ContentStory4 = "因此，Grant Barnett在2016年推出自有品牌A.Brolly亞伯尼，由英國時尚設計師負責各系列的設計，配以獨特的材質和機能，要打造環保且兼具高規格的洋傘。";
		        s10ContentStory5 = "A.Brolly的理念是製造出品質好的傘給大眾使用，讓大家都能擁有一支可以持續使用多年的傘，讓它不輕易變成垃圾。與此同時，我們也不斷對材質作出研究，務求要製造出減少環境汙染，但也同時兼具功能性與流行元素的產品。<br>這就是亞伯尼。";
		        
		        wechatTitle = "立即關注A.Brolly亞伯尼微信公眾號";
		        wechatID = "ID搜尋：gh_2c76d979bffb";

		        FB = "https://www.facebook.com/ABrolly.asia";

		        break;
		    case "chs": //簡體中文
		    	inputName = "姓名";
		    	inputAge = "年龄";

		    	videoSrc1 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GneZCMZnEzk" frameborder="0" allowfullscreen></iframe>';
		    	videoSrc2 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yoWv23T0LLU" frameborder="0"  allowfullscreen></iframe>'; 
		    	
		        s1Title = "立即订阅即可获得57折早鸟优惠通知！";
		        s1btn = "立即订阅";
		        s1describe = "业界首创多项专利技术之作，邀请您以行动支持这款贯彻环保精神的革命性商品！";
		        s2Title = "结合巨石阵坚实精神与环保理念之作";
		        s2Content = "《Stonehenge巨石阵》这是英国最著名的史前建筑遗迹，科学与历史学家皆无法解释在公元前2800年前的时代，这鬼斧神工的景观如何完成或其代表的意义是什么？有学者认为巨石是一种「文化」，一种古人对巨石的敬仰和尊重。<br>对于巨石阵文化感到景仰且也贯彻环保精神的A.Brolly亚伯尼及共同创办人——英国百年伞商Grant Barnett公司有感环境污染恶化与水资源的匮乏，因此决定结合环保专利技术融入伞款中，进而设计出《Stonehenge巨石阵环保机能自动伞》。";
		        s3Title = "超大伞面与绿色设计EcoStream";
		        s3Content = "比一般伞款多了更多绿色环保机能设计，如：无水染色、宝特瓶回收布、无氟碳纺织及超泼水加工，最重要的是展开伞面超大122cm，3至4人一起撑也没问题！";
		        s4Title = "防泼水伞布设计";
		        s4Content = "全伞布使用福懋100%聚酯纤维布，并以独家技术极度快干AquaRepel超泼水加工处理。";
		        s5Title = "首创旋转防撞设计";
		        s5Content = "旋转防撞Vortex技术，以360度旋转伞骨，防止雨伞糟碰撞挤压，可从容穿梭都市丛林的人群中。";
		        s6Title = "缓冲装置AntiBlaster";
		        s6Content = "多段式收伞设计，让雨伞中棒随推收合不回弹。";
		        s8Title = "环保伞面";
		        s8Content = "全世界每年制造超过2.75亿吨的垃圾，其中约有800万百万吨是塑胶垃圾，这些垃圾最终的处理方式不外乎填埋或是丢到海岸，两种方式都对环境造成严重伤害。同时也正加速耗尽地球上的水资源，如：全球的染布厂每天平均使用315万公升的水并排放大量废水至河川中，这消耗的水量足以供给1万6千人使用，不仅消耗饮用水更让河川污染影响生态完整性。<br>A.Brolly亚伯尼认为环保不该只是呼口号，应力求真正实践，因此运用无水染色、宝特瓶回收制成伞布及无氟碳纺织技术等专利技术制造这款商品，也诚挚希望您跟A.Brolly亚伯尼一起以行动守护地球。";
		        s9Title = "产品展示";
		        s9Content = "重量：540g±5g<br>颜色：仕绅蓝/优雅棕/典雅黑<br>伞骨材质：黑电铸铁槽/黑色玻璃纤维骨(FRP)/黑色玻璃纤维骨(FRP)珠尾骨<br>伞面与骨架：长68.5cm x 宽122cm 8支伞骨、三折自动开收伞<br>伞款收合：长34cm<br>伞布材质：福懋100%聚脂纤维布(Polyester)<br>";
		        s10Title = "品牌故事";
		        s10ContentStory1 = "英国知名百年老字号雨伞品牌公司Grant Barnett创立于1900年1月12日，是英国雨具制品的领导品牌、供应商及制造商，以提供各式高品质之晴雨伞、雨靴和雨衣等配件用品闻名。";
		        s10ContentStory2 = "他们多年来一直在帮别人做伞，留意到因为价钱的因素，品质差劣的伞不断地进入市场并且被大众使用。也因为这些伞的品质不佳，使用不久就会损坏。";
		        s10ContentStory3 = "这些废弃伞为这个地球制造了大量的垃圾，也对环境造成污染。尤其目前全世界处理废弃伞只有掩埋与填海两种方法，而两者都会造成严重的水资源污染，只是没有人去真正的了解。";
		        s10ContentStory4 = "因此，Grant Barnett在2016年推出自有品牌A.Brolly亚伯尼，由英国时尚设计师负责各系列的设计，配以独特的材质和机能，要打造环保且兼具高规格的洋伞。";
		        s10ContentStory5 = "A.Brolly的理念是制造出品质好的伞给大众使用，让大家都能拥有一支可以持续使用多年的伞，让它不轻易变成垃圾。与此同时，我们也不断对材质作出研究，务求要制造出减少环境污染，但也同时兼具功能性与流行元素的产品。<br>这就是亚伯尼。";
		        
		        wechatTitle = "立即关注A.Brolly亚伯尼微信公众号";
		        wechatID = "ID搜寻：gh_2c76d979bffb";

		        FB = "https://www.facebook.com/ABrolly.asia";

		        break;
			case "en": //英文
				inputName = "Name";
		    	inputAge = "Age";

		    	videoSrc1 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/AIG5E6HsvY4" frameborder="0" allowfullscreen></iframe>';
		    	videoSrc2 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/j5K4SM5cfAU" frameborder="0" allowfullscreen></iframe>'; 

		        s1Title = "Subscribe NOW to get a 36% off early bird discount notice!";
		        s1btn = "Subscribe now";
		        s1describe = "A.Brolly Stonehenge is an umbrella with multiple industry-leading patented technologies. We would hereby invite you to support this revolutionary product that thoroughly implements the spirit of environmental protection!";
		        s2Title = "An Umbrella that Combines that solidity spirit of Stonehenge and the environmental protection concept";
		        s2Content = "”Stonehenge” is the most famous prehistoric monument in UK. Neither scientists nor historians could explain how this magnificent landscape could possibly be completed in around 2500 BC and what its purpose was. Some scholars believe that standing stone is a kind of “culture” that showed the respect of ancient people toward giant stones.<br>With the admiration for Stonehenge and the concept of environment protection, A.Brolly and its co-founder, the century-old UK umbrella maker Grant Barnett, recognized that the environmental pollution was deteriorating and water resources were running short, and they therefore decided to combine environmental protection and patented technologies into their new umbrella series, A.Brolly Stonehenge.";
		        s3Title = "Super large canopy size and EcoStream technology";
		        s3Content = "A.Brolly Stonehenge is equipped with our exclusive EcoStream technology, which includes waterless dyeing, canopy fabrics made of recycled PET bottles, as well as fluorocarbon-free textiles and water repellency process. More importantly, A.Brolly Stonehenge has an oversized canopy of 122cm diameter, enough to cover 3 to 4 people at one time!";
		        s4Title = "AquaRepel water repellency design";
		        s4Content = "The canopy is made of 100% polyester fabric made by Formosa treated with our exclusive AquaRepel process for superb water repellency.";
		        s5Title = "Vortex Technology";
		        s5Content = "Our patented Vortex technology allows to canopy to spin 360 degrees to counter collisions and strong wind, so the users can walk straight through a crowd of umbrellas without problem.";
		        s6Title = "AntiBlaster Technology";
		        s6Content = "Our patented AntiBlaster technology allows the shaft of umbrella to lock up section by section when the user is closing it, so it will not charge back if released midway.";
		        s8Title = "Eco Canopy";
		        s8Content = "We are producing over 600 billion pounds (275 million tonne) of garbage each year. Approximately 17 billion pounds (8 million tons) are plastic waste which is destined for landfills or ends up into the oceans of the world causing untold environmental damage. In addition, we are exhausting the world’s precious water resources. For example, dyeing mills use on average 3.15 million liters of water per day. This is enough water for 16,000 people per day. This not only will hamper economic development but will also affect human health and well-being.<br>A.Brolly wants to take part of the solution but not the problem. Therefore, we are using the most advanced technologies such as waterless dyeing, recycled PET-made fabric and fluorocarbon-free process to minimize any impact to the environment. We also sincerely hope you to act to protect our environment together with us.";
		        s9Title = "Product Specification";
		        s9Content = "Weight: 540g±5g<br>Materials: Iron, fiber-reinforced plastic<br>Size and Structure: 68.5cm L x 122cm Diameter, 8 ribs, 3 section automatic umbrella<br>Folded size: 34cm L<br>Fabric: 100% Polyester made by Formosa<br>";
		        s10Title = "Brand story";
		        s10ContentStory1 = "Grant Barnett, a well-known century-old umbrella brand company founded in January of 1900, is a leading brand, supplier and manufacturer of rain gear products in United Kingdom known for supplying all kinds of high-quality umbrellas, parasols, boots and raincoats.";
		        s10ContentStory2 = "They have been making umbrellas for others for many years, noting that due to the price factors, cheap umbrellas continue to enter the market and become wastes in a matter of months because of the low quality.";
		        s10ContentStory3 = "These waste umbrellas produce lots of garbage for the earth and cause pollution to the environment. At the moment, there are only two methods available to handle the waste umbrellas in the world – landfill and sea reclamation, both of which cause serious water pollution. The problem is very few people realize this fact.";
		        s10ContentStory4 = "As a result, Grant Barnett launched its own brand, A.Brolly, in 2016. Their umbrellas, designed by British fashion designers, adopt unique materials and technologies to offer special features while being friendly to the environment.";
		        s10ContentStory5 = "A.Brolly's philosophy is to create high-quality umbrellas that can last 10-plus years for the public, so as to help reducing the number of waste umbrella produced each year. At the same time, we also continue to research and develop new materials to help create products that are highly functional, fashionable as well as eco-friendly.<br>Grab your A.Brolly today to truly know what an excellent umbrella should be like.";
		        
		        wechatTitle = "Follow us on Wechat";
		        wechatID = "ID：gh_2c76d979bffb";	

		        $(".title").addClass("title-en");
		        $(".content").addClass("content-en");	
		        $(".btn").addClass("btn-en");
		        $(".descibe").addClass("descibe-en");

		        FB = "https://www.facebook.com/abrollyuk";
		        break; 
		    case "jp": //日文
		        inputName = "名前";
		    	inputAge = "年齢";

		        videoSrc1 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/AIG5E6HsvY4" frameborder="0" allowfullscreen></iframe>';
		    	videoSrc2 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/j5K4SM5cfAU" frameborder="0" allowfullscreen></iframe>';

		    	s1Title = "いま登録すると43%OFFで購入出来るお知らせをいち早くゲット！";
		        s1btn = "今すぐ登録する";
		        s1describe = "A.Brolly Stonehengeには、業界をリードする複数の特許取得済み技術が採用されています。 環境保護の精神をくんだ画期的な製品をお届けします。";
		        s2Title = "ストーンヘンジの強固な精神と環境保護のコンセプトを融合させた傘";
		        s2Content = "「ストーンヘンジ」は英国で最も有名な先史時代の記念碑です。 科学者も歴史家も、紀元前2500年頃にこの壮大な風景がどのように完成するのか、その目的は何かを説明できませんでした。 いくつかの学者は、立っている石は、巨大な石に向かって古代人の尊敬を示した一種の「文化」であると信じています。<br>ストーンヘンジへの称賛と環境保護のコンセプトのもと、A.ブローリーとその共同設立者であるイギリスの傘メーカーグラントバーネットは、環境汚染の悪化と水資源の不足を憂慮し、環境保護への思いと特許取得済みの技術を新しい傘シリーズ、A. Brolly Stonehengeに落とし込みました。";
		        s3Title = "超大型キャノピーサイズとEcoStreamテクノロジー";
		        s3Content = "A.Brolly Stonehengeには、無水染色、リサイクルPETボトル製の傘生地、フルオロカーボンフリーの生地や撥水性加工など、当社独自のEcoStream技術が採用されています。 さらには、A.Brolly Stonehengeのキャノピーは直径122cmの大型であり、一度に3人から4人までカバーできます！";
		        s4Title = "AquaRepelの撥水性デザイン";
		        s4Content = "キャノピーは、優れた撥水性のAquaRepelプロセスで処理されたフォルモサ製の100％ポリエステル生地で作られています。";
		        s5Title = "ボルテックス技術";
		        s5Content = "当社の特許技術であるVortex技術は、キャノピーが360度回転して衝突や強風にしなやかに対処することを可能にします。よって、ユーザーは混んだ街中でも傘をまっすぐに持ち問題なく歩くことができます。";
		        s6Title = "アンチブラスターテクノロジー";
		        s6Content = "当社の特許取得済みAntiBlasterテクノロジーにより、傘が閉じられている際、中棒がセクションごとにロックされます。";
		        s8Title = "エコキャノピー";
		        s8Content = "毎年6,000億ポンド（2億7,500万トン）以上のごみを生み出しています。 約170億ポンド（800万トン）は、埋立地に向かうか、世界の海洋にまで達します。 また、世界の貴重な水資源を枯渇させています。 例えば、染色工場では1日当たり平均315万リットルの水を使用しています。 これは1日当たり16,000人が必要とする量の水です。 これは経済発展を妨げるだけでなく、人間の健康と豊かさにも影響します。<br>また、環境への影響を最小限に抑えるために、水なし染料、リサイクルPET製生地、フルオロカーボンフリーなどの技術も採用しています。 私たちと一緒に環境を守っていくことを心より祈っています。";
		        s9Title = "製品仕様書";
		        s9Content = "重量：540g±5g<br>材料：鉄、繊維強化プラスチック<br>サイズと構造：68.5cm L x 122cm直径、8リブ、3セクション自動傘<br>折りたたみサイズ：34cm L<br>生地：フォルモサ製100％ポリエステル<br>";
		        s10Title = "ブランドストーリー";
		        s10ContentStory1 = "グラントバーネットは、1900年1月に設立された、世界に誇る有名な傘ブランドであり、また、英国の高級傘、パラソル、ブーツ、レインコートを提供することで有名なレインギア製品のメーカーです 。";
		        s10ContentStory2 = "彼らは長年にわたり傘の製造に携わってきましたが、低品質で安価な傘が市場にあふれ続け、数ヶ月で廃棄物になる様子を目にし、その状況を大変憂慮しました。";
		        s10ContentStory3 = "これらゴミとなった傘は、地球にとっての廃棄物であり、環境汚染を引き起こす原因となります。現在、廃棄物となった傘を処理する方法は海等に埋め立てることしかなく、それは深刻な水質汚染を引き起こします。多くの者がこの事実を認識していないということも大きな問題です。";
		        s10ContentStory4 = "そのような考えのもと、Grant Barnettは2016年に独自のブランド、A.Brollyを立ち上げました。英国のファッションデザイナーがデザインしたA.Brollyの傘は、独自の素材と技術を採用した環境に優しいアイテムです。";
		        s10ContentStory5 = "A.Brollyの哲学は、廃棄物として、毎年、生み出される傘の数を削減する為に、10年以上使い続けることの出来る高品質の傘を作ることです。同時に、機能性、ファッション性に富み、また環境に優しい製品を生産するための新素材の研究開発を続けていきます。<br>A.Brollyを手にし、優れた傘のあるべき姿を、是非、知って頂けたらと思います。";

		    	wechatTitle = "Follow us on Wechat";
		        wechatID = "ID：gh_2c76d979bffb";

		        $(".title").addClass("title-jp");
		        $(".content").addClass("content-jp");	
		        $(".btn").addClass("btn-jp");
		        $(".descibe").addClass("descibe-jp");

		    	FB = "https://www.facebook.com/abrollyuk";

		        break;
		    default: //繁體中文
		    	inputName = "姓名";
		    	inputAge = "年齡";

		    	videoSrc1 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GneZCMZnEzk" frameborder="0" allowfullscreen></iframe>';
		    	videoSrc2 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yoWv23T0LLU" frameborder="0"  allowfullscreen></iframe>'; 

		    	s1Title = "立即訂閱即可獲得57折早鳥優惠通知！";
		    	s1btn = "立即訂閱";
		    	s1describe = "業界首創多項專利技術之作，邀請您以行動支持這款貫徹環保精神的革命性商品！";
		    	s2Title = "結合巨石陣堅實精神與環保理念之作";
		    	s2Content = "《Stonehenge巨石陣》這是英國最著名的史前建築遺跡，科學與歷史學家皆無法解釋在公元前2800年前的時代，這鬼斧神工的景觀如何完成或其代表的意義是什麼？有學者認為巨石是一種「文化」，一種古人對巨石的敬仰和尊重。<br>對於巨石陣文化感到景仰且也貫徹環保精神的A.Brolly亞伯尼及共同創辦人——英國百年傘商Grant Barnett公司有感環境污染惡化與水資源的匱乏，因此決定結合環保專利技術融入傘款中，進而設計出《Stonehenge巨石陣環保機能自動傘》。";
		    	s3Title = "超大傘面與綠色設計EcoStream";
		        s3Content = "比一般傘款多了更多綠色環保機能設計，如：無水染色、寶特瓶回收布、無氟碳紡織及超潑水加工，最重要的是展開傘面超大122cm，3至4人一起撐也沒問題！";	
		    	s4Title = "防潑水傘布設計";
		        s4Content = "全傘布使用福懋100%聚酯纖維布，並以獨家技術極度快乾AquaRepel超潑水加工處理。";
		    	s5Title = "首創旋轉防撞設計";
		        s5Content = "旋轉防撞Vortex技術，以360度旋轉傘骨，防止雨傘糟碰撞擠壓，可從容穿梭都市叢林的人群中。";
		    	s6Title = "緩衝裝置AntiBlaster";
		        s6Content = "多段式收傘設計，讓雨傘中棒隨推收合不回彈。";
		    	s8Title = "環保傘面";
		        s8Content = "全世界每年製造超過2.75億噸的垃圾，其中約有800萬百萬噸是塑膠垃圾，這些垃圾最終的處理方式不外乎填埋或是丟到海岸，兩種方式都對環境造成嚴重傷害。同時也正加速耗盡地球上的水資源，如：全球的染布廠每天平均使用315萬公升的水並排放大量廢水至河川中，這消耗的水量足以供給1萬6千人使用，不僅消耗飲用水更讓河川污染影響生態完整性。<br>A.Brolly亞伯尼認為環保不該只是呼口號，應力求真正實踐，因此運用無水染色、寶特瓶回收製成傘布及無氟碳紡織技術等專利技術製造這款商品，也誠摯希望您跟A.Brolly亞伯尼一起以行動守護地球。";
		    	s9Title = "產品展示";
		        s9Content = "重量：540g±5g<br>顏色：仕紳藍/優雅棕/典雅黑<br>傘骨材質：黑電鑄鐵槽/黑色玻璃纖維骨(FRP)/黑色玻璃纖維骨(FRP)珠尾骨<br>傘面與骨架：長68.5cm x 寬122cm，8支傘骨、三折自動開收傘<br>傘款收合：長34cm<br>傘布材質：福懋100%聚脂纖維布(Polyester)<br>";
		    	s10Title = "品牌故事";
		        s10ContentStory1 = "英國知名百年老字號雨傘品牌公司Grant Barnett創立於1900年1月12日，是英國雨具製品的領導品牌、供應商及製造商，以提供各式高品質之晴雨傘、雨靴和雨衣等配件用品聞名。";
		        s10ContentStory2 = "他們多年來一直在幫別人做傘，留意到因為價錢的因素，品質差劣的傘不斷地進入市場並且被大眾使用。也因為這些傘的品質不佳，使用不久就會損壞。";
		        s10ContentStory3 = "這些廢棄傘為這個地球製造了大量的垃圾，也對環境造成汙染。尤其目前全世界處理廢棄傘只有掩埋與填海兩種方法，而兩者都會造成嚴重的水資源汙染，只是沒有人去真正的了解。";
		        s10ContentStory4 = "因此，Grant Barnett在2016年推出自有品牌A.Brolly亞伯尼，由英國時尚設計師負責各系列的設計，配以獨特的材質和機能，要打造環保且兼具高規格的洋傘。";
		        s10ContentStory5 = "A.Brolly的理念是製造出品質好的傘給大眾使用，讓大家都能擁有一支可以持續使用多年的傘，讓它不輕易變成垃圾。與此同時，我們也不斷對材質作出研究，務求要製造出減少環境汙染，但也同時兼具功能性與流行元素的產品。<br>這就是亞伯尼。";

		        wechatTitle = "立即關注A.Brolly亞伯尼微信公眾號";
		        wechatID = "ID搜尋：gh_2c76d979bffb";

		        FB = "https://www.facebook.com/ABrolly.asia";
		    	break;            
		}	
		$(".s1Box .title").html(s1Title);
		$(".s11Box .title").html(s1Title);
		$(".s1btn button").html(s1btn);
		$(".s1Box .descibe").html(s1describe);
		$(".s2Box .title").html(s2Title);
		$(".s2Box .content").html(s2Content);
		$(".s3Box .title").html(s3Title);
		$(".s3Box .content").html(s3Content);
		$(".s4Box .title").html(s4Title);
		$(".s4Box .content").html(s4Content);
		$(".s5Box .title").html(s5Title);
		$(".s5Box .content").html(s5Content);
		$(".s6Box .title").html(s6Title);
		$(".s6Box .content").html(s6Content);
		$(".s8Box .title").html(s8Title);
		$(".s8Box .content").html(s8Content);
		$(".s9Box .title").html(s9Title);
		$(".s9Box .content").html(s9Content);
		$(".s10Box .title").html(s10Title);
		$(".s10Box .story-1").html(s10ContentStory1);
		$(".s10Box .story-2").html(s10ContentStory2);
		$(".s10Box .story-3").html(s10ContentStory3);
		$(".s10Box .story-4").html(s10ContentStory4);
		$(".s10Box .story-5").html(s10ContentStory5);

		//input
		$("input.name").attr("placeholder",inputName);
		$("input.age").attr("placeholder",inputAge);

		//微信內容
		$("p.qrcodeTitle").text(wechatTitle);
		$("p.qrcodeID").text(wechatID);

		//youtube 
		$(".s7Box .videoBox").append(videoSrc1);
		$(".s8Box .videoBox").append(videoSrc2);

		// fb連結
		$(".facebook > a").attr("href",FB);
		
	}

	//訂閱表格
	$(".sub-btn").unbind("click").click(function(){
		var emailReg = /^\w+((-\w+)|(\.\w+))*\@[\w]+((\.|-)[\w]+)*\.[A-Za-z]+$/;
		var name = $(this).parent().siblings(".formGroup").find("input.name");
		var age = $(this).parent().siblings(".formGroup").find("input.age");
		var mail = $(this).parent().siblings(".formGroup").find("input.mail");
		if( name.val().trim() == null || name.val().trim() == "" ){
			// swal({
			// 	title: nameAlert,
			// 	icon: "error"
			// }).then((confirm) => {name.focus();});
			swal({
				title: nameAlert,
				icon: "error"
			}).then( function(value) {
				name.focus();
			});
		}else if( age.val().trim() == null || age.val().trim() == "" ){
			// swal({
			// 	title: ageAlert,
			// 	icon: "error"
			// }).then((confirm) => {age.focus();});
			swal({
				title: ageAlert,
				icon: "error"
			}).then( function(value) {
				age.focus();
			});
		}else if( emailReg.test(mail.val().trim()) === false  ){
			// swal({
			// 	title: mailAlert,
			// 	icon: "error"
			// }).then((confirm) => {mail.select();});
			swal({
				title: mailAlert,
				icon: "error"
			}).then( function(value) {
				mail.select();
			});
		}else{
			var lang = $(".dropdown-item.active").attr("id");
			$.ajax({
	 			url:"../DB/DB.php",
	 			data : {guest_name :name.val().trim(),guest_age : age.val().trim(),guest_mail : mail.val().trim(),lang_use : lang},
	 			type : "POST",
			    cache : false,
			    success : function(result){
			    	if(result){ 
						//form 清除
				    	$(".formArea").each(function(){
							$(this)[0].reset();
						});
						swal({
							title: confirm,
							icon: "success",
						});
			    	}else{

			    	}
			  //   
			    },
			    error : function(error){
			    	alert("傳送失敗");
			    } 
	 		});
		}	
	});

	//微信rwd
	$(".werxin a").click(function(e){
		e.preventDefault();
	});

	// -----gotop----
	 $(".gotop").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });

	// slide
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  nextArrow: '<button type="button" class="slick-next" id="test">Next<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" class="style-scope yt-icon"></path></g></svg></button>',
	  prevArrow: '<button type="button" class="slick-prev">Previous<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" class="style-scope yt-icon"></path></g></svg></button>'
	});

	$('.slider-for').hover(function(){
		$('.slider-nav').slick('slickPause');
	},function(){
		$('.slider-nav').slick('slickPlay');
	});
});

$(window).on('load', function () {
	$("html, body").animate({"scrollTop": 0},100,function(){
		$("#loadingPage").animate({opacity:"0"},500,function(){
	     	$("#loadingPage").hide();
	     });
	});
     
     
 });