<?php

class Dao_M extends CI_Model {
	
	public function getAllTime() {
		$query = "SELECT title, worldwide FROM all_time ORDER BY worldwide DESC";
		$result = $this->db->query($query);
		return $result->result_array();	
	}

}

?>