"use client"

import SpkBadge from '@/shared/@spk-reusable-components/reusable-uiElements/spk-badge';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import SpkTooltips from '@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips';
import { allchats, calls, ChatGallery, FileItems, GroupChatData, GroupData, recents, Statusdata } from '@/shared/data/pages/chatappdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Link from 'next/link';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dropdown, Nav, Offcanvas, OffcanvasBody, Tab } from 'react-bootstrap';
import SimpleBar from 'simplebar-react'
import EmojiPicker from 'emoji-picker-react';
import Image from 'next/image';

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {

  const [activeUser, setActiveUser] = useState({
    name: 'Ella Fitzgerald',
    image: '../../assets/images/faces/6.jpg',
    status: 'online',
  });
  const [activeUser1, setActiveUser1] = useState({
    name: 'Art Enthusiasts',
    image: '../../assets/images/faces/8.jpg',
    status: 'online',
  });

  const handleChatClick = (user: any) => {
    setActiveUser({
      name: user.name,
      image: user.image,
      status: user.status,
    });
    setActiveUser1({
      name: user.name,
      image: user.image,
      status: user.status,
    });
  };


  const mainChartWrapperRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => {
    if (mainChartWrapperRef.current) {
      mainChartWrapperRef.current?.classList.add("responsive-chat-open");
    }
  };

  const toggleChat1 = () => {
    if (mainChartWrapperRef.current) {
      mainChartWrapperRef.current?.classList.remove("responsive-chat-open");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState(""); // state for input value
  const pickerRef = useRef(null);

  const handleEmojiClick = (emojiData: any) => {
    // Add the selected emoji to the input field value
    setInputValue((prevValue) => prevValue + emojiData.emoji);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (pickerRef.current && !(pickerRef.current as HTMLElement).contains(event.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Pages-Chat" />

      <Pageheader title="Pages" currentpage="Chat" activepage="Chat" />

      {/* <!-- Page Header Close --> */}

      <div ref={mainChartWrapperRef} className="main-chart-wrapper gap-lg-2 gap-0 mb-2 d-lg-flex">
        <div className="chat-info border">
          <Link aria-label="anchor" href="#!" className="btn btn-secondary btn-icon rounded-circle chat-add-icon"> <i className="ri-add-line"></i> </Link>
          <div className="chat-search p-3 border-bottom">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search Chat" aria-describedby="button-addon01" />
              <SpkButton Buttonvariant='primary' Customclass='' Buttontype="button">
                <i className="ri-search-line"></i>
              </SpkButton>
            </div>
          </div>
          <Tab.Container defaultActiveKey="1">
            <Nav as="ul" className="nav nav-tabs tab-style-2 d-flex flex-nowrap overflow-x-auto" id="myTab1" role="tablist">
              <Nav.Item as="li" className="nav-item flex-fill" role="presentation">
                <Nav.Link eventKey="1" as="button" id="users-tab" data-bs-toggle="tab"
                  data-bs-target="#users-tab-pane" type="button" role="tab"
                  aria-controls="users-tab-pane" aria-selected="true">Chat
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item flex-fill" role="presentation">
                <Nav.Link eventKey="2" as="button" className="text-nowrap" id="groups-tab" data-bs-toggle="tab"
                  data-bs-target="#groups-tab-pane" type="button" role="tab"
                  aria-controls="groups-tab-pane" aria-selected="false">Groups
                  <i className="ri-circle-fill text-success fs-7 align-middle lh-1 ms-1"></i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item flex-fill" role="presentation">
                <Nav.Link as="button" eventKey="3" className="text-nowrap" id="status-tab" data-bs-toggle="tab"
                  data-bs-target="#status-tab-pane" type="button" role="tab"
                  aria-controls="status-tab-pane" aria-selected="false">Status
                  <i className="ri-circle-fill text-danger fs-7 align-middle lh-1 ms-1"></i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item flex-fill ms-auto" role="presentation">
                <Nav.Link as="button" eventKey="4" className="w-100" id="call-tab" data-bs-toggle="tab"
                  data-bs-target="#call-tab-pane" type="button" role="tab"
                  aria-controls="call-tab-pane" aria-selected="false">Call
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="border-top" id="myTabContent">
              <Tab.Pane eventKey="1" className=" border-0 chat-users-tab" id="users-tab-pane"
                role="tabpanel" aria-labelledby="users-tab" tabIndex={0}>
                <SimpleBar className="list-unstyled mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">
                  <ul className="list-unstyled mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">
                    <li className="pb-0">
                      <p className="text-muted fs-11 fw-medium mb-2 op-7">Active Chats</p>
                    </li>
                    {recents.map((idx) => (
                      <li className={`checkforactive ${activeUser.name === idx.name ? 'active chat-msg-unread' : 'chat-inactive'}`} key={Math.random()} onClick={() => handleChatClick(idx)}  >
                        <Link href="#!" scroll={false} >
                          <div className="d-flex align-items-top">
                            <div className="me-1 lh-1">
                              <span className={`avatar avatar-md online me-2 p-1 border border-secondary avatar-rounded ${idx.status === 'online' ? 'online' : 'offline'} `}>
                                <Image width={40} height={40} src={idx.image} alt="img" />
                              </span>
                            </div>
                            <div className="flex-fill" onClick={toggleChat}>
                              <p className="mb-0 fw-medium">
                                {idx.name} <span className="float-end text-muted fw-normal fs-11">{idx.time}</span>
                              </p>
                              <p className={`fs-12 mb-0 ${idx.chatMsgTyping ? 'chat-msg-typing' : ''} `}>
                                <span className="chat-msg text-truncate">{idx.message}</span>

                                {idx.unReadMsgStatus ?
                                  <SpkBadge variant='info' Customclass="rounded-pill float-end">{idx.unReadMsgCount}</SpkBadge>
                                  :
                                  <span className="chat-read-icon float-end align-middle"><i className="ti ti-checks"></i></span>
                                }

                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                    <li className="pb-0">
                      <p className="text-muted fs-11 fw-medium mb-2">All Chats</p>
                    </li>
                    {allchats.map((idx) => (
                      <li className={`checkforactive ${activeUser.name === idx.name ? 'active chat-msg-unread' : 'chat-inactive'}`} key={Math.random()} onClick={() => handleChatClick(idx)} >
                        <Link href="#!" scroll={false} >
                          <div className="d-flex align-items-top">
                            <div className="me-1 lh-1">
                              <span className={`avatar avatar-md me-2 p-1 border border-secondary avatar-rounded ${idx.status === 'online' ? 'online' : 'offline'}`}>
                                <Image width={40} height={40} src={idx.image} alt="img" />
                              </span>
                            </div>
                            <div className="flex-fill" onClick={toggleChat}>
                              <p className="mb-0 fw-medium">
                                {idx.name} <span className="float-end text-muted fw-normal fs-11">{idx.time}</span>
                              </p>
                              <p className="fs-12 mb-0">
                                <span className="chat-msg text-truncate">{idx.message}</span>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SimpleBar>
              </Tab.Pane>
              <Tab.Pane eventKey="2" className="border-0 chat-groups-tab" id="groups-tab-pane"
                role="tabpanel" aria-labelledby="groups-tab" tabIndex={0}>
                <SimpleBar className="list-unstyled mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">
                  <ul className="list-unstyled mb-0 mt-2 ">
                    <li className="pb-0">
                      <p className="text-muted fs-11 fw-medium mb-1 op-7">MY CHAT GROUPS</p>
                    </li>
                    {GroupData.map((idx) => (
                      <li key={Math.random()} >
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-0 fw-medium">
                              <i className={`ri-checkbox-blank-circle-fill lh-1 text-${idx.bg1} me-1 fs-8 align-middle`}></i>{idx.name}
                              <SpkBadge Customclass={`bg-${idx.bg}-transparent ms-1`}>{idx.online}</SpkBadge>
                            </p>
                          </div>
                          <div className="avatar-list-stacked my-auto">
                            {idx.images.map((idx1) => (
                              <span className="avatar avatar-sm avatar-rounded" key={Math.random()} >
                                <Image height={28} width={28} src={idx1} alt="img" />
                              </span>
                            ))}
                            <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                              href="#!;">
                              {idx.number}
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul className="list-unstyled mb-0 mt-2 ">
                    <li className="pb-0">
                      <p className="text-muted fs-11 fw-medium mb-1 op-7">GROUP CHATS</p>
                    </li>
                    {GroupChatData.map((idx) => (
                      <li className={`checkforactive ${activeUser1.name === idx.name ? 'active chat-msg-unread' : 'chat-inactive'}`} key={Math.random()} onClick={() => handleChatClick(idx)}>
                        <Link href="#!" scroll={false}>
                          <div className="d-flex align-items-top">
                            <div className="me-1 lh-1">
                              <span className={`avatar avatar-md me-2 p-1 border border-secondary avatar-rounded ${idx.status === 'online' ? 'online' : 'offline'}`}>
                                <Image width={40} height={40} src={idx.image} alt="img" />
                              </span>
                            </div>
                            <div className="flex-fill" onClick={toggleChat}  >
                              <p className="mb-0 fw-medium">
                                {idx.name} <span className="float-end text-muted fw-normal fs-11">{idx.time}</span>
                              </p>
                              <p className={`fs-12 mb-0 ${idx.class1}`}>
                                <span className={idx.class2}>{idx.message}</span>
                                {idx.name1 === "Kin :" &&
                                  <span className="chat-read-icon float-end align-middle"><i className="ri-check-double-fill"></i></span>
                                }
                                {idx.badge &&
                                  <span className="badge bg-info rounded-circle float-end">{idx.badge}</span>
                                }
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SimpleBar>
              </Tab.Pane>
              <Tab.Pane eventKey="3" className="border-0 chat-status-tab py-3 px-3" id="status-tab-pane" role="tabpanel"
                aria-labelledby="status-tab" tabIndex={0}>
                <SimpleBar>
                  <ul className="list-unstyled mb-0 chat-status-tab">
                    {Statusdata.map((status) => (
                      <li key={status.id} className="mb-3">
                        <div className="d-flex gap-2 align-items-center">
                          <span className="avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed">
                            <Image width={40} height={40} src={status.imageSrc} alt={status.name} />
                          </span>
                          <li className="mb-3">
                            {status.yourStatus && (
                              <p className="text-muted fs-11 fw-medium mb-2 op-7">YOUR STATUS</p>
                            )}
                          </li>

                          <div className="fw-semibold">{status.name}</div>
                          <p className="mb-0 text-muted fs-12">
                            <i className="ri-time-line lh-1 me-1"></i> {status.time}
                          </p>
                          <li className="mb-3">
                            {status.newStatus && (
                              <p className="text-muted fs-11 fw-medium mb-2 op-7">NEW STATUS</p>
                            )}
                          </li>
                          {status.views !== undefined && (
                            <div className="ms-auto">
                              <span className="mb-0 text-muted fs-12">
                                <i className="ri-eye-line lh-1 me-1"></i> {status.views}
                              </span>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </SimpleBar>
              </Tab.Pane>
              <Tab.Pane eventKey="4" className="fade border-0 call-tab" id="call-tab-pane" role="tabpanel"
                aria-labelledby="call-tab" tabIndex={0}>
                <SimpleBar>
                  <ul className="list-unstyled mb-0 mt-2 call-tab"  >
                    {calls.map((idx) => (
                      <li key={Math.random()}>
                        <div className="d-flex align-items-center">
                          <div className="me-1 lh-1">
                            <span className="avatar avatar-md online me-2 avatar-rounded p-1 border border-secondary">
                              <Image width={40} height={40} src={idx.image} alt="img" />
                            </span>
                          </div>
                          <div className="flex-fill my-auto">
                            <p className="mb-0 fw-semibold">
                              {idx.name}
                              <span className={idx.callsatus}><i className={idx.upDown}></i></span>
                            </p>
                            <p className="fs-12 mb-0">
                              <span className="text-muted text-truncate">{idx.time}</span>
                            </p>
                          </div>
                          <div className="">
                            <SpkButton Buttonvariant={idx.videoCall ? 'success-light' : 'primary-light'} Customclass='btn-sm btn-icon' Buttontype="button">
                              <i className={idx.videoCall ? idx.videoCall : 'ti ti-phone'}></i>
                            </SpkButton>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </SimpleBar>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="main-chat-area border">
          <div className="d-flex align-items-center border-bottom main-chat-head flex-wrap p-3 gap-2">
            <span className={`avatar avatar-md online chatstatusperson me-2 lh-1 p-1 border border-secondary avatar-rounded ${activeUser.status === 'online' ? 'online' : 'offline'}`}>
              <Image fill className="chatimageperson" src={activeUser.image} alt="img" />
            </span>
            <div className="flex-fill">
              <p className="mb-0 fw-semibold fs-15">
                <Link href="#!" scroll={false} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="chatnameperson responsive-userinfo-open" onClick={handleShow}  >{activeUser.name}</Link>
              </p>
              <p className="text-muted mb-0 chatpersonstatus fs-12">{activeUser.status}</p>
            </div>
            <div className="d-flex flex-wrap rightIcons gap-2">
              <SpkTooltips placement="top" title="Call">
                <Link href="#!" scroll={false} className="btn btn-icon btn-secondary my-0 btn-sm rounded-circle" data-bs-toggle="tooltip"><i className="ti ti-phone"></i> </Link>
              </SpkTooltips>
              <SpkTooltips placement="top" title="Video">
                <Link href="#!" scroll={false} className="btn btn-icon btn-success my-0 d-none d-sm-block btn-sm rounded-circle" data-bs-toggle="tooltip"><i className="ti ti-video"></i> </Link>
              </SpkTooltips>
              <button aria-label="button" type="button" className="btn btn-icon btn-primary btn-sm rounded-circle responsive-userinfo-open"> <i className="ti ti-user-circle" id="responsive-chat-close"></i> </button>
              <SpkDropdown Togglevariant="info" Size='sm' Customclass="btn-icon rounded-circle btn-wave waves-light waves-effect waves-light" Icon={true} IconClass='ti ti-dots-vertical' Id="navbarScrollingDropdown"
                Customtoggleclass="nav-link dropdown-toggle no-caret" Menulabel="navbarScrollingDropdown">
                <Dropdown.Item as="li" className="dropdown-item"><i className="ri-user-3-line me-1"></i>Profile</Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><i className="ri-format-clear me-1"></i>Clear Chat</Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><i className="ri-user-unfollow-line me-1"></i>Delete User</Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><i className="ri-user-forbid-line me-1"></i>Block User</Dropdown.Item>
                <Dropdown.Item as="li" className="dropdown-item"><i className="ri-error-warning-line me-1"></i>Report</Dropdown.Item>
              </SpkDropdown>
              <SpkButton Buttonvariant='primary' aria-label="button" Buttontype="button" Size='sm'
                Customclass="btn-icon rounded-circle my-0 responsive-chat-close" onClickfunc={toggleChat1}>
                <i className="ri-close-line"></i>
              </SpkButton>
            </div>
          </div>
          <SimpleBar>
            <div className="chat-content" id="main-chat-content">
              <ul className="list-unstyled">
                <li className="chat-day-label">
                  <span>Today</span>
                </li>
                <li className="chat-item-start">
                  <div className="chat-list-inner">
                    <div className="chat-user-profile">
                      <span className="avatar avatar-md online chatstatusperson p-1 border border-secondary avatar-rounded">
                        <Image width={40} height={40} className="chatimageperson" src={activeUser.image} alt="img" />
                      </span>
                    </div>
                    <div className="ms-3">
                      <div className="main-chat-msg">
                        <div>
                          <p className="mb-0">Hey! &#128522; Have you tried that new restaurant in town? I heard their biryani is fantastic!</p>
                        </div>
                      </div>
                      <span className="chatting-user-info mt-1">
                        <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">Today, 10:20 PM</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="chat-item-end">
                  <div className="chat-list-inner">
                    <div className="me-3">
                      <div className="main-chat-msg">
                        <div>
                          <p className="mb-0">Oh, hey! &#128516; I've been meaning to go! I'm free this weekend, maybe we can check it out together?</p>
                        </div>
                      </div>
                      <span className="chatting-user-info mt-1">
                        <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i className="ti ti-checks"></i></span>Today, 11:50 PM</span> You
                      </span>
                    </div>
                    <div className="chat-user-profile">
                      <span className="avatar avatar-md online p-1 border border-secondary avatar-rounded">
                        <Image width={40} height={40} src="../../assets/images/faces/9.jpg" alt="img" />
                      </span>
                    </div>
                  </div>
                </li>
                <li className="chat-item-start">
                  <div className="chat-list-inner">
                    <div className="chat-user-profile">
                      <span className="avatar avatar-md online chatstatusperson p-1 border border-secondary avatar-rounded">
                        <Image width={40} height={40} className="chatimageperson" src={activeUser.image} alt="img" />
                      </span>
                    </div>
                    <div className="ms-3">
                      <div className="main-chat-msg">
                        <div>
                          <p className="mb-0">Absolutely! I've heard the ambience is great too. Let's decide on a time!</p>
                        </div>
                      </div>
                      <span className="chatting-user-info mt-1">
                        <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">Today, 11:51 PM</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="chat-item-end">
                  <div className="chat-list-inner">
                    <div className="me-3">
                      <div className="main-chat-msg">
                        <div className="">
                          <p className="mb-0">How about Saturday afternoon? I can pick you up around 3 PM. &#127881;</p>
                        </div>
                      </div>
                      <span className="chatting-user-info mt-1">
                        <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i className="ti ti-checks"></i></span>Today, 11:52 PM</span> You
                      </span>
                    </div>
                    <div className="chat-user-profile">
                      <span className="avatar avatar-md online p-1 border border-secondary avatar-rounded">
                        <Image width={40} height={40} src="../../assets/images/faces/9.jpg" alt="img" />
                      </span>
                    </div>
                  </div>
                </li>
                <li className="chat-item-start">
                  <div className="chat-list-inner">
                    <div className="chat-user-profile">
                      <span className="avatar avatar-md online chatstatusperson p-1 border border-secondary avatar-rounded">
                        <Image width={40} height={40} className="chatimageperson" src={activeUser.image} alt="img" />
                      </span>
                    </div>
                    <div className="ms-3">
                      <div className="main-chat-msg">
                        <div>
                          <p className="mb-0">Sounds perfect! Can't wait to try their food. &#127830;</p>
                        </div>
                      </div>
                      <span className="chatting-user-info mt-1">
                        <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">Today, 11:55 PM</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="chat-item-end">
                  <div className="chat-list-inner">
                    <div className="me-3">
                      <div className="main-chat-msg">
                        <div className="">
                          <p className="mb-0">Great! I'll text you the details later. Looking forward to it! &#128241;</p>
                        </div>
                      </div>
                      <span className="chatting-user-info mt-1">
                        <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i className="ti ti-checks"></i></span>Today, 11:56 PM</span> You
                      </span>
                    </div>
                    <div className="chat-user-profile">
                      <span className="avatar avatar-md online p-1 border border-secondary avatar-rounded">
                        <Image width={40} height={40} src="../../assets/images/faces/9.jpg" alt="img" />
                      </span>
                    </div>
                  </div>
                </li>
                <li className="chat-item-start">
                  <div className="chat-list-inner">
                    <div className="chat-user-profile">
                      <span className="avatar avatar-md online p-1 border border-secondary avatar-rounded">
                        <Image width={40} height={40} className="chatimageperson" src={activeUser.image} alt="img" />
                      </span>
                    </div>
                    <div className="ms-3">
                      <div className="main-chat-msg">
                        <div>
                          <p className="mb-0">Awesome! Talk later. &#128516;</p>
                        </div>
                      </div>
                      <span className="chatting-user-info mt-1 chatnameperson">
                        {activeUser.name} <span className="msg-sent-time">Today, 11:57 PM</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </SimpleBar>
          <div className="chat-footer">
            <Link scroll={false} aria-label="anchor" className="btn btn-secondary-light me-2 btn-icon btn-send" href="#!">
              <i className="ri-attachment-2"></i>
            </Link>
            <Link scroll={false} aria-label="anchor" className="btn btn-icon me-2 btn-success emoji-picker" href="#!">
              <i className="ri-emotion-line" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowPicker((prev) => !prev) }}></i>
            </Link>
            {showPicker && (
              <div ref={pickerRef} style={{ position: 'absolute', zIndex: 1000, bottom: '3.5rem' }}>
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
            <input className="form-control chat-message-space" placeholder="Type your message here..." type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Link scroll={false} aria-label="anchor" className="btn btn-primary ms-2 btn-icon btn-send" href="#!">
              <i className="ri-send-plane-2-line"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- Start::chat user details offcanvas --> */}

      <Offcanvas className="offcanvas-end" placement='end' show={show} onHide={handleClose} tabIndex={-1} id="offcanvasRight">
        <OffcanvasBody>
          <SpkButton Buttontype="button" Buttonvariant='outline-light' Size='sm' Customclass="btn-icon border float-end mb-3" data-bs-dismiss="offcanvas"
            aria-label="Close" onClickfunc={handleClose} ><i className="ri-close-line lh-1 align-center"></i></SpkButton>
          <div className="chat-user-details" id="chat-user-details">
            <div className="text-center mb-4 p-3 bg-primary-transparent rounded">
              <span className="avatar avatar-rounded online avatar-xxl me-2 mb-3 chatstatusperson p-1 border border-secondary">
                <Image fill className="chatimageperson" src={activeUser.image} alt="img" />
              </span>
              <p className="mb-1 fs-15 fw-semibold text-dark lh-1 chatnameperson">{activeUser.name}</p>
              <p className="fs-12 text-muted"><span className="chatnameperson">ellafitzgerald99</span>@gmail.com</p>
              <p className="text-center mb-0">
                <SpkButton Buttonvariant='primary' Buttontype="button" aria-label="button" Customclass="btn btn-icon rounded-pill btn-primary"><i
                  className="ri-phone-line"></i></SpkButton>
                <SpkButton Buttonvariant='secondary' Buttontype="button" aria-label="button" Customclass="btn btn-icon rounded-pill btn-secondary ms-2"><i
                  className="ri-video-add-line"></i></SpkButton>
                <SpkButton Buttonvariant='success' Buttontype="button" aria-label="button" Customclass="btn btn-icon rounded-pill btn-success ms-2"><i
                  className="ri-chat-1-line"></i></SpkButton>
              </p>
            </div>
            <div className="mb-2">
              <div className="fw-semibold mb-4 fs-15">Photos & Media
                <span className="badge bg-primary-transparent rounded-circle ms-1">22</span>
                <span className="float-end fs-11"><a href="javascript:void(0);" className="link-primary text-underline"><u>View All</u></a></span>
              </div>
              <ChatGallery />
            </div>
            <div>
              <div className="fw-semibold mb-4 fs-15">Shared Files
                <SpkBadge variant='primary-transparent' Customclass="rounded-circle ms-1">4</SpkBadge>
                <span className="float-end fs-11"><Link scroll={false} href="#!" className="link-primary text-underline"><u>View All</u></Link></span>
              </div>
              <ul className="list-group shared-files">
                {FileItems.map((item) => (
                  <li key={item.id} className="list-group-item d-flex align-items-center">
                    <div className="me-2">
                      <span className={`avatar avatar-md ${item.bgClass} avatar-rounded`}>
                        <i className={`ti ${item.icon}`}></i>
                      </span>
                    </div>
                    <div className="flex-fill">
                      <p className="fs-12 fw-semibold mb-0">{item.name}</p>
                      <p className="mb-0 text-muted fs-11">{item.date}</p>
                    </div>
                    <div className="fs-18">
                      <Link scroll={false} aria-label="download" href={item.downloadLink}>
                        <i className="ti ti-download text-muted"></i>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </OffcanvasBody>
      </Offcanvas>

    </Fragment>
  )
}

export default Chat;
