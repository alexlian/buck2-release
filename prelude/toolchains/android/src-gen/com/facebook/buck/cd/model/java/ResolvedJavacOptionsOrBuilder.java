// @generated
// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: javacd.proto

// Protobuf Java Version: 3.25.6
package com.facebook.buck.cd.model.java;

@javax.annotation.Generated(value="protoc", comments="annotations:ResolvedJavacOptionsOrBuilder.java.pb.meta")
public interface ResolvedJavacOptionsOrBuilder extends
    // @@protoc_insertion_point(interface_extends:javacd.api.v1.ResolvedJavacOptions)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string bootclasspath = 1;</code>
   * @return The bootclasspath.
   */
  java.lang.String getBootclasspath();
  /**
   * <code>string bootclasspath = 1;</code>
   * @return The bytes for bootclasspath.
   */
  com.google.protobuf.ByteString
      getBootclasspathBytes();

  /**
   * <code>repeated string bootclasspathList = 2;</code>
   * @return A list containing the bootclasspathList.
   */
  java.util.List<java.lang.String>
      getBootclasspathListList();
  /**
   * <code>repeated string bootclasspathList = 2;</code>
   * @return The count of bootclasspathList.
   */
  int getBootclasspathListCount();
  /**
   * <code>repeated string bootclasspathList = 2;</code>
   * @param index The index of the element to return.
   * @return The bootclasspathList at the given index.
   */
  java.lang.String getBootclasspathList(int index);
  /**
   * <code>repeated string bootclasspathList = 2;</code>
   * @param index The index of the value to return.
   * @return The bytes of the bootclasspathList at the given index.
   */
  com.google.protobuf.ByteString
      getBootclasspathListBytes(int index);

  /**
   * <code>.javacd.api.v1.ResolvedJavacOptions.JavacLanguageLevelOptions languageLevelOptions = 3;</code>
   * @return Whether the languageLevelOptions field is set.
   */
  boolean hasLanguageLevelOptions();
  /**
   * <code>.javacd.api.v1.ResolvedJavacOptions.JavacLanguageLevelOptions languageLevelOptions = 3;</code>
   * @return The languageLevelOptions.
   */
  com.facebook.buck.cd.model.java.ResolvedJavacOptions.JavacLanguageLevelOptions getLanguageLevelOptions();
  /**
   * <code>.javacd.api.v1.ResolvedJavacOptions.JavacLanguageLevelOptions languageLevelOptions = 3;</code>
   */
  com.facebook.buck.cd.model.java.ResolvedJavacOptions.JavacLanguageLevelOptionsOrBuilder getLanguageLevelOptionsOrBuilder();

  /**
   * <code>bool debug = 4;</code>
   * @return The debug.
   */
  boolean getDebug();

  /**
   * <code>bool verbose = 5;</code>
   * @return The verbose.
   */
  boolean getVerbose();

  /**
   * <code>.javacd.api.v1.ResolvedJavacOptions.JavacPluginParams javaAnnotationProcessorParams = 6;</code>
   * @return Whether the javaAnnotationProcessorParams field is set.
   */
  boolean hasJavaAnnotationProcessorParams();
  /**
   * <code>.javacd.api.v1.ResolvedJavacOptions.JavacPluginParams javaAnnotationProcessorParams = 6;</code>
   * @return The javaAnnotationProcessorParams.
   */
  com.facebook.buck.cd.model.java.ResolvedJavacOptions.JavacPluginParams getJavaAnnotationProcessorParams();
  /**
   * <code>.javacd.api.v1.ResolvedJavacOptions.JavacPluginParams javaAnnotationProcessorParams = 6;</code>
   */
  com.facebook.buck.cd.model.java.ResolvedJavacOptions.JavacPluginParamsOrBuilder getJavaAnnotationProcessorParamsOrBuilder();

  /**
   * <code>.javacd.api.v1.ResolvedJavacOptions.JavacPluginParams standardJavacPluginParams = 7;</code>
   * @return Whether the standardJavacPluginParams field is set.
   */
  boolean hasStandardJavacPluginParams();
  /**
   * <code>.javacd.api.v1.ResolvedJavacOptions.JavacPluginParams standardJavacPluginParams = 7;</code>
   * @return The standardJavacPluginParams.
   */
  com.facebook.buck.cd.model.java.ResolvedJavacOptions.JavacPluginParams getStandardJavacPluginParams();
  /**
   * <code>.javacd.api.v1.ResolvedJavacOptions.JavacPluginParams standardJavacPluginParams = 7;</code>
   */
  com.facebook.buck.cd.model.java.ResolvedJavacOptions.JavacPluginParamsOrBuilder getStandardJavacPluginParamsOrBuilder();

  /**
   * <code>repeated string extraArguments = 8;</code>
   * @return A list containing the extraArguments.
   */
  java.util.List<java.lang.String>
      getExtraArgumentsList();
  /**
   * <code>repeated string extraArguments = 8;</code>
   * @return The count of extraArguments.
   */
  int getExtraArgumentsCount();
  /**
   * <code>repeated string extraArguments = 8;</code>
   * @param index The index of the element to return.
   * @return The extraArguments at the given index.
   */
  java.lang.String getExtraArguments(int index);
  /**
   * <code>repeated string extraArguments = 8;</code>
   * @param index The index of the value to return.
   * @return The bytes of the extraArguments at the given index.
   */
  com.google.protobuf.ByteString
      getExtraArgumentsBytes(int index);
}
