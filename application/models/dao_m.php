<?php

class Dao_M extends CI_Model {
	
	public function getAllTime() {
		$query = "SELECT title, worldwide FROM all_time ORDER BY worldwide DESC";
		$result = $this->db->query($query);
		return $result->result_array();	
	}

	public function getYearly() {
		$query = "SELECT year, title, worldwide FROM (SELECT * FROM all_time ORDER BY year, worldwide DESC, title) x GROUP BY year ORDER BY year DESC";
		$result = $this->db->query($query);
		return $result->result_array();	
	}

	public function getStudios() {
		$query = "SELECT studio, sum(worldwide) as sum FROM all_time group by studio order by sum desc";
		$result = $this->db->query($query);
		return $result->result_array();	
	}

}

?>