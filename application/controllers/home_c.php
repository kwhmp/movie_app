<?php

class Home_C extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->model('dao_m');
	}

	public function index() {
		$data = array(
			'people' => $this->dao_m->getTopPeopleForDropdown(),
			'genres' => $this->dao_m->getGenresForDropdown(),
			'studios' => $this->dao_m->getStudiosForDropdown()
		);

		$this->load->view('templates/header', $data);
		$this->load->view('home_v', $data);
		$this->load->view('templates/footer');
	}

}

?>
