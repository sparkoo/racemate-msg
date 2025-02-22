// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.5
// 	protoc        v5.28.3
// source: lap.proto

package message

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Lap struct {
	state            protoimpl.MessageState `protogen:"open.v1"`
	SmVersion        string                 `protobuf:"bytes,1,opt,name=sm_version,json=smVersion,proto3" json:"sm_version,omitempty"`
	AcVersion        string                 `protobuf:"bytes,2,opt,name=ac_version,json=acVersion,proto3" json:"ac_version,omitempty"`
	NumberOfSessions int32                  `protobuf:"varint,3,opt,name=number_of_sessions,json=numberOfSessions,proto3" json:"number_of_sessions,omitempty"`
	CarModel         string                 `protobuf:"bytes,4,opt,name=car_model,json=carModel,proto3" json:"car_model,omitempty"`
	Track            string                 `protobuf:"bytes,5,opt,name=track,proto3" json:"track,omitempty"`
	PlayerName       string                 `protobuf:"bytes,6,opt,name=player_name,json=playerName,proto3" json:"player_name,omitempty"`
	PlayerNick       string                 `protobuf:"bytes,7,opt,name=player_nick,json=playerNick,proto3" json:"player_nick,omitempty"`
	PlayerSurname    string                 `protobuf:"bytes,8,opt,name=player_surname,json=playerSurname,proto3" json:"player_surname,omitempty"`
	AirTemp          float32                `protobuf:"fixed32,9,opt,name=air_temp,json=airTemp,proto3" json:"air_temp,omitempty"`
	RoadTemp         float32                `protobuf:"fixed32,10,opt,name=road_temp,json=roadTemp,proto3" json:"road_temp,omitempty"`
	SessionType      int32                  `protobuf:"varint,11,opt,name=session_type,json=sessionType,proto3" json:"session_type,omitempty"`
	RainTyres        int32                  `protobuf:"varint,12,opt,name=rain_tyres,json=rainTyres,proto3" json:"rain_tyres,omitempty"`
	IsValidLap       int32                  `protobuf:"varint,13,opt,name=is_valid_lap,json=isValidLap,proto3" json:"is_valid_lap,omitempty"`
	TrackGripStatus  int32                  `protobuf:"varint,14,opt,name=track_grip_status,json=trackGripStatus,proto3" json:"track_grip_status,omitempty"`
	RainIntensity    int32                  `protobuf:"varint,15,opt,name=rain_intensity,json=rainIntensity,proto3" json:"rain_intensity,omitempty"`
	SessionIndex     int32                  `protobuf:"varint,16,opt,name=session_index,json=sessionIndex,proto3" json:"session_index,omitempty"`
	LapTimeMs        int32                  `protobuf:"varint,17,opt,name=lap_time_ms,json=lapTimeMs,proto3" json:"lap_time_ms,omitempty"`
	Frames           []*Frame               `protobuf:"bytes,18,rep,name=frames,proto3" json:"frames,omitempty"`
	Timestamp        uint64                 `protobuf:"varint,19,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	LapNumber        int32                  `protobuf:"varint,20,opt,name=lap_number,json=lapNumber,proto3" json:"lap_number,omitempty"`
	PenaltyType      int32                  `protobuf:"varint,21,opt,name=penalty_type,json=penaltyType,proto3" json:"penalty_type,omitempty"`
	CarIndex         int32                  `protobuf:"varint,22,opt,name=car_index,json=carIndex,proto3" json:"car_index,omitempty"`
	unknownFields    protoimpl.UnknownFields
	sizeCache        protoimpl.SizeCache
}

func (x *Lap) Reset() {
	*x = Lap{}
	mi := &file_lap_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Lap) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Lap) ProtoMessage() {}

func (x *Lap) ProtoReflect() protoreflect.Message {
	mi := &file_lap_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Lap.ProtoReflect.Descriptor instead.
func (*Lap) Descriptor() ([]byte, []int) {
	return file_lap_proto_rawDescGZIP(), []int{0}
}

func (x *Lap) GetSmVersion() string {
	if x != nil {
		return x.SmVersion
	}
	return ""
}

func (x *Lap) GetAcVersion() string {
	if x != nil {
		return x.AcVersion
	}
	return ""
}

func (x *Lap) GetNumberOfSessions() int32 {
	if x != nil {
		return x.NumberOfSessions
	}
	return 0
}

func (x *Lap) GetCarModel() string {
	if x != nil {
		return x.CarModel
	}
	return ""
}

func (x *Lap) GetTrack() string {
	if x != nil {
		return x.Track
	}
	return ""
}

func (x *Lap) GetPlayerName() string {
	if x != nil {
		return x.PlayerName
	}
	return ""
}

func (x *Lap) GetPlayerNick() string {
	if x != nil {
		return x.PlayerNick
	}
	return ""
}

func (x *Lap) GetPlayerSurname() string {
	if x != nil {
		return x.PlayerSurname
	}
	return ""
}

func (x *Lap) GetAirTemp() float32 {
	if x != nil {
		return x.AirTemp
	}
	return 0
}

func (x *Lap) GetRoadTemp() float32 {
	if x != nil {
		return x.RoadTemp
	}
	return 0
}

func (x *Lap) GetSessionType() int32 {
	if x != nil {
		return x.SessionType
	}
	return 0
}

func (x *Lap) GetRainTyres() int32 {
	if x != nil {
		return x.RainTyres
	}
	return 0
}

func (x *Lap) GetIsValidLap() int32 {
	if x != nil {
		return x.IsValidLap
	}
	return 0
}

func (x *Lap) GetTrackGripStatus() int32 {
	if x != nil {
		return x.TrackGripStatus
	}
	return 0
}

func (x *Lap) GetRainIntensity() int32 {
	if x != nil {
		return x.RainIntensity
	}
	return 0
}

func (x *Lap) GetSessionIndex() int32 {
	if x != nil {
		return x.SessionIndex
	}
	return 0
}

func (x *Lap) GetLapTimeMs() int32 {
	if x != nil {
		return x.LapTimeMs
	}
	return 0
}

func (x *Lap) GetFrames() []*Frame {
	if x != nil {
		return x.Frames
	}
	return nil
}

func (x *Lap) GetTimestamp() uint64 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

func (x *Lap) GetLapNumber() int32 {
	if x != nil {
		return x.LapNumber
	}
	return 0
}

func (x *Lap) GetPenaltyType() int32 {
	if x != nil {
		return x.PenaltyType
	}
	return 0
}

func (x *Lap) GetCarIndex() int32 {
	if x != nil {
		return x.CarIndex
	}
	return 0
}

type Frame struct {
	state                 protoimpl.MessageState `protogen:"open.v1"`
	GraphicPacket         int32                  `protobuf:"varint,1,opt,name=graphic_packet,json=graphicPacket,proto3" json:"graphic_packet,omitempty"`
	PhysicsPacket         int32                  `protobuf:"varint,2,opt,name=physics_packet,json=physicsPacket,proto3" json:"physics_packet,omitempty"`
	Gas                   float32                `protobuf:"fixed32,3,opt,name=gas,proto3" json:"gas,omitempty"`
	Brake                 float32                `protobuf:"fixed32,4,opt,name=brake,proto3" json:"brake,omitempty"`
	Gear                  int32                  `protobuf:"varint,5,opt,name=gear,proto3" json:"gear,omitempty"`
	Rpm                   int32                  `protobuf:"varint,6,opt,name=rpm,proto3" json:"rpm,omitempty"`
	SteerAngle            float32                `protobuf:"fixed32,7,opt,name=steer_angle,json=steerAngle,proto3" json:"steer_angle,omitempty"`
	SpeedKmh              float32                `protobuf:"fixed32,8,opt,name=speed_kmh,json=speedKmh,proto3" json:"speed_kmh,omitempty"`
	CurrentTime           int32                  `protobuf:"varint,9,opt,name=current_time,json=currentTime,proto3" json:"current_time,omitempty"`
	NormalizedCarPosition float32                `protobuf:"fixed32,10,opt,name=normalized_car_position,json=normalizedCarPosition,proto3" json:"normalized_car_position,omitempty"`
	CarCoordinateX        float32                `protobuf:"fixed32,11,opt,name=car_coordinate_x,json=carCoordinateX,proto3" json:"car_coordinate_x,omitempty"`
	CarCoordinateY        float32                `protobuf:"fixed32,12,opt,name=car_coordinate_y,json=carCoordinateY,proto3" json:"car_coordinate_y,omitempty"`
	CarCoordinateZ        float32                `protobuf:"fixed32,13,opt,name=car_coordinate_z,json=carCoordinateZ,proto3" json:"car_coordinate_z,omitempty"`
	IsValidLap            int32                  `protobuf:"varint,14,opt,name=is_valid_lap,json=isValidLap,proto3" json:"is_valid_lap,omitempty"`
	PenaltyType           int32                  `protobuf:"varint,15,opt,name=penalty_type,json=penaltyType,proto3" json:"penalty_type,omitempty"`
	unknownFields         protoimpl.UnknownFields
	sizeCache             protoimpl.SizeCache
}

func (x *Frame) Reset() {
	*x = Frame{}
	mi := &file_lap_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Frame) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Frame) ProtoMessage() {}

func (x *Frame) ProtoReflect() protoreflect.Message {
	mi := &file_lap_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Frame.ProtoReflect.Descriptor instead.
func (*Frame) Descriptor() ([]byte, []int) {
	return file_lap_proto_rawDescGZIP(), []int{1}
}

func (x *Frame) GetGraphicPacket() int32 {
	if x != nil {
		return x.GraphicPacket
	}
	return 0
}

func (x *Frame) GetPhysicsPacket() int32 {
	if x != nil {
		return x.PhysicsPacket
	}
	return 0
}

func (x *Frame) GetGas() float32 {
	if x != nil {
		return x.Gas
	}
	return 0
}

func (x *Frame) GetBrake() float32 {
	if x != nil {
		return x.Brake
	}
	return 0
}

func (x *Frame) GetGear() int32 {
	if x != nil {
		return x.Gear
	}
	return 0
}

func (x *Frame) GetRpm() int32 {
	if x != nil {
		return x.Rpm
	}
	return 0
}

func (x *Frame) GetSteerAngle() float32 {
	if x != nil {
		return x.SteerAngle
	}
	return 0
}

func (x *Frame) GetSpeedKmh() float32 {
	if x != nil {
		return x.SpeedKmh
	}
	return 0
}

func (x *Frame) GetCurrentTime() int32 {
	if x != nil {
		return x.CurrentTime
	}
	return 0
}

func (x *Frame) GetNormalizedCarPosition() float32 {
	if x != nil {
		return x.NormalizedCarPosition
	}
	return 0
}

func (x *Frame) GetCarCoordinateX() float32 {
	if x != nil {
		return x.CarCoordinateX
	}
	return 0
}

func (x *Frame) GetCarCoordinateY() float32 {
	if x != nil {
		return x.CarCoordinateY
	}
	return 0
}

func (x *Frame) GetCarCoordinateZ() float32 {
	if x != nil {
		return x.CarCoordinateZ
	}
	return 0
}

func (x *Frame) GetIsValidLap() int32 {
	if x != nil {
		return x.IsValidLap
	}
	return 0
}

func (x *Frame) GetPenaltyType() int32 {
	if x != nil {
		return x.PenaltyType
	}
	return 0
}

var File_lap_proto protoreflect.FileDescriptor

var file_lap_proto_rawDesc = string([]byte{
	0x0a, 0x09, 0x6c, 0x61, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x72, 0x61, 0x63,
	0x65, 0x6d, 0x61, 0x74, 0x65, 0x22, 0xe7, 0x05, 0x0a, 0x03, 0x4c, 0x61, 0x70, 0x12, 0x1d, 0x0a,
	0x0a, 0x73, 0x6d, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x73, 0x6d, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x1d, 0x0a, 0x0a,
	0x61, 0x63, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x61, 0x63, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x2c, 0x0a, 0x12, 0x6e,
	0x75, 0x6d, 0x62, 0x65, 0x72, 0x5f, 0x6f, 0x66, 0x5f, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x10, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x4f,
	0x66, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x1b, 0x0a, 0x09, 0x63, 0x61, 0x72,
	0x5f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x61,
	0x72, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x1f, 0x0a, 0x0b,
	0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1f, 0x0a,
	0x0b, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x6e, 0x69, 0x63, 0x6b, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0a, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x4e, 0x69, 0x63, 0x6b, 0x12, 0x25,
	0x0a, 0x0e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x73, 0x75, 0x72, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x75,
	0x72, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x19, 0x0a, 0x08, 0x61, 0x69, 0x72, 0x5f, 0x74, 0x65, 0x6d,
	0x70, 0x18, 0x09, 0x20, 0x01, 0x28, 0x02, 0x52, 0x07, 0x61, 0x69, 0x72, 0x54, 0x65, 0x6d, 0x70,
	0x12, 0x1b, 0x0a, 0x09, 0x72, 0x6f, 0x61, 0x64, 0x5f, 0x74, 0x65, 0x6d, 0x70, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x02, 0x52, 0x08, 0x72, 0x6f, 0x61, 0x64, 0x54, 0x65, 0x6d, 0x70, 0x12, 0x21, 0x0a,
	0x0c, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x0b, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x0b, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x1d, 0x0a, 0x0a, 0x72, 0x61, 0x69, 0x6e, 0x5f, 0x74, 0x79, 0x72, 0x65, 0x73, 0x18, 0x0c,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x72, 0x61, 0x69, 0x6e, 0x54, 0x79, 0x72, 0x65, 0x73, 0x12,
	0x20, 0x0a, 0x0c, 0x69, 0x73, 0x5f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x5f, 0x6c, 0x61, 0x70, 0x18,
	0x0d, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x69, 0x73, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x4c, 0x61,
	0x70, 0x12, 0x2a, 0x0a, 0x11, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x5f, 0x67, 0x72, 0x69, 0x70, 0x5f,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0f, 0x74, 0x72,
	0x61, 0x63, 0x6b, 0x47, 0x72, 0x69, 0x70, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x25, 0x0a,
	0x0e, 0x72, 0x61, 0x69, 0x6e, 0x5f, 0x69, 0x6e, 0x74, 0x65, 0x6e, 0x73, 0x69, 0x74, 0x79, 0x18,
	0x0f, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0d, 0x72, 0x61, 0x69, 0x6e, 0x49, 0x6e, 0x74, 0x65, 0x6e,
	0x73, 0x69, 0x74, 0x79, 0x12, 0x23, 0x0a, 0x0d, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f,
	0x69, 0x6e, 0x64, 0x65, 0x78, 0x18, 0x10, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c, 0x73, 0x65, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x12, 0x1e, 0x0a, 0x0b, 0x6c, 0x61, 0x70,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x6d, 0x73, 0x18, 0x11, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09,
	0x6c, 0x61, 0x70, 0x54, 0x69, 0x6d, 0x65, 0x4d, 0x73, 0x12, 0x27, 0x0a, 0x06, 0x66, 0x72, 0x61,
	0x6d, 0x65, 0x73, 0x18, 0x12, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x72, 0x61, 0x63, 0x65,
	0x6d, 0x61, 0x74, 0x65, 0x2e, 0x46, 0x72, 0x61, 0x6d, 0x65, 0x52, 0x06, 0x66, 0x72, 0x61, 0x6d,
	0x65, 0x73, 0x12, 0x1c, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18,
	0x13, 0x20, 0x01, 0x28, 0x04, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x12, 0x1d, 0x0a, 0x0a, 0x6c, 0x61, 0x70, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x14,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x6c, 0x61, 0x70, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12,
	0x21, 0x0a, 0x0c, 0x70, 0x65, 0x6e, 0x61, 0x6c, 0x74, 0x79, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x15, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x70, 0x65, 0x6e, 0x61, 0x6c, 0x74, 0x79, 0x54, 0x79,
	0x70, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x63, 0x61, 0x72, 0x5f, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x18,
	0x16, 0x20, 0x01, 0x28, 0x05, 0x52, 0x08, 0x63, 0x61, 0x72, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x22,
	0xff, 0x03, 0x0a, 0x05, 0x46, 0x72, 0x61, 0x6d, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x67, 0x72, 0x61,
	0x70, 0x68, 0x69, 0x63, 0x5f, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x0d, 0x67, 0x72, 0x61, 0x70, 0x68, 0x69, 0x63, 0x50, 0x61, 0x63, 0x6b, 0x65, 0x74,
	0x12, 0x25, 0x0a, 0x0e, 0x70, 0x68, 0x79, 0x73, 0x69, 0x63, 0x73, 0x5f, 0x70, 0x61, 0x63, 0x6b,
	0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0d, 0x70, 0x68, 0x79, 0x73, 0x69, 0x63,
	0x73, 0x50, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x67, 0x61, 0x73, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x02, 0x52, 0x03, 0x67, 0x61, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x62, 0x72, 0x61,
	0x6b, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x02, 0x52, 0x05, 0x62, 0x72, 0x61, 0x6b, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x67, 0x65, 0x61, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x67,
	0x65, 0x61, 0x72, 0x12, 0x10, 0x0a, 0x03, 0x72, 0x70, 0x6d, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x03, 0x72, 0x70, 0x6d, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x74, 0x65, 0x65, 0x72, 0x5f, 0x61,
	0x6e, 0x67, 0x6c, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0a, 0x73, 0x74, 0x65, 0x65,
	0x72, 0x41, 0x6e, 0x67, 0x6c, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x73, 0x70, 0x65, 0x65, 0x64, 0x5f,
	0x6b, 0x6d, 0x68, 0x18, 0x08, 0x20, 0x01, 0x28, 0x02, 0x52, 0x08, 0x73, 0x70, 0x65, 0x65, 0x64,
	0x4b, 0x6d, 0x68, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x5f, 0x74,
	0x69, 0x6d, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x63, 0x75, 0x72, 0x72, 0x65,
	0x6e, 0x74, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x36, 0x0a, 0x17, 0x6e, 0x6f, 0x72, 0x6d, 0x61, 0x6c,
	0x69, 0x7a, 0x65, 0x64, 0x5f, 0x63, 0x61, 0x72, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x02, 0x52, 0x15, 0x6e, 0x6f, 0x72, 0x6d, 0x61, 0x6c, 0x69,
	0x7a, 0x65, 0x64, 0x43, 0x61, 0x72, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x28,
	0x0a, 0x10, 0x63, 0x61, 0x72, 0x5f, 0x63, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65,
	0x5f, 0x78, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0e, 0x63, 0x61, 0x72, 0x43, 0x6f, 0x6f,
	0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65, 0x58, 0x12, 0x28, 0x0a, 0x10, 0x63, 0x61, 0x72, 0x5f,
	0x63, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65, 0x5f, 0x79, 0x18, 0x0c, 0x20, 0x01,
	0x28, 0x02, 0x52, 0x0e, 0x63, 0x61, 0x72, 0x43, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74,
	0x65, 0x59, 0x12, 0x28, 0x0a, 0x10, 0x63, 0x61, 0x72, 0x5f, 0x63, 0x6f, 0x6f, 0x72, 0x64, 0x69,
	0x6e, 0x61, 0x74, 0x65, 0x5f, 0x7a, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0e, 0x63, 0x61,
	0x72, 0x43, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65, 0x5a, 0x12, 0x20, 0x0a, 0x0c,
	0x69, 0x73, 0x5f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x5f, 0x6c, 0x61, 0x70, 0x18, 0x0e, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x0a, 0x69, 0x73, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x4c, 0x61, 0x70, 0x12, 0x21,
	0x0a, 0x0c, 0x70, 0x65, 0x6e, 0x61, 0x6c, 0x74, 0x79, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x0f,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x70, 0x65, 0x6e, 0x61, 0x6c, 0x74, 0x79, 0x54, 0x79, 0x70,
	0x65, 0x42, 0x0b, 0x5a, 0x09, 0x2e, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
})

var (
	file_lap_proto_rawDescOnce sync.Once
	file_lap_proto_rawDescData []byte
)

func file_lap_proto_rawDescGZIP() []byte {
	file_lap_proto_rawDescOnce.Do(func() {
		file_lap_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_lap_proto_rawDesc), len(file_lap_proto_rawDesc)))
	})
	return file_lap_proto_rawDescData
}

var file_lap_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_lap_proto_goTypes = []any{
	(*Lap)(nil),   // 0: racemate.Lap
	(*Frame)(nil), // 1: racemate.Frame
}
var file_lap_proto_depIdxs = []int32{
	1, // 0: racemate.Lap.frames:type_name -> racemate.Frame
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_lap_proto_init() }
func file_lap_proto_init() {
	if File_lap_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_lap_proto_rawDesc), len(file_lap_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_lap_proto_goTypes,
		DependencyIndexes: file_lap_proto_depIdxs,
		MessageInfos:      file_lap_proto_msgTypes,
	}.Build()
	File_lap_proto = out.File
	file_lap_proto_goTypes = nil
	file_lap_proto_depIdxs = nil
}
