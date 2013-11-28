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

	public function getGenres() {
		$query = "SELECT worldwide_gross, genre FROM movie_hmp.movies GROUP BY genre, worldwide_gross ORDER BY genre DESC LIMIT 60";
		$result = $this->db->query($query);
		return $result->result_array();
	}

	public function getPeople() {
		$query = "SELECT person, total_gross, number_movies FROM people ORDER BY total_gross DESC";
		$result = $this->db->query($query);
		return $result->result_array();
	}

	public function getLineChartStudios(){
        $query = "SELECT `studio`,`total_gross`,`year` FROM `studios` GROUP BY studio,year";
        $result = $this->db->query($query);
        return $result->result_array();
    }

    public function getActionGenre() {
    	$query = "SELECT * FROM movie_hmp.movies WHERE genre = 'Action'";
    	$result = $this->db->query($query);
        return $result->result_array();
    }

    public function getCompare() {
    	$first = "'" . $this->input->get("first") . "'";
    	$second = "'" . $this->input->get("second") . "'";
    	$query = "SELECT `studio`,`total_gross`,`year` FROM movie_hmp.studios WHERE studio = " . $first . " OR studio = " . $second . " ORDER BY studio";
    	$result = $this->db->query($query);
        return $result->result_array();
    }

	/* */
	public function getTopPeopleForDropdown() {
		$query = "SELECT person FROM people ORDER BY total_gross DESC LIMIT 10";
		$result = $this->db->query($query);
		return $result->result_array();
	}

	public function getGenresForDropdown() {
		$query = "SELECT * FROM movie_hmp.genres ORDER BY genre";
		$result = $this->db->query($query);
		return $result->result_array();
	}

	public function getStudiosForDropdown() {
		$query = "SELECT DISTINCT `studio` FROM `studios` GROUP BY studio,year";
		$result = $this->db->query($query);
		return $result->result_array();
	}

}

?>