"use client";

import { basePath } from "@/next.config";
import SpkAlert from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alerts";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { auth } from "@/shared/firebase/firebaseapi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import Image from "next/image";

const page = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<{
    [key: string]: boolean;
  }>({});

  const togglePasswordVisibility = (field: string) => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "adminnextjs@gmail.com",
    password: "1234567890",
  });
  const { email, password } = data;
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const [loading, setLoading] = useState(false);

  const Login = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredential.user);
      RouteChange();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const [loading1, setLoading1] = useState(false);

  const Login1 = async (_e: any) => {
    _e.preventDefault();
    setLoading1(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      data.email === "adminnextjs@gmail.com" &&
      data.password === "1234567890"
    ) {
      router.push("/dashboard");
    } else {
      setError("The Auction details did not Match");
      setData({
        email: "adminnextjs@gmail.com",
        password: "1234567890",
      });
    }

    setLoading1(false);
  };

  const router = useRouter();
  const RouteChange = () => {
    let path = "/dashboard";
    router.push(path);
  };

  useEffect(() => {
    const body = document.body;
    body.classList.add("authentication-background");
    return () => {
      body.classList.remove("authentication-background");
    };
  }, []);

  return (
    <Fragment>
      <html>
        <body className="">
          <div className="container">
            <div className="row justify-content-center align-items-center authentication authentication-basic h-100 pt-3">
              <Col xxl={7} sm={8} className="col-12">
                <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                  <Nav
                    variant="pills"
                    className="justify-content-center authentication-tabs"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="react">
                        <Image
                          width={28}
                          height={28}
                          src={`${
                            process.env.NODE_ENV === "production"
                              ? basePath
                              : ""
                          }/assets/images/brand-logos/nextjs.png`}
                          alt="logo"
                          className="avatar avatar-sm"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="firebase">
                        <Image
                          width={28}
                          height={28}
                          src={`${
                            process.env.NODE_ENV === "production"
                              ? basePath
                              : ""
                          }/assets/images/brand-logos/firbase.png`}
                          alt="logo"
                          className="avatar avatar-sm"
                        />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Card className="custom-card my-4">
                    <Tab.Content className="">
                      <Tab.Pane eventKey="react" className="border-0">
                        <Card.Body>
                          <Row className=" mx-0 align-items-center">
                            <Col xl={6}>
                              {err && (
                                <SpkAlert variant="danger">{err}</SpkAlert>
                              )}
                              <div className="p-3">
                                <Row className=" gy-3">
                                  <Col xl={12}>
                                    <label
                                      className="form-label text-default"
                                      htmlFor="signin-email"
                                    >
                                      Email Address
                                      <sup className="fs-12 text-danger">*</sup>
                                    </label>
                                    <Form.Control
                                      className="signin-email-input"
                                      id="signin-email"
                                      placeholder="Enter your email address"
                                      name="signin-email"
                                      type="email"
                                      defaultValue={email}
                                      onChange={changeHandler}
                                    />
                                  </Col>
                                  <Col xl={12}>
                                    <label
                                      className="form-label text-default"
                                      htmlFor="signin-password"
                                    >
                                      Password
                                      <sup className="fs-12 text-danger">*</sup>
                                    </label>
                                    <div className="input-group">
                                      <Form.Control
                                        name="signin-password"
                                        className="signin-password-input"
                                        id="signin-password"
                                        placeholder="Enter your password"
                                        type={
                                          passwordVisibility.password
                                            ? "text"
                                            : "password"
                                        }
                                        value={password}
                                        onChange={changeHandler}
                                      />
                                      <SpkButton
                                        Buttontype="button"
                                        onClickfunc={() =>
                                          togglePasswordVisibility("password")
                                        }
                                        Buttonvariant="primary-light"
                                        Customclass="show-password-button"
                                      >
                                        <i
                                          className={`${
                                            passwordVisibility.password
                                              ? "ri-eye-line"
                                              : "ri-eye-off-line"
                                          } align-middle`}
                                        ></i>
                                      </SpkButton>
                                    </div>
                                  </Col>
                                  <Col xl={12}>
                                    <div className="form-check d-flex justify-content-between">
                                      <div>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="rememberMe"
                                        />
                                        <label
                                          className="form-check-label text-muted fw-normal fs-12"
                                          htmlFor="rememberMe"
                                        >
                                          Remember me
                                        </label>
                                      </div>
                                      <Link
                                        scroll={false}
                                        href="/authentication/reset-password/basic"
                                        className="text-success fw-medium fs-12"
                                      >
                                        Forgot Password?
                                      </Link>
                                    </div>
                                  </Col>
                                </Row>
                                <div className="d-grid mt-4">
                                  <Link
                                    href="/dashboard"
                                    onClick={Login1}
                                    className={`btn btn-primary ${
                                      loading1 ? "disabled" : ""
                                    }`}
                                  >
                                    <i className="ri-login-circle-line me-2"></i>{" "}
                                    Sign In
                                    {loading1 && (
                                      <i className="fa fa-spinner fa-spin me-2 ms-2"></i>
                                    )}
                                  </Link>
                                </div>
                                <div className="text-center">
                                  <p className="text-muted mt-3 mb-0">
                                    Don 't have an account?{" "}
                                    <Link
                                      scroll={false}
                                      className="text-primary fw-medium text-decoration-underline"
                                      href="/authentication/sign-up/basic"
                                    >
                                      Sign Up
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col
                              xl={6}
                              className="border rounded bg-secondary-transparent border-secondary border-opacity-10"
                            >
                              <div className="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
                                <Image
                                  fill
                                  src={`${
                                    process.env.NODE_ENV === "production"
                                      ? basePath
                                      : ""
                                  }/assets/images/authentication/5.png`}
                                  alt="Sign In"
                                  className="img-fluid m-auto mb-3 flex-fill mt-4"
                                />
                                <div className="flex-fill text-center">
                                  <h6 className="mb-2">Welcome Back!</h6>
                                  <p className="mb-0 text-muted fw-normal fs-12">
                                    Sign in to your account to continue.
                                  </p>
                                </div>
                                <div className="d-flex mb-2 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                  <SpkButton
                                    Buttontype="button"
                                    Buttonvariant="danger-light"
                                    Customclass="btn-sm d-flex align-items-center justify-content-center flex-fill"
                                  >
                                    <i className="ri-google-fill"></i>
                                    <span className="ms-2">Google</span>
                                  </SpkButton>
                                  <SpkButton
                                    Buttontype="button"
                                    Buttonvariant="primary-light"
                                    Customclass="btn-sm d-flex align-items-center justify-content-center flex-fill"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                    <span className="ms-2">Facebook</span>
                                  </SpkButton>
                                  <SpkButton
                                    Buttontype="button"
                                    Buttonvariant="info-light"
                                    Customclass="btn-sm d-flex align-items-center justify-content-center flex-fill"
                                  >
                                    <i className="ri-twitter-x-line"></i>
                                    <span className="ms-2">Twitter</span>
                                  </SpkButton>
                                </div>
                                <Link scroll={false} href="/dashboard">
                                  <Image
                                    fill
                                    src={`${
                                      process.env.NODE_ENV === "production"
                                        ? basePath
                                        : ""
                                    }/assets/images/brand-logos/toggle-logo.png`}
                                    alt="logo"
                                    className="toggle-logo mb-4 pb-2"
                                  />
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="firebase" className="border-0">
                        <Card.Body>
                          <Row className=" mx-0 align-items-center">
                            <Col xl={6}>
                              {err && (
                                <SpkAlert variant="danger">{err}</SpkAlert>
                              )}
                              <div className="p-3">
                                <Row className=" gy-3">
                                  <Col xl={12}>
                                    <label
                                      className="form-label text-default"
                                      htmlFor="signin-email1"
                                    >
                                      Email Address
                                      <sup className="fs-12 text-danger">*</sup>
                                    </label>
                                    <Form.Control
                                      name="signin-email1"
                                      className="signin-email-input"
                                      id="signin-email1"
                                      placeholder="Enter your email address"
                                      type="email"
                                      defaultValue={email}
                                      onChange={changeHandler}
                                    />
                                  </Col>
                                  <Col xl={12}>
                                    <label
                                      className="form-label text-default"
                                      htmlFor="signin-password1"
                                    >
                                      Password
                                      <sup className="fs-12 text-danger">*</sup>
                                    </label>
                                    <div className="input-group">
                                      <Form.Control
                                        name="signin-password1"
                                        className="form-control signin-password-input"
                                        id="signin-password1"
                                        placeholder="Enter your password"
                                        type={
                                          passwordVisibility.password
                                            ? "text"
                                            : "password"
                                        }
                                        value={password}
                                        onChange={changeHandler}
                                      />
                                      <SpkButton
                                        Buttontype="button"
                                        onClickfunc={() =>
                                          togglePasswordVisibility(
                                            "newpassword"
                                          )
                                        }
                                        Buttonvariant="primary-light"
                                        Customclass="show-password-button"
                                      >
                                        <i
                                          className={`${
                                            passwordVisibility.newpassword
                                              ? "ri-eye-line"
                                              : "ri-eye-off-line"
                                          } align-middle`}
                                        ></i>
                                      </SpkButton>
                                    </div>
                                  </Col>
                                  <Col xl={12}>
                                    <div className="form-check d-flex justify-content-between">
                                      <div>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="rememberMe"
                                        />
                                        <label
                                          className="form-check-label text-muted fw-normal fs-12"
                                          htmlFor="rememberMe"
                                        >
                                          Remember me
                                        </label>
                                      </div>
                                      <Link
                                        scroll={false}
                                        href="/authentication/reset-password/basic"
                                        className="text-success fw-medium fs-12"
                                      >
                                        Forgot Password?
                                      </Link>
                                    </div>
                                  </Col>
                                </Row>
                                <div className="d-grid mt-4">
                                  <Link
                                    href="/dashboard"
                                    onClick={Login}
                                    className={`btn btn-primary ${
                                      loading ? "disabled" : ""
                                    }`}
                                  >
                                    <i className="ri-login-circle-line me-2"></i>{" "}
                                    Sign In
                                    {loading && (
                                      <i className="fa fa-spinner fa-spin me-2 ms-2"></i>
                                    )}
                                  </Link>
                                </div>
                                <div className="text-center">
                                  <p className="text-muted mt-3 mb-0">
                                    Don't have an account?{" "}
                                    <Link
                                      scroll={false}
                                      className="text-primary fw-medium text-decoration-underline"
                                      href="/authentication/sign-up/basic"
                                    >
                                      Sign Up
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col
                              xl={6}
                              className="border rounded bg-secondary-transparent border-secondary border-opacity-10"
                            >
                              <div className="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
                                <Image
                                  fill
                                  src={`${
                                    process.env.NODE_ENV === "production"
                                      ? basePath
                                      : ""
                                  }/assets/images/authentication/5.png`}
                                  alt="Sign In"
                                  className="img-fluid m-auto mb-3 flex-fill mt-4"
                                />
                                <div className="flex-fill text-center">
                                  <h6 className="mb-2">Welcome Back!</h6>
                                  <p className="mb-0 text-muted fw-normal fs-12">
                                    Sign in to your account to continue.
                                  </p>
                                </div>
                                <div className="d-flex mb-2 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                  <SpkButton
                                    Buttontype="button"
                                    Buttonvariant="danger-light"
                                    Customclass="btn-sm d-flex align-items-center justify-content-center flex-fill"
                                  >
                                    <i className="ri-google-fill"></i>
                                    <span className="ms-2">Google</span>
                                  </SpkButton>
                                  <SpkButton
                                    Buttontype="button"
                                    Buttonvariant="primary-light"
                                    Customclass="btn-sm d-flex align-items-center justify-content-center flex-fill"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                    <span className="ms-2">Facebook</span>
                                  </SpkButton>
                                  <SpkButton
                                    Buttontype="button"
                                    Buttonvariant="info-light"
                                    Customclass="btn-sm d-flex align-items-center justify-content-center flex-fill"
                                  >
                                    <i className="ri-twitter-x-line"></i>
                                    <span className="ms-2">Twitter</span>
                                  </SpkButton>
                                </div>
                                <Link scroll={false} href="/dashboard">
                                  <Image
                                    fill
                                    src={`${
                                      process.env.NODE_ENV === "production"
                                        ? basePath
                                        : ""
                                    }/assets/images/brand-logos/toggle-logo.png`}
                                    alt="logo"
                                    className="toggle-logo mb-4 pb-2"
                                  />
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Tab.Pane>
                    </Tab.Content>
                  </Card>
                </Tab.Container>
              </Col>
            </div>
          </div>
        </body>
      </html>
    </Fragment>
  );
};

export default page;
