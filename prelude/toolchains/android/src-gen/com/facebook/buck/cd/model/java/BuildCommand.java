// @generated
// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: javacd.proto

package com.facebook.buck.cd.model.java;

/**
 * Protobuf type {@code javacd.api.v1.BuildCommand}
 */
@javax.annotation.Generated(value="protoc", comments="annotations:BuildCommand.java.pb.meta")
public  final class BuildCommand extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:javacd.api.v1.BuildCommand)
    BuildCommandOrBuilder {
private static final long serialVersionUID = 0L;
  // Use BuildCommand.newBuilder() to construct.
  private BuildCommand(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private BuildCommand() {
    buildMode_ = 0;
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private BuildCommand(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    int mutable_bitField0_ = 0;
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 8: {
            int rawValue = input.readEnum();

            buildMode_ = rawValue;
            break;
          }
          case 18: {
            com.facebook.buck.cd.model.java.BaseJarCommand.Builder subBuilder = null;
            if (baseJarCommand_ != null) {
              subBuilder = baseJarCommand_.toBuilder();
            }
            baseJarCommand_ = input.readMessage(com.facebook.buck.cd.model.java.BaseJarCommand.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(baseJarCommand_);
              baseJarCommand_ = subBuilder.buildPartial();
            }

            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.facebook.buck.cd.model.java.JavaCDProto.internal_static_javacd_api_v1_BuildCommand_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.facebook.buck.cd.model.java.JavaCDProto.internal_static_javacd_api_v1_BuildCommand_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.facebook.buck.cd.model.java.BuildCommand.class, com.facebook.buck.cd.model.java.BuildCommand.Builder.class);
  }

  public static final int BUILDMODE_FIELD_NUMBER = 1;
  private int buildMode_;
  /**
   * <code>.javacd.api.v1.BuildMode buildMode = 1;</code>
   */
  public int getBuildModeValue() {
    return buildMode_;
  }
  /**
   * <code>.javacd.api.v1.BuildMode buildMode = 1;</code>
   */
  public com.facebook.buck.cd.model.java.BuildMode getBuildMode() {
    @SuppressWarnings("deprecation")
    com.facebook.buck.cd.model.java.BuildMode result = com.facebook.buck.cd.model.java.BuildMode.valueOf(buildMode_);
    return result == null ? com.facebook.buck.cd.model.java.BuildMode.UNRECOGNIZED : result;
  }

  public static final int BASEJARCOMMAND_FIELD_NUMBER = 2;
  private com.facebook.buck.cd.model.java.BaseJarCommand baseJarCommand_;
  /**
   * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
   */
  public boolean hasBaseJarCommand() {
    return baseJarCommand_ != null;
  }
  /**
   * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
   */
  public com.facebook.buck.cd.model.java.BaseJarCommand getBaseJarCommand() {
    return baseJarCommand_ == null ? com.facebook.buck.cd.model.java.BaseJarCommand.getDefaultInstance() : baseJarCommand_;
  }
  /**
   * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
   */
  public com.facebook.buck.cd.model.java.BaseJarCommandOrBuilder getBaseJarCommandOrBuilder() {
    return getBaseJarCommand();
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (buildMode_ != com.facebook.buck.cd.model.java.BuildMode.BUILD_MODE_UNSPECIFIED.getNumber()) {
      output.writeEnum(1, buildMode_);
    }
    if (baseJarCommand_ != null) {
      output.writeMessage(2, getBaseJarCommand());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (buildMode_ != com.facebook.buck.cd.model.java.BuildMode.BUILD_MODE_UNSPECIFIED.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(1, buildMode_);
    }
    if (baseJarCommand_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getBaseJarCommand());
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof com.facebook.buck.cd.model.java.BuildCommand)) {
      return super.equals(obj);
    }
    com.facebook.buck.cd.model.java.BuildCommand other = (com.facebook.buck.cd.model.java.BuildCommand) obj;

    if (buildMode_ != other.buildMode_) return false;
    if (hasBaseJarCommand() != other.hasBaseJarCommand()) return false;
    if (hasBaseJarCommand()) {
      if (!getBaseJarCommand()
          .equals(other.getBaseJarCommand())) return false;
    }
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + BUILDMODE_FIELD_NUMBER;
    hash = (53 * hash) + buildMode_;
    if (hasBaseJarCommand()) {
      hash = (37 * hash) + BASEJARCOMMAND_FIELD_NUMBER;
      hash = (53 * hash) + getBaseJarCommand().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.facebook.buck.cd.model.java.BuildCommand parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(com.facebook.buck.cd.model.java.BuildCommand prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code javacd.api.v1.BuildCommand}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:javacd.api.v1.BuildCommand)
      com.facebook.buck.cd.model.java.BuildCommandOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.facebook.buck.cd.model.java.JavaCDProto.internal_static_javacd_api_v1_BuildCommand_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.facebook.buck.cd.model.java.JavaCDProto.internal_static_javacd_api_v1_BuildCommand_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.facebook.buck.cd.model.java.BuildCommand.class, com.facebook.buck.cd.model.java.BuildCommand.Builder.class);
    }

    // Construct using com.facebook.buck.cd.model.java.BuildCommand.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      buildMode_ = 0;

      if (baseJarCommandBuilder_ == null) {
        baseJarCommand_ = null;
      } else {
        baseJarCommand_ = null;
        baseJarCommandBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.facebook.buck.cd.model.java.JavaCDProto.internal_static_javacd_api_v1_BuildCommand_descriptor;
    }

    @java.lang.Override
    public com.facebook.buck.cd.model.java.BuildCommand getDefaultInstanceForType() {
      return com.facebook.buck.cd.model.java.BuildCommand.getDefaultInstance();
    }

    @java.lang.Override
    public com.facebook.buck.cd.model.java.BuildCommand build() {
      com.facebook.buck.cd.model.java.BuildCommand result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.facebook.buck.cd.model.java.BuildCommand buildPartial() {
      com.facebook.buck.cd.model.java.BuildCommand result = new com.facebook.buck.cd.model.java.BuildCommand(this);
      result.buildMode_ = buildMode_;
      if (baseJarCommandBuilder_ == null) {
        result.baseJarCommand_ = baseJarCommand_;
      } else {
        result.baseJarCommand_ = baseJarCommandBuilder_.build();
      }
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.facebook.buck.cd.model.java.BuildCommand) {
        return mergeFrom((com.facebook.buck.cd.model.java.BuildCommand)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.facebook.buck.cd.model.java.BuildCommand other) {
      if (other == com.facebook.buck.cd.model.java.BuildCommand.getDefaultInstance()) return this;
      if (other.buildMode_ != 0) {
        setBuildModeValue(other.getBuildModeValue());
      }
      if (other.hasBaseJarCommand()) {
        mergeBaseJarCommand(other.getBaseJarCommand());
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      com.facebook.buck.cd.model.java.BuildCommand parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.facebook.buck.cd.model.java.BuildCommand) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int buildMode_ = 0;
    /**
     * <code>.javacd.api.v1.BuildMode buildMode = 1;</code>
     */
    public int getBuildModeValue() {
      return buildMode_;
    }
    /**
     * <code>.javacd.api.v1.BuildMode buildMode = 1;</code>
     */
    public Builder setBuildModeValue(int value) {
      buildMode_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>.javacd.api.v1.BuildMode buildMode = 1;</code>
     */
    public com.facebook.buck.cd.model.java.BuildMode getBuildMode() {
      @SuppressWarnings("deprecation")
      com.facebook.buck.cd.model.java.BuildMode result = com.facebook.buck.cd.model.java.BuildMode.valueOf(buildMode_);
      return result == null ? com.facebook.buck.cd.model.java.BuildMode.UNRECOGNIZED : result;
    }
    /**
     * <code>.javacd.api.v1.BuildMode buildMode = 1;</code>
     */
    public Builder setBuildMode(com.facebook.buck.cd.model.java.BuildMode value) {
      if (value == null) {
        throw new NullPointerException();
      }
      
      buildMode_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.javacd.api.v1.BuildMode buildMode = 1;</code>
     */
    public Builder clearBuildMode() {
      
      buildMode_ = 0;
      onChanged();
      return this;
    }

    private com.facebook.buck.cd.model.java.BaseJarCommand baseJarCommand_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.facebook.buck.cd.model.java.BaseJarCommand, com.facebook.buck.cd.model.java.BaseJarCommand.Builder, com.facebook.buck.cd.model.java.BaseJarCommandOrBuilder> baseJarCommandBuilder_;
    /**
     * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
     */
    public boolean hasBaseJarCommand() {
      return baseJarCommandBuilder_ != null || baseJarCommand_ != null;
    }
    /**
     * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
     */
    public com.facebook.buck.cd.model.java.BaseJarCommand getBaseJarCommand() {
      if (baseJarCommandBuilder_ == null) {
        return baseJarCommand_ == null ? com.facebook.buck.cd.model.java.BaseJarCommand.getDefaultInstance() : baseJarCommand_;
      } else {
        return baseJarCommandBuilder_.getMessage();
      }
    }
    /**
     * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
     */
    public Builder setBaseJarCommand(com.facebook.buck.cd.model.java.BaseJarCommand value) {
      if (baseJarCommandBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        baseJarCommand_ = value;
        onChanged();
      } else {
        baseJarCommandBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
     */
    public Builder setBaseJarCommand(
        com.facebook.buck.cd.model.java.BaseJarCommand.Builder builderForValue) {
      if (baseJarCommandBuilder_ == null) {
        baseJarCommand_ = builderForValue.build();
        onChanged();
      } else {
        baseJarCommandBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
     */
    public Builder mergeBaseJarCommand(com.facebook.buck.cd.model.java.BaseJarCommand value) {
      if (baseJarCommandBuilder_ == null) {
        if (baseJarCommand_ != null) {
          baseJarCommand_ =
            com.facebook.buck.cd.model.java.BaseJarCommand.newBuilder(baseJarCommand_).mergeFrom(value).buildPartial();
        } else {
          baseJarCommand_ = value;
        }
        onChanged();
      } else {
        baseJarCommandBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
     */
    public Builder clearBaseJarCommand() {
      if (baseJarCommandBuilder_ == null) {
        baseJarCommand_ = null;
        onChanged();
      } else {
        baseJarCommand_ = null;
        baseJarCommandBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
     */
    public com.facebook.buck.cd.model.java.BaseJarCommand.Builder getBaseJarCommandBuilder() {
      
      onChanged();
      return getBaseJarCommandFieldBuilder().getBuilder();
    }
    /**
     * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
     */
    public com.facebook.buck.cd.model.java.BaseJarCommandOrBuilder getBaseJarCommandOrBuilder() {
      if (baseJarCommandBuilder_ != null) {
        return baseJarCommandBuilder_.getMessageOrBuilder();
      } else {
        return baseJarCommand_ == null ?
            com.facebook.buck.cd.model.java.BaseJarCommand.getDefaultInstance() : baseJarCommand_;
      }
    }
    /**
     * <code>.javacd.api.v1.BaseJarCommand baseJarCommand = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.facebook.buck.cd.model.java.BaseJarCommand, com.facebook.buck.cd.model.java.BaseJarCommand.Builder, com.facebook.buck.cd.model.java.BaseJarCommandOrBuilder> 
        getBaseJarCommandFieldBuilder() {
      if (baseJarCommandBuilder_ == null) {
        baseJarCommandBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.facebook.buck.cd.model.java.BaseJarCommand, com.facebook.buck.cd.model.java.BaseJarCommand.Builder, com.facebook.buck.cd.model.java.BaseJarCommandOrBuilder>(
                getBaseJarCommand(),
                getParentForChildren(),
                isClean());
        baseJarCommand_ = null;
      }
      return baseJarCommandBuilder_;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:javacd.api.v1.BuildCommand)
  }

  // @@protoc_insertion_point(class_scope:javacd.api.v1.BuildCommand)
  private static final com.facebook.buck.cd.model.java.BuildCommand DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.facebook.buck.cd.model.java.BuildCommand();
  }

  public static com.facebook.buck.cd.model.java.BuildCommand getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<BuildCommand>
      PARSER = new com.google.protobuf.AbstractParser<BuildCommand>() {
    @java.lang.Override
    public BuildCommand parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new BuildCommand(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<BuildCommand> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<BuildCommand> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.facebook.buck.cd.model.java.BuildCommand getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

