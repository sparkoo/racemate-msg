/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: google/protobuf/timestamp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export var google;
(function (google) {
    var protobuf;
    (function (protobuf) {
        class Timestamp extends pb_1.Message {
            #one_of_decls = [];
            constructor(data) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("seconds" in data && data.seconds != undefined) {
                        this.seconds = data.seconds;
                    }
                    if ("nanos" in data && data.nanos != undefined) {
                        this.nanos = data.nanos;
                    }
                }
            }
            get seconds() {
                return pb_1.Message.getFieldWithDefault(this, 1, 0);
            }
            set seconds(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get nanos() {
                return pb_1.Message.getFieldWithDefault(this, 2, 0);
            }
            set nanos(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new Timestamp({});
                if (data.seconds != null) {
                    message.seconds = data.seconds;
                }
                if (data.nanos != null) {
                    message.nanos = data.nanos;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.seconds != null) {
                    data.seconds = this.seconds;
                }
                if (this.nanos != null) {
                    data.nanos = this.nanos;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.seconds != 0)
                    writer.writeInt64(1, this.seconds);
                if (this.nanos != 0)
                    writer.writeInt32(2, this.nanos);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Timestamp();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.seconds = reader.readInt64();
                            break;
                        case 2:
                            message.nanos = reader.readInt32();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Timestamp.deserialize(bytes);
            }
        }
        protobuf.Timestamp = Timestamp;
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google || (google = {}));
