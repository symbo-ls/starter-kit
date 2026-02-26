# Redirect Pattern --- Quick Documentation

## Purpose

Edge redirect rule mapping path-based preview routes into host-based
preview domains.

Transforms:

    /:user/:app/(optional subpath)?env=ENV

into:

    https://{env.}app.user.preview.symbo.ls/(optional subpath)

---

## Route Contract

### Input Path Structure

    /:user/:app/:subpath*

Segment Required Description

---

`user` yes Namespace owner identifier
`app` yes Application identifier
`subpath` no Forwarded unchanged

Requests with fewer than two segments are passed through without
modification.

---

### Query Parameters

Param Behavior

---

`env` Optional deployment environment selector
others Forwarded unchanged

`env` is removed from query before redirect.

---

## Host Resolution

### Without Environment

    {app}.{user}.preview.symbo.ls

### With Environment

    {env}.{app}.{user}.preview.symbo.ls

---

## Redirect Construction

Final URL:

    https://TARGET_HOST/
    + subpath
    + remaining query string

Status code:

    302 Temporary Redirect

---

## Processing Flow

1.  Parse URL.
2.  Split pathname segments.
3.  Validate segment count ≥ 2.
4.  Extract:
    - user
    - app
    - subpath
5.  Read `env`.
6.  Remove `env` from query.
7.  Construct target host.
8.  Assemble redirect URL.
9.  Issue redirect response.

---

## Examples

### Basic

    Input:
    https://domain/x/alfa

    Output:
    https://alfa.x.preview.symbo.ls/

### With Subpath

    Input:
    https://domain/x/alfa/api/v1

    Output:
    https://alfa.x.preview.symbo.ls/api/v1

### With Environment

    Input:
    https://domain/x/alfa/editor?env=dev

    Output:
    https://dev.alfa.x.preview.symbo.ls/editor

### With Additional Query

    Input:
    https://domain/x/alfa/view?id=4&env=stage

    Output:
    https://stage.alfa.x.preview.symbo.ls/view?id=4

---

## Edge Considerations

- No validation of segment encoding
- No sanitization of host fragments
- Relies on client redirect follow
- Temporary status avoids cache locking
- Does not normalize trailing slash
- Does not preserve fragments (`#hash`)
- Assumes HTTPS termination upstream

---

## Intended Use

Preview routing layer for multi-tenant namespace virtualization
resolving path entrypoints into isolated host environments.
