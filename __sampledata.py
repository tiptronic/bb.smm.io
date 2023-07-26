
# https://developers.google.com/transit/gtfs-realtime/examples/trip-updates-full

# header information
header {
  # version of speed specification. Currently "2.0"
  gtfs_realtime_version: "2.0"

  # DIFFERENTIAL is unsupported. use FULL_DATASET only
  incrementality: FULL_DATASET

  # The moment where this dataset was generated on the server.
  timestamp: 1656230726
}
# A definition (or update) of an entity in the transit feed.
# Multiple entities can be included in the feed.
# be sure to provide information about EVERY active trip on every feed update
entity {
  # unique identifier for the entity within the feed update message
  id: "simple-trip"

  # "type" of the entity
  trip_update {
    # a descriptor that identifies an instance of a GTFS trip
    # defines the identifier of a trip in reference to the trips.txt file
    # it is recommended to provide trip_id, which should be one of the following
    # (1) a trip defined in the static feed
    # (2) a duplicate trip with schedule_relationship ADDED and new start time
    # (3) a frequency based trip with a clearly defined start time
    trip {
      # the trip_id from the GTFS feed that this trip refers to
      trip_id: "trip1"
      # the start time of this trip instance as specified from the GTFS feed
      start_time: "14:05:00"
      # the start date of this trip instance
      start_date: "20220628"
      # The relation between this trip and the static schedule
      schedule_relationship: SCHEDULED
      # the route id from the GTFS feed that this trip belongs to
      route_id: "ROUTE1"
      # the direction_id from the GTFS feed that this trip refers to
      direction_id: 0
    }

    # schedule information update
    stop_time_update {
      # this must be the same as in stop_times.txt in the GTFS feed 
      # if stop_id is unique within the trip, use either stop_sequence or stop_id
      # if a stop_id appears more than once within the trip, use stop_sequence and optionally stop_id
      stop_sequence: 3
      # vehicle's arrival time
      arrival {
        # delayed by 5 seconds
        # with respect to the arrival time defined in static feed
        delay: 5
      }
      departure {
        # delayed by 5 seconds
        # with respect to the departure time defined in static feed
        delay: 5
      }
    }

    # this stop’s delay is propagated to subsequent stops
    # until the upcoming stop with realtime schedule defined
    # i.e. stop 4 - 9 will have 5 seconds delay

    # update on the vehicle's schedule for stop sequence 10
    stop_time_update {
      stop_sequence: 10
      # dynamically assign a new platform by providing its stop_id
      # together with the stop_sequence
      # the new platform assigned must be part of the same station 
      # as the original stop/platform
      stop_id: platform_id_123
      arrival {
        # with the default delay of 0 (on time)
        delay: 0
      }
    }
    stop_time_update {
      stop_sequence: 11
      arrival {
        # the time of arrival in seconds after epoch
        time: 1656230830
      }
      departure {
        # the time of departure in seconds after epoch
        time: 1656230890
      }
    }
    stop_time_update {
      stop_sequence: 11
      # the stop is skipped, i.e. the vehicle will not stop at this stop
      schedule_relationship: SKIPPED
    }
    stop_time_update {
      stop_sequence: 12
      arrival {
        # negative delay means vehicle is 2 seconds ahead of schedule
        delay: -2
      }
    }
  }
}

# second entity containing update information for another trip
entity {
  id: "2"
  trip_update {
    trip {
      # the trip_id from the GTFS feed that this added trip is duplicated after
      trip_id: "trip2"
      # the start time of the new added trip instance
      start_time: "14:05:00"
      start_date: "20220628"
      # use “ADDED” to specify an extra trip that was added in addition to 
      # a running schedule
      schedule_relationship: ADDED

    }
    stop_time_update {
      stop_sequence: 1
      arrival {
        # It's recommended to provide an absolute timestamp
        # for easy calculation of relative time
        time: 1656239890
      }
    }
  }
}

# third entity containing update information for a canceled trip
entity {
  id: "3"
  trip_update {
    trip {
      trip_id: "trip2"
      start_time: "14:05:00"
      start_date: "20220628"
      # use “CANCELED” to specify a trip that existed in static GTFS but was canceled 
      schedule_relationship: CANCELED

    }
  }
}
