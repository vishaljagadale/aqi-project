package com.example.aqi.controller;

import com.example.aqi.service.AqiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/aqi")
@CrossOrigin(origins = "*")
public class AqiController {
	private final AqiService service;

	public AqiController(AqiService service) {
		this.service = service;
	}

	@GetMapping("/{city}")
	public String getAqi(@PathVariable String city) {
		return service.getAqiByCity(city);
	}
}
