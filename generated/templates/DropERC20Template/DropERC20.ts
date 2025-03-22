// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Claimed extends ethereum.Event {
  get params(): Claimed__Params {
    return new Claimed__Params(this);
  }
}

export class Claimed__Params {
  _event: Claimed;

  constructor(event: Claimed) {
    this._event = event;
  }

  get recipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get uHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Stopped extends ethereum.Event {
  get params(): Stopped__Params {
    return new Stopped__Params(this);
  }
}

export class Stopped__Params {
  _event: Stopped;

  constructor(event: Stopped) {
    this._event = event;
  }
}

export class DropERC20 extends ethereum.SmartContract {
  static bind(address: Address): DropERC20 {
    return new DropERC20("DropERC20", address);
  }

  EXPECTED_ALLOCATOR_ADDRESS(): Address {
    let result = super.call(
      "EXPECTED_ALLOCATOR_ADDRESS",
      "EXPECTED_ALLOCATOR_ADDRESS():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_EXPECTED_ALLOCATOR_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "EXPECTED_ALLOCATOR_ADDRESS",
      "EXPECTED_ALLOCATOR_ADDRESS():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  amount(): BigInt {
    let result = super.call("amount", "amount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_amount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("amount", "amount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimed(param0: Bytes): boolean {
    let result = super.call("claimed", "claimed(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(param0),
    ]);

    return result[0].toBoolean();
  }

  try_claimed(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("claimed", "claimed(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  claims(): BigInt {
    let result = super.call("claims", "claims():(uint256)", []);

    return result[0].toBigInt();
  }

  try_claims(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("claims", "claims():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  expiration(): BigInt {
    let result = super.call("expiration", "expiration():(uint256)", []);

    return result[0].toBigInt();
  }

  try_expiration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("expiration", "expiration():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isClaimed(uHash: Bytes): boolean {
    let result = super.call("isClaimed", "isClaimed(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(uHash),
    ]);

    return result[0].toBoolean();
  }

  try_isClaimed(uHash: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("isClaimed", "isClaimed(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(uHash),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxClaims(): BigInt {
    let result = super.call("maxClaims", "maxClaims():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxClaims(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxClaims", "maxClaims():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  metadataIpfsHash(): Bytes {
    let result = super.call(
      "metadataIpfsHash",
      "metadataIpfsHash():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_metadataIpfsHash(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "metadataIpfsHash",
      "metadataIpfsHash():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stopped(): boolean {
    let result = super.call("stopped", "stopped():(bool)", []);

    return result[0].toBoolean();
  }

  try_stopped(): ethereum.CallResult<boolean> {
    let result = super.tryCall("stopped", "stopped():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  verifyAllocatorSignature(
    zkPassTaskId: Bytes,
    validatorAddress: Address,
    allocatorSignature: Bytes,
  ): boolean {
    let result = super.call(
      "verifyAllocatorSignature",
      "verifyAllocatorSignature(bytes32,address,bytes):(bool)",
      [
        ethereum.Value.fromFixedBytes(zkPassTaskId),
        ethereum.Value.fromAddress(validatorAddress),
        ethereum.Value.fromBytes(allocatorSignature),
      ],
    );

    return result[0].toBoolean();
  }

  try_verifyAllocatorSignature(
    zkPassTaskId: Bytes,
    validatorAddress: Address,
    allocatorSignature: Bytes,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyAllocatorSignature",
      "verifyAllocatorSignature(bytes32,address,bytes):(bool)",
      [
        ethereum.Value.fromFixedBytes(zkPassTaskId),
        ethereum.Value.fromAddress(validatorAddress),
        ethereum.Value.fromBytes(allocatorSignature),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  verifyEphemeralKeySignature(
    recipient: Address,
    ephemeralKeyAddress: Address,
    ephemeralKeySignature: Bytes,
  ): boolean {
    let result = super.call(
      "verifyEphemeralKeySignature",
      "verifyEphemeralKeySignature(address,address,bytes):(bool)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromAddress(ephemeralKeyAddress),
        ethereum.Value.fromBytes(ephemeralKeySignature),
      ],
    );

    return result[0].toBoolean();
  }

  try_verifyEphemeralKeySignature(
    recipient: Address,
    ephemeralKeyAddress: Address,
    ephemeralKeySignature: Bytes,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyEphemeralKeySignature",
      "verifyEphemeralKeySignature(address,address,bytes):(bool)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromAddress(ephemeralKeyAddress),
        ethereum.Value.fromBytes(ephemeralKeySignature),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  verifyValidatorSignature(
    zkPassTaskId: Bytes,
    uHash: Bytes,
    publicFieldsHash: Bytes,
    recipient: Address,
    validatorAddress: Address,
    validatorSignature: Bytes,
  ): boolean {
    let result = super.call(
      "verifyValidatorSignature",
      "verifyValidatorSignature(bytes32,bytes32,bytes32,address,address,bytes):(bool)",
      [
        ethereum.Value.fromFixedBytes(zkPassTaskId),
        ethereum.Value.fromFixedBytes(uHash),
        ethereum.Value.fromFixedBytes(publicFieldsHash),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromAddress(validatorAddress),
        ethereum.Value.fromBytes(validatorSignature),
      ],
    );

    return result[0].toBoolean();
  }

  try_verifyValidatorSignature(
    zkPassTaskId: Bytes,
    uHash: Bytes,
    publicFieldsHash: Bytes,
    recipient: Address,
    validatorAddress: Address,
    validatorSignature: Bytes,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyValidatorSignature",
      "verifyValidatorSignature(bytes32,bytes32,bytes32,address,address,bytes):(bool)",
      [
        ethereum.Value.fromFixedBytes(zkPassTaskId),
        ethereum.Value.fromFixedBytes(uHash),
        ethereum.Value.fromFixedBytes(publicFieldsHash),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromAddress(validatorAddress),
        ethereum.Value.fromBytes(validatorSignature),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  zkPassSchemaId(): Bytes {
    let result = super.call("zkPassSchemaId", "zkPassSchemaId():(bytes32)", []);

    return result[0].toBytes();
  }

  try_zkPassSchemaId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "zkPassSchemaId",
      "zkPassSchemaId():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _maxClaims(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _zkPassSchemaId(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _expiration(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _metadataIpfsHash(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get zkPassTaskId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get validatorAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get uHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get publicFieldsHash(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get recipient(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get allocatorSignature(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get validatorSignature(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimWithEphemeralKeyCall extends ethereum.Call {
  get inputs(): ClaimWithEphemeralKeyCall__Inputs {
    return new ClaimWithEphemeralKeyCall__Inputs(this);
  }

  get outputs(): ClaimWithEphemeralKeyCall__Outputs {
    return new ClaimWithEphemeralKeyCall__Outputs(this);
  }
}

export class ClaimWithEphemeralKeyCall__Inputs {
  _call: ClaimWithEphemeralKeyCall;

  constructor(call: ClaimWithEphemeralKeyCall) {
    this._call = call;
  }

  get zkPassTaskId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get validatorAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get uHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get publicFieldsHash(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get recipient(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get ephemeralKeyAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get ephemeralKeySignature(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get allocatorSignature(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get validatorSignature(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }
}

export class ClaimWithEphemeralKeyCall__Outputs {
  _call: ClaimWithEphemeralKeyCall;

  constructor(call: ClaimWithEphemeralKeyCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StopCall extends ethereum.Call {
  get inputs(): StopCall__Inputs {
    return new StopCall__Inputs(this);
  }

  get outputs(): StopCall__Outputs {
    return new StopCall__Outputs(this);
  }
}

export class StopCall__Inputs {
  _call: StopCall;

  constructor(call: StopCall) {
    this._call = call;
  }
}

export class StopCall__Outputs {
  _call: StopCall;

  constructor(call: StopCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
