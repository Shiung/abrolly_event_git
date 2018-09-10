<?php  
define('DB_HOSTNAME', 'lin-mysql05.hostmanagement.net'); //lin-mysql05.hostmanagement.net//localhost
define('DB_USERNAME', 'u1104360_admin');//u1104360_admin//tgilive //root
define('DB_PASSWORD', 'u1104360_admin_acopy');//u1104360_admin_acopy//tgilive52415016 //root
define('DB_DATABASE', 'db1104360_abrolly');//db1104360_abrolly//tgilive_lab //abrollyEvent

date_default_timezone_set("Asia/Taipei");

try {
	$dsn = "mysql:host=".DB_HOSTNAME.";port=3306;dbname=".DB_DATABASE.";charset=utf8";
	$options = array(
				PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION
			);
	$pdo = new PDO($dsn,DB_USERNAME,DB_PASSWORD);
	
	// //webgolds 提供 PHP 陣列輸出 JSON格式參考範例
	$draw = isset ( $_REQUEST['draw'] ) ? intval( $_REQUEST['draw'] ) : 0;
	$start = isset($_REQUEST['start'] ) ? $_REQUEST['start']  : 0;
	$length = isset($_REQUEST['length'] ) ?  $_REQUEST['length'] : 10;
	$search = isset($_REQUEST['search']['value'] ) ?  $_REQUEST['search']['value'] : null;
	$searchCount = 0; //seach 計時器

	// ====語系收尋=====
	$columns4Search = isset($_REQUEST['columns']['3']['search']['value'] ) ?  $_REQUEST['columns']['3']['search']['value'] : null;		
			
	if( $length == -1 ){//filter 全部
		$length = null;
	}
	
	// ===搜尋升降冪====
	$dir = isset($_REQUEST['order'][0]["dir"]) ? $_REQUEST['order'][0]["dir"] : "desc";


	$sql = "SELECT * from event_page ";
	$data = $pdo->query($sql);
	$result = $data->fetchALL(PDO::FETCH_ASSOC);
	$dataForm = [];
	$searchCheck = []; //for search 使用
	if($result){

		foreach ($result as $key => $value) {
			$dataForm[$key]["guest_no"] = $value["guest_no"];
			$dataForm[$key]["guest_name"] = $value["guest_name"];
			$dataForm[$key]["guest_age"] = $value["guest_age"];
			$dataForm[$key]["guest_mail"] = $value["guest_mail"];
			$dataForm[$key]["lang"] = $value["lang"];
			
			// // ========商品狀態搜尋 =======
			if(trim($columns4Search) != null ){	
				if(array_key_exists($key,$dataForm)){ //判斷是否存在product 陣列
					if(strpos(strtolower($dataForm[$key]["lang"]),strtolower(trim($columns4Search))) === false ){ //配對不上相同字串
						unset($dataForm[$key]);
						// echo "沒配上";
					}else{  //配對上相同字串
						$searchCount++;
					}
				}
				
			}

		}
		
		if($searchCount == 0){
			$recordsFiltered = count($result);
		}else{
			$recordsFiltered = $searchCount ;
		}

		$array = array("draw"=>$draw,"recordsTotal"=>count($result),"recordsFiltered"=>$recordsFiltered,"search"=>$search);
		$array["data"]=array_slice($dataForm,$start,$length);
		
		$jsonStr = json_encode($array);
		echo $jsonStr;

		// // echo count($result);
		// echo $searchCount;
		// echo "<pre>";
		// print_r($array);

		// echo "</pre>";
		
	}else{
		$array = array("draw"=>$draw,"recordsTotal"=>count($result),"recordsFiltered"=>count($result),"search"=>$search);
		$array["data"]=array_slice($dataForm,$start,$length);
		
		$jsonStr = json_encode($array);
		echo $jsonStr;
	}

} catch (PDOException $e) {
	echo "錯誤行號 :",  $ex->getLine(), "<br>";
	echo "錯誤訊息 :", $ex->getMessage(), "<br>";
}





?>	