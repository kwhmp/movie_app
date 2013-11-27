<?php

class Ajax_C extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->model('dao_m');
	}

	public function index() {

	}

	public function getAllTime() {
		echo json_encode($this->dao_m->getAllTime());
	}

	public function getYearly() {
		echo json_encode($this->dao_m->getYearly());
	}	

	public function getStudios() {
		echo json_encode($this->dao_m->getStudios());
	}
	
    public function getStudiosLineChart() {
        echo json_encode($this->dao_m->getLineChartStudios());
    }
}

?>