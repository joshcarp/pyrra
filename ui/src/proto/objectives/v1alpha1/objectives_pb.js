// @generated by protoc-gen-es v1.0.0 with parameter "target=js+dts"
// @generated from file objectives/v1alpha1/objectives.proto (package objectives.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message objectives.v1alpha1.ListRequest
 */
export const ListRequest = proto3.makeMessageType(
  "objectives.v1alpha1.ListRequest",
  () => [
    { no: 1, name: "expr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message objectives.v1alpha1.ListResponse
 */
export const ListResponse = proto3.makeMessageType(
  "objectives.v1alpha1.ListResponse",
  () => [
    { no: 1, name: "objectives", kind: "message", T: Objective, repeated: true },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Objective
 */
export const Objective = proto3.makeMessageType(
  "objectives.v1alpha1.Objective",
  () => [
    { no: 1, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 2, name: "target", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "window", kind: "message", T: Duration },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "indicator", kind: "message", T: Indicator },
    { no: 6, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "queries", kind: "message", T: Queries },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Indicator
 */
export const Indicator = proto3.makeMessageType(
  "objectives.v1alpha1.Indicator",
  () => [
    { no: 1, name: "ratio", kind: "message", T: Ratio, oneof: "options" },
    { no: 2, name: "latency", kind: "message", T: Latency, oneof: "options" },
    { no: 3, name: "boolGauge", kind: "message", T: BoolGauge, oneof: "options" },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Ratio
 */
export const Ratio = proto3.makeMessageType(
  "objectives.v1alpha1.Ratio",
  () => [
    { no: 1, name: "total", kind: "message", T: Query },
    { no: 2, name: "errors", kind: "message", T: Query },
    { no: 3, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Latency
 */
export const Latency = proto3.makeMessageType(
  "objectives.v1alpha1.Latency",
  () => [
    { no: 1, name: "total", kind: "message", T: Query },
    { no: 2, name: "success", kind: "message", T: Query },
    { no: 3, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message objectives.v1alpha1.BoolGauge
 */
export const BoolGauge = proto3.makeMessageType(
  "objectives.v1alpha1.BoolGauge",
  () => [
    { no: 1, name: "boolGauge", kind: "message", T: Query },
    { no: 3, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Query
 */
export const Query = proto3.makeMessageType(
  "objectives.v1alpha1.Query",
  () => [
    { no: 1, name: "metric", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "matchers", kind: "message", T: LabelMatcher, repeated: true },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Queries
 */
export const Queries = proto3.makeMessageType(
  "objectives.v1alpha1.Queries",
  () => [
    { no: 1, name: "countTotal", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "countErrors", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "graphErrorBudget", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "graphRequests", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "graphErrors", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Copied from Prometheus.
 * Matcher specifies a rule, which can match or set of labels or not.
 *
 * @generated from message objectives.v1alpha1.LabelMatcher
 */
export const LabelMatcher = proto3.makeMessageType(
  "objectives.v1alpha1.LabelMatcher",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(LabelMatcher_Type) },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from enum objectives.v1alpha1.LabelMatcher.Type
 */
export const LabelMatcher_Type = proto3.makeEnum(
  "objectives.v1alpha1.LabelMatcher.Type",
  [
    {no: 0, name: "EQ"},
    {no: 1, name: "NEQ"},
    {no: 2, name: "RE"},
    {no: 3, name: "NRE"},
  ],
);

/**
 * @generated from message objectives.v1alpha1.GetStatusRequest
 */
export const GetStatusRequest = proto3.makeMessageType(
  "objectives.v1alpha1.GetStatusRequest",
  () => [
    { no: 1, name: "expr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "time", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GetStatusResponse
 */
export const GetStatusResponse = proto3.makeMessageType(
  "objectives.v1alpha1.GetStatusResponse",
  () => [
    { no: 1, name: "status", kind: "message", T: ObjectiveStatus, repeated: true },
  ],
);

/**
 * @generated from message objectives.v1alpha1.ObjectiveStatus
 */
export const ObjectiveStatus = proto3.makeMessageType(
  "objectives.v1alpha1.ObjectiveStatus",
  () => [
    { no: 1, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 2, name: "availability", kind: "message", T: Availability },
    { no: 3, name: "budget", kind: "message", T: Budget },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Availability
 */
export const Availability = proto3.makeMessageType(
  "objectives.v1alpha1.Availability",
  () => [
    { no: 1, name: "percentage", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "total", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "errors", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Budget
 */
export const Budget = proto3.makeMessageType(
  "objectives.v1alpha1.Budget",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "remaining", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "max", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GetAlertsRequest
 */
export const GetAlertsRequest = proto3.makeMessageType(
  "objectives.v1alpha1.GetAlertsRequest",
  () => [
    { no: 1, name: "expr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "inactive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "current", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GetAlertsResponse
 */
export const GetAlertsResponse = proto3.makeMessageType(
  "objectives.v1alpha1.GetAlertsResponse",
  () => [
    { no: 1, name: "alerts", kind: "message", T: Alert, repeated: true },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Alert
 */
export const Alert = proto3.makeMessageType(
  "objectives.v1alpha1.Alert",
  () => [
    { no: 1, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 2, name: "severity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "for", kind: "message", T: Duration },
    { no: 4, name: "factor", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "state", kind: "enum", T: proto3.getEnumType(Alert_State) },
    { no: 6, name: "short", kind: "message", T: Burnrate },
    { no: 7, name: "long", kind: "message", T: Burnrate },
  ],
);

/**
 * @generated from enum objectives.v1alpha1.Alert.State
 */
export const Alert_State = proto3.makeEnum(
  "objectives.v1alpha1.Alert.State",
  [
    {no: 0, name: "inactive"},
    {no: 1, name: "pending"},
    {no: 2, name: "firing"},
  ],
);

/**
 * @generated from message objectives.v1alpha1.Burnrate
 */
export const Burnrate = proto3.makeMessageType(
  "objectives.v1alpha1.Burnrate",
  () => [
    { no: 1, name: "window", kind: "message", T: Duration },
    { no: 2, name: "current", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GraphErrorBudgetRequest
 */
export const GraphErrorBudgetRequest = proto3.makeMessageType(
  "objectives.v1alpha1.GraphErrorBudgetRequest",
  () => [
    { no: 1, name: "expr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start", kind: "message", T: Timestamp },
    { no: 4, name: "end", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GraphErrorBudgetResponse
 */
export const GraphErrorBudgetResponse = proto3.makeMessageType(
  "objectives.v1alpha1.GraphErrorBudgetResponse",
  () => [
    { no: 1, name: "timeseries", kind: "message", T: Timeseries },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GraphRateRequest
 */
export const GraphRateRequest = proto3.makeMessageType(
  "objectives.v1alpha1.GraphRateRequest",
  () => [
    { no: 1, name: "expr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start", kind: "message", T: Timestamp },
    { no: 4, name: "end", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GraphRateResponse
 */
export const GraphRateResponse = proto3.makeMessageType(
  "objectives.v1alpha1.GraphRateResponse",
  () => [
    { no: 1, name: "timeseries", kind: "message", T: Timeseries },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GraphErrorsRequest
 */
export const GraphErrorsRequest = proto3.makeMessageType(
  "objectives.v1alpha1.GraphErrorsRequest",
  () => [
    { no: 1, name: "expr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start", kind: "message", T: Timestamp },
    { no: 4, name: "end", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GraphErrorsResponse
 */
export const GraphErrorsResponse = proto3.makeMessageType(
  "objectives.v1alpha1.GraphErrorsResponse",
  () => [
    { no: 1, name: "timeseries", kind: "message", T: Timeseries },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Timeseries
 */
export const Timeseries = proto3.makeMessageType(
  "objectives.v1alpha1.Timeseries",
  () => [
    { no: 1, name: "labels", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "series", kind: "message", T: Series, repeated: true },
  ],
);

/**
 * @generated from message objectives.v1alpha1.Series
 */
export const Series = proto3.makeMessageType(
  "objectives.v1alpha1.Series",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GraphDurationRequest
 */
export const GraphDurationRequest = proto3.makeMessageType(
  "objectives.v1alpha1.GraphDurationRequest",
  () => [
    { no: 1, name: "expr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grouping", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start", kind: "message", T: Timestamp },
    { no: 4, name: "end", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message objectives.v1alpha1.GraphDurationResponse
 */
export const GraphDurationResponse = proto3.makeMessageType(
  "objectives.v1alpha1.GraphDurationResponse",
  () => [
    { no: 1, name: "timeseries", kind: "message", T: Timeseries, repeated: true },
  ],
);

