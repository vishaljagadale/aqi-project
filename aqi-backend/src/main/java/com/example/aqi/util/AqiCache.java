package com.example.aqi.util;

import java.time.Instant;
import java.util.*;

public class AqiCache {
	private static final long EXPIRY_MS = 300000;
	private static final int MAX_ENTRIES = 50;
	private final Map<String, CacheItem> cache;

	public AqiCache() {
		cache = new LinkedHashMap<>() {
			protected boolean removeEldestEntry(Map.Entry<String, CacheItem> e) {
				return size() > MAX_ENTRIES;
			}
		};
	}

	public synchronized void put(String c, String d) {
		cache.put(c.toLowerCase(), new CacheItem(d, Instant.now().toEpochMilli()));
	}

	public synchronized String get(String c) {
		CacheItem i = cache.get(c.toLowerCase());
		if (i == null)
			return null;
		if (Instant.now().toEpochMilli() - i.ts > EXPIRY_MS) {
			cache.remove(c.toLowerCase());
			return null;
		}
		return i.data;
	}

	private static class CacheItem {
		String data;
		long ts;

		CacheItem(String d, long t) {
			data = d;
			ts = t;
		}
	}
}
