/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: lap.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export declare namespace racemate {
    class Lap extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            sm_version?: string;
            ac_version?: string;
            number_of_sessions?: number;
            car_model?: string;
            track?: string;
            player_name?: string;
            player_nick?: string;
            player_surname?: string;
            air_temp?: number;
            road_temp?: number;
            session_type?: number;
            rain_tyres?: number;
            is_valid_lap?: number;
            track_grip_status?: number;
            rain_intensity?: number;
            session_index?: number;
            lap_time_ms?: number;
            frames?: Frame[];
            timestamp?: number;
            lap_number?: number;
            penalty_type?: number;
        });
        get sm_version(): string;
        set sm_version(value: string);
        get ac_version(): string;
        set ac_version(value: string);
        get number_of_sessions(): number;
        set number_of_sessions(value: number);
        get car_model(): string;
        set car_model(value: string);
        get track(): string;
        set track(value: string);
        get player_name(): string;
        set player_name(value: string);
        get player_nick(): string;
        set player_nick(value: string);
        get player_surname(): string;
        set player_surname(value: string);
        get air_temp(): number;
        set air_temp(value: number);
        get road_temp(): number;
        set road_temp(value: number);
        get session_type(): number;
        set session_type(value: number);
        get rain_tyres(): number;
        set rain_tyres(value: number);
        get is_valid_lap(): number;
        set is_valid_lap(value: number);
        get track_grip_status(): number;
        set track_grip_status(value: number);
        get rain_intensity(): number;
        set rain_intensity(value: number);
        get session_index(): number;
        set session_index(value: number);
        get lap_time_ms(): number;
        set lap_time_ms(value: number);
        get frames(): Frame[];
        set frames(value: Frame[]);
        get timestamp(): number;
        set timestamp(value: number);
        get lap_number(): number;
        set lap_number(value: number);
        get penalty_type(): number;
        set penalty_type(value: number);
        static fromObject(data: {
            sm_version?: string;
            ac_version?: string;
            number_of_sessions?: number;
            car_model?: string;
            track?: string;
            player_name?: string;
            player_nick?: string;
            player_surname?: string;
            air_temp?: number;
            road_temp?: number;
            session_type?: number;
            rain_tyres?: number;
            is_valid_lap?: number;
            track_grip_status?: number;
            rain_intensity?: number;
            session_index?: number;
            lap_time_ms?: number;
            frames?: ReturnType<typeof Frame.prototype.toObject>[];
            timestamp?: number;
            lap_number?: number;
            penalty_type?: number;
        }): Lap;
        toObject(): {
            sm_version?: string;
            ac_version?: string;
            number_of_sessions?: number;
            car_model?: string;
            track?: string;
            player_name?: string;
            player_nick?: string;
            player_surname?: string;
            air_temp?: number;
            road_temp?: number;
            session_type?: number;
            rain_tyres?: number;
            is_valid_lap?: number;
            track_grip_status?: number;
            rain_intensity?: number;
            session_index?: number;
            lap_time_ms?: number;
            frames?: ReturnType<typeof Frame.prototype.toObject>[];
            timestamp?: number;
            lap_number?: number;
            penalty_type?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Lap;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Lap;
    }
    class Frame extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            graphic_packet?: number;
            physics_packet?: number;
            gas?: number;
            brake?: number;
            gear?: number;
            rpm?: number;
            steer_angle?: number;
            speed_kmh?: number;
            current_time?: number;
            normalized_car_position?: number;
            car_coordinate_x?: number;
            car_coordinate_y?: number;
            car_coordinate_z?: number;
            is_valid_lap?: number;
            penalty_type?: number;
        });
        get graphic_packet(): number;
        set graphic_packet(value: number);
        get physics_packet(): number;
        set physics_packet(value: number);
        get gas(): number;
        set gas(value: number);
        get brake(): number;
        set brake(value: number);
        get gear(): number;
        set gear(value: number);
        get rpm(): number;
        set rpm(value: number);
        get steer_angle(): number;
        set steer_angle(value: number);
        get speed_kmh(): number;
        set speed_kmh(value: number);
        get current_time(): number;
        set current_time(value: number);
        get normalized_car_position(): number;
        set normalized_car_position(value: number);
        get car_coordinate_x(): number;
        set car_coordinate_x(value: number);
        get car_coordinate_y(): number;
        set car_coordinate_y(value: number);
        get car_coordinate_z(): number;
        set car_coordinate_z(value: number);
        get is_valid_lap(): number;
        set is_valid_lap(value: number);
        get penalty_type(): number;
        set penalty_type(value: number);
        static fromObject(data: {
            graphic_packet?: number;
            physics_packet?: number;
            gas?: number;
            brake?: number;
            gear?: number;
            rpm?: number;
            steer_angle?: number;
            speed_kmh?: number;
            current_time?: number;
            normalized_car_position?: number;
            car_coordinate_x?: number;
            car_coordinate_y?: number;
            car_coordinate_z?: number;
            is_valid_lap?: number;
            penalty_type?: number;
        }): Frame;
        toObject(): {
            graphic_packet?: number;
            physics_packet?: number;
            gas?: number;
            brake?: number;
            gear?: number;
            rpm?: number;
            steer_angle?: number;
            speed_kmh?: number;
            current_time?: number;
            normalized_car_position?: number;
            car_coordinate_x?: number;
            car_coordinate_y?: number;
            car_coordinate_z?: number;
            is_valid_lap?: number;
            penalty_type?: number;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Frame;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Frame;
    }
}
