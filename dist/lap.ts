/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: lap.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace racemate {
    export class Lap extends pb_1.Message {
        #one_of_decls: number[][] = [];
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
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [18], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sm_version" in data && data.sm_version != undefined) {
                    this.sm_version = data.sm_version;
                }
                if ("ac_version" in data && data.ac_version != undefined) {
                    this.ac_version = data.ac_version;
                }
                if ("number_of_sessions" in data && data.number_of_sessions != undefined) {
                    this.number_of_sessions = data.number_of_sessions;
                }
                if ("car_model" in data && data.car_model != undefined) {
                    this.car_model = data.car_model;
                }
                if ("track" in data && data.track != undefined) {
                    this.track = data.track;
                }
                if ("player_name" in data && data.player_name != undefined) {
                    this.player_name = data.player_name;
                }
                if ("player_nick" in data && data.player_nick != undefined) {
                    this.player_nick = data.player_nick;
                }
                if ("player_surname" in data && data.player_surname != undefined) {
                    this.player_surname = data.player_surname;
                }
                if ("air_temp" in data && data.air_temp != undefined) {
                    this.air_temp = data.air_temp;
                }
                if ("road_temp" in data && data.road_temp != undefined) {
                    this.road_temp = data.road_temp;
                }
                if ("session_type" in data && data.session_type != undefined) {
                    this.session_type = data.session_type;
                }
                if ("rain_tyres" in data && data.rain_tyres != undefined) {
                    this.rain_tyres = data.rain_tyres;
                }
                if ("is_valid_lap" in data && data.is_valid_lap != undefined) {
                    this.is_valid_lap = data.is_valid_lap;
                }
                if ("track_grip_status" in data && data.track_grip_status != undefined) {
                    this.track_grip_status = data.track_grip_status;
                }
                if ("rain_intensity" in data && data.rain_intensity != undefined) {
                    this.rain_intensity = data.rain_intensity;
                }
                if ("session_index" in data && data.session_index != undefined) {
                    this.session_index = data.session_index;
                }
                if ("lap_time_ms" in data && data.lap_time_ms != undefined) {
                    this.lap_time_ms = data.lap_time_ms;
                }
                if ("frames" in data && data.frames != undefined) {
                    this.frames = data.frames;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
                if ("lap_number" in data && data.lap_number != undefined) {
                    this.lap_number = data.lap_number;
                }
            }
        }
        get sm_version() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set sm_version(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get ac_version() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set ac_version(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get number_of_sessions() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set number_of_sessions(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get car_model() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set car_model(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get track() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set track(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get player_name() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set player_name(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get player_nick() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set player_nick(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        get player_surname() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set player_surname(value: string) {
            pb_1.Message.setField(this, 8, value);
        }
        get air_temp() {
            return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
        }
        set air_temp(value: number) {
            pb_1.Message.setField(this, 9, value);
        }
        get road_temp() {
            return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
        }
        set road_temp(value: number) {
            pb_1.Message.setField(this, 10, value);
        }
        get session_type() {
            return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
        }
        set session_type(value: number) {
            pb_1.Message.setField(this, 11, value);
        }
        get rain_tyres() {
            return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
        }
        set rain_tyres(value: number) {
            pb_1.Message.setField(this, 12, value);
        }
        get is_valid_lap() {
            return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
        }
        set is_valid_lap(value: number) {
            pb_1.Message.setField(this, 13, value);
        }
        get track_grip_status() {
            return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
        }
        set track_grip_status(value: number) {
            pb_1.Message.setField(this, 14, value);
        }
        get rain_intensity() {
            return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
        }
        set rain_intensity(value: number) {
            pb_1.Message.setField(this, 15, value);
        }
        get session_index() {
            return pb_1.Message.getFieldWithDefault(this, 16, 0) as number;
        }
        set session_index(value: number) {
            pb_1.Message.setField(this, 16, value);
        }
        get lap_time_ms() {
            return pb_1.Message.getFieldWithDefault(this, 17, 0) as number;
        }
        set lap_time_ms(value: number) {
            pb_1.Message.setField(this, 17, value);
        }
        get frames() {
            return pb_1.Message.getRepeatedWrapperField(this, Frame, 18) as Frame[];
        }
        set frames(value: Frame[]) {
            pb_1.Message.setRepeatedWrapperField(this, 18, value);
        }
        get timestamp() {
            return pb_1.Message.getFieldWithDefault(this, 19, 0) as number;
        }
        set timestamp(value: number) {
            pb_1.Message.setField(this, 19, value);
        }
        get lap_number() {
            return pb_1.Message.getFieldWithDefault(this, 20, 0) as number;
        }
        set lap_number(value: number) {
            pb_1.Message.setField(this, 20, value);
        }
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
        }): Lap {
            const message = new Lap({});
            if (data.sm_version != null) {
                message.sm_version = data.sm_version;
            }
            if (data.ac_version != null) {
                message.ac_version = data.ac_version;
            }
            if (data.number_of_sessions != null) {
                message.number_of_sessions = data.number_of_sessions;
            }
            if (data.car_model != null) {
                message.car_model = data.car_model;
            }
            if (data.track != null) {
                message.track = data.track;
            }
            if (data.player_name != null) {
                message.player_name = data.player_name;
            }
            if (data.player_nick != null) {
                message.player_nick = data.player_nick;
            }
            if (data.player_surname != null) {
                message.player_surname = data.player_surname;
            }
            if (data.air_temp != null) {
                message.air_temp = data.air_temp;
            }
            if (data.road_temp != null) {
                message.road_temp = data.road_temp;
            }
            if (data.session_type != null) {
                message.session_type = data.session_type;
            }
            if (data.rain_tyres != null) {
                message.rain_tyres = data.rain_tyres;
            }
            if (data.is_valid_lap != null) {
                message.is_valid_lap = data.is_valid_lap;
            }
            if (data.track_grip_status != null) {
                message.track_grip_status = data.track_grip_status;
            }
            if (data.rain_intensity != null) {
                message.rain_intensity = data.rain_intensity;
            }
            if (data.session_index != null) {
                message.session_index = data.session_index;
            }
            if (data.lap_time_ms != null) {
                message.lap_time_ms = data.lap_time_ms;
            }
            if (data.frames != null) {
                message.frames = data.frames.map(item => Frame.fromObject(item));
            }
            if (data.timestamp != null) {
                message.timestamp = data.timestamp;
            }
            if (data.lap_number != null) {
                message.lap_number = data.lap_number;
            }
            return message;
        }
        toObject() {
            const data: {
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
            } = {};
            if (this.sm_version != null) {
                data.sm_version = this.sm_version;
            }
            if (this.ac_version != null) {
                data.ac_version = this.ac_version;
            }
            if (this.number_of_sessions != null) {
                data.number_of_sessions = this.number_of_sessions;
            }
            if (this.car_model != null) {
                data.car_model = this.car_model;
            }
            if (this.track != null) {
                data.track = this.track;
            }
            if (this.player_name != null) {
                data.player_name = this.player_name;
            }
            if (this.player_nick != null) {
                data.player_nick = this.player_nick;
            }
            if (this.player_surname != null) {
                data.player_surname = this.player_surname;
            }
            if (this.air_temp != null) {
                data.air_temp = this.air_temp;
            }
            if (this.road_temp != null) {
                data.road_temp = this.road_temp;
            }
            if (this.session_type != null) {
                data.session_type = this.session_type;
            }
            if (this.rain_tyres != null) {
                data.rain_tyres = this.rain_tyres;
            }
            if (this.is_valid_lap != null) {
                data.is_valid_lap = this.is_valid_lap;
            }
            if (this.track_grip_status != null) {
                data.track_grip_status = this.track_grip_status;
            }
            if (this.rain_intensity != null) {
                data.rain_intensity = this.rain_intensity;
            }
            if (this.session_index != null) {
                data.session_index = this.session_index;
            }
            if (this.lap_time_ms != null) {
                data.lap_time_ms = this.lap_time_ms;
            }
            if (this.frames != null) {
                data.frames = this.frames.map((item: Frame) => item.toObject());
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp;
            }
            if (this.lap_number != null) {
                data.lap_number = this.lap_number;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sm_version.length)
                writer.writeString(1, this.sm_version);
            if (this.ac_version.length)
                writer.writeString(2, this.ac_version);
            if (this.number_of_sessions != 0)
                writer.writeInt32(3, this.number_of_sessions);
            if (this.car_model.length)
                writer.writeString(4, this.car_model);
            if (this.track.length)
                writer.writeString(5, this.track);
            if (this.player_name.length)
                writer.writeString(6, this.player_name);
            if (this.player_nick.length)
                writer.writeString(7, this.player_nick);
            if (this.player_surname.length)
                writer.writeString(8, this.player_surname);
            if (this.air_temp != 0)
                writer.writeFloat(9, this.air_temp);
            if (this.road_temp != 0)
                writer.writeFloat(10, this.road_temp);
            if (this.session_type != 0)
                writer.writeInt32(11, this.session_type);
            if (this.rain_tyres != 0)
                writer.writeInt32(12, this.rain_tyres);
            if (this.is_valid_lap != 0)
                writer.writeInt32(13, this.is_valid_lap);
            if (this.track_grip_status != 0)
                writer.writeInt32(14, this.track_grip_status);
            if (this.rain_intensity != 0)
                writer.writeInt32(15, this.rain_intensity);
            if (this.session_index != 0)
                writer.writeInt32(16, this.session_index);
            if (this.lap_time_ms != 0)
                writer.writeInt32(17, this.lap_time_ms);
            if (this.frames.length)
                writer.writeRepeatedMessage(18, this.frames, (item: Frame) => item.serialize(writer));
            if (this.timestamp != 0)
                writer.writeUint64(19, this.timestamp);
            if (this.lap_number != 0)
                writer.writeInt32(20, this.lap_number);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Lap {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Lap();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sm_version = reader.readString();
                        break;
                    case 2:
                        message.ac_version = reader.readString();
                        break;
                    case 3:
                        message.number_of_sessions = reader.readInt32();
                        break;
                    case 4:
                        message.car_model = reader.readString();
                        break;
                    case 5:
                        message.track = reader.readString();
                        break;
                    case 6:
                        message.player_name = reader.readString();
                        break;
                    case 7:
                        message.player_nick = reader.readString();
                        break;
                    case 8:
                        message.player_surname = reader.readString();
                        break;
                    case 9:
                        message.air_temp = reader.readFloat();
                        break;
                    case 10:
                        message.road_temp = reader.readFloat();
                        break;
                    case 11:
                        message.session_type = reader.readInt32();
                        break;
                    case 12:
                        message.rain_tyres = reader.readInt32();
                        break;
                    case 13:
                        message.is_valid_lap = reader.readInt32();
                        break;
                    case 14:
                        message.track_grip_status = reader.readInt32();
                        break;
                    case 15:
                        message.rain_intensity = reader.readInt32();
                        break;
                    case 16:
                        message.session_index = reader.readInt32();
                        break;
                    case 17:
                        message.lap_time_ms = reader.readInt32();
                        break;
                    case 18:
                        reader.readMessage(message.frames, () => pb_1.Message.addToRepeatedWrapperField(message, 18, Frame.deserialize(reader), Frame));
                        break;
                    case 19:
                        message.timestamp = reader.readUint64();
                        break;
                    case 20:
                        message.lap_number = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Lap {
            return Lap.deserialize(bytes);
        }
    }
    export class Frame extends pb_1.Message {
        #one_of_decls: number[][] = [];
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
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("graphic_packet" in data && data.graphic_packet != undefined) {
                    this.graphic_packet = data.graphic_packet;
                }
                if ("physics_packet" in data && data.physics_packet != undefined) {
                    this.physics_packet = data.physics_packet;
                }
                if ("gas" in data && data.gas != undefined) {
                    this.gas = data.gas;
                }
                if ("brake" in data && data.brake != undefined) {
                    this.brake = data.brake;
                }
                if ("gear" in data && data.gear != undefined) {
                    this.gear = data.gear;
                }
                if ("rpm" in data && data.rpm != undefined) {
                    this.rpm = data.rpm;
                }
                if ("steer_angle" in data && data.steer_angle != undefined) {
                    this.steer_angle = data.steer_angle;
                }
                if ("speed_kmh" in data && data.speed_kmh != undefined) {
                    this.speed_kmh = data.speed_kmh;
                }
                if ("current_time" in data && data.current_time != undefined) {
                    this.current_time = data.current_time;
                }
                if ("normalized_car_position" in data && data.normalized_car_position != undefined) {
                    this.normalized_car_position = data.normalized_car_position;
                }
                if ("car_coordinate_x" in data && data.car_coordinate_x != undefined) {
                    this.car_coordinate_x = data.car_coordinate_x;
                }
                if ("car_coordinate_y" in data && data.car_coordinate_y != undefined) {
                    this.car_coordinate_y = data.car_coordinate_y;
                }
                if ("car_coordinate_z" in data && data.car_coordinate_z != undefined) {
                    this.car_coordinate_z = data.car_coordinate_z;
                }
                if ("is_valid_lap" in data && data.is_valid_lap != undefined) {
                    this.is_valid_lap = data.is_valid_lap;
                }
            }
        }
        get graphic_packet() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set graphic_packet(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get physics_packet() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set physics_packet(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get gas() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set gas(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get brake() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set brake(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get gear() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set gear(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get rpm() {
            return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
        }
        set rpm(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        get steer_angle() {
            return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
        }
        set steer_angle(value: number) {
            pb_1.Message.setField(this, 7, value);
        }
        get speed_kmh() {
            return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
        }
        set speed_kmh(value: number) {
            pb_1.Message.setField(this, 8, value);
        }
        get current_time() {
            return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
        }
        set current_time(value: number) {
            pb_1.Message.setField(this, 9, value);
        }
        get normalized_car_position() {
            return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
        }
        set normalized_car_position(value: number) {
            pb_1.Message.setField(this, 10, value);
        }
        get car_coordinate_x() {
            return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
        }
        set car_coordinate_x(value: number) {
            pb_1.Message.setField(this, 11, value);
        }
        get car_coordinate_y() {
            return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
        }
        set car_coordinate_y(value: number) {
            pb_1.Message.setField(this, 12, value);
        }
        get car_coordinate_z() {
            return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
        }
        set car_coordinate_z(value: number) {
            pb_1.Message.setField(this, 13, value);
        }
        get is_valid_lap() {
            return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
        }
        set is_valid_lap(value: number) {
            pb_1.Message.setField(this, 14, value);
        }
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
        }): Frame {
            const message = new Frame({});
            if (data.graphic_packet != null) {
                message.graphic_packet = data.graphic_packet;
            }
            if (data.physics_packet != null) {
                message.physics_packet = data.physics_packet;
            }
            if (data.gas != null) {
                message.gas = data.gas;
            }
            if (data.brake != null) {
                message.brake = data.brake;
            }
            if (data.gear != null) {
                message.gear = data.gear;
            }
            if (data.rpm != null) {
                message.rpm = data.rpm;
            }
            if (data.steer_angle != null) {
                message.steer_angle = data.steer_angle;
            }
            if (data.speed_kmh != null) {
                message.speed_kmh = data.speed_kmh;
            }
            if (data.current_time != null) {
                message.current_time = data.current_time;
            }
            if (data.normalized_car_position != null) {
                message.normalized_car_position = data.normalized_car_position;
            }
            if (data.car_coordinate_x != null) {
                message.car_coordinate_x = data.car_coordinate_x;
            }
            if (data.car_coordinate_y != null) {
                message.car_coordinate_y = data.car_coordinate_y;
            }
            if (data.car_coordinate_z != null) {
                message.car_coordinate_z = data.car_coordinate_z;
            }
            if (data.is_valid_lap != null) {
                message.is_valid_lap = data.is_valid_lap;
            }
            return message;
        }
        toObject() {
            const data: {
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
            } = {};
            if (this.graphic_packet != null) {
                data.graphic_packet = this.graphic_packet;
            }
            if (this.physics_packet != null) {
                data.physics_packet = this.physics_packet;
            }
            if (this.gas != null) {
                data.gas = this.gas;
            }
            if (this.brake != null) {
                data.brake = this.brake;
            }
            if (this.gear != null) {
                data.gear = this.gear;
            }
            if (this.rpm != null) {
                data.rpm = this.rpm;
            }
            if (this.steer_angle != null) {
                data.steer_angle = this.steer_angle;
            }
            if (this.speed_kmh != null) {
                data.speed_kmh = this.speed_kmh;
            }
            if (this.current_time != null) {
                data.current_time = this.current_time;
            }
            if (this.normalized_car_position != null) {
                data.normalized_car_position = this.normalized_car_position;
            }
            if (this.car_coordinate_x != null) {
                data.car_coordinate_x = this.car_coordinate_x;
            }
            if (this.car_coordinate_y != null) {
                data.car_coordinate_y = this.car_coordinate_y;
            }
            if (this.car_coordinate_z != null) {
                data.car_coordinate_z = this.car_coordinate_z;
            }
            if (this.is_valid_lap != null) {
                data.is_valid_lap = this.is_valid_lap;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.graphic_packet != 0)
                writer.writeInt32(1, this.graphic_packet);
            if (this.physics_packet != 0)
                writer.writeInt32(2, this.physics_packet);
            if (this.gas != 0)
                writer.writeFloat(3, this.gas);
            if (this.brake != 0)
                writer.writeFloat(4, this.brake);
            if (this.gear != 0)
                writer.writeInt32(5, this.gear);
            if (this.rpm != 0)
                writer.writeInt32(6, this.rpm);
            if (this.steer_angle != 0)
                writer.writeFloat(7, this.steer_angle);
            if (this.speed_kmh != 0)
                writer.writeFloat(8, this.speed_kmh);
            if (this.current_time != 0)
                writer.writeInt32(9, this.current_time);
            if (this.normalized_car_position != 0)
                writer.writeFloat(10, this.normalized_car_position);
            if (this.car_coordinate_x != 0)
                writer.writeFloat(11, this.car_coordinate_x);
            if (this.car_coordinate_y != 0)
                writer.writeFloat(12, this.car_coordinate_y);
            if (this.car_coordinate_z != 0)
                writer.writeFloat(13, this.car_coordinate_z);
            if (this.is_valid_lap != 0)
                writer.writeInt32(14, this.is_valid_lap);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Frame {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Frame();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.graphic_packet = reader.readInt32();
                        break;
                    case 2:
                        message.physics_packet = reader.readInt32();
                        break;
                    case 3:
                        message.gas = reader.readFloat();
                        break;
                    case 4:
                        message.brake = reader.readFloat();
                        break;
                    case 5:
                        message.gear = reader.readInt32();
                        break;
                    case 6:
                        message.rpm = reader.readInt32();
                        break;
                    case 7:
                        message.steer_angle = reader.readFloat();
                        break;
                    case 8:
                        message.speed_kmh = reader.readFloat();
                        break;
                    case 9:
                        message.current_time = reader.readInt32();
                        break;
                    case 10:
                        message.normalized_car_position = reader.readFloat();
                        break;
                    case 11:
                        message.car_coordinate_x = reader.readFloat();
                        break;
                    case 12:
                        message.car_coordinate_y = reader.readFloat();
                        break;
                    case 13:
                        message.car_coordinate_z = reader.readFloat();
                        break;
                    case 14:
                        message.is_valid_lap = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Frame {
            return Frame.deserialize(bytes);
        }
    }
}
