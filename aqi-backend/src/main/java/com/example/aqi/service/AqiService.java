package com.example.aqi.service;

import com.example.aqi.util.AqiCache;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class AqiService {
	@Value("${aqicn.token}")
	private String apiToken;
	private final AqiCache cache = new AqiCache();
	private final WebClient client = WebClient.create();

	public String getAqiByCity(String city) {
		String cached = cache.get(city);
		if (cached != null)
			return cached;
		String url = "https://api.waqi.info/feed/" + city + "/?token=" + apiToken;
		String response = client.get().uri(url).retrieve().bodyToMono(String.class).block();
		cache.put(city, response);
		return response;
	}
}
