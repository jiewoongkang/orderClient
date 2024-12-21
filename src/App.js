// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedFood, setSelectedFood] = useState({
    name: "토마토 펜네 파스타",
    quantity: 1,
    price: 3000,
  });

  const notify = (msg) => {
    toast(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleFoodSelect = (food) => {
    setSelectedFood({
      name: food.name,
      quantity: selectedFood.quantity,
      price: food.price,
    });
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    console.log("주문", selectedFood);

    try {
      const response = await fetch("http://localhost:8080/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedFood),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      notify(data.msg);
    } catch (error) {}
  };

  return (
    <div className="App">
      <div id="wrap">
        <div className="cont">
          <div className="ad_cont">
            <div className="img_area"></div>
            <div className="txt_area">
              <h1>
                <strong>BURNCH</strong>LUNCH SET
              </h1>
              <div className="menu_list">
                <ul>
                  <li>
                    <div className="en">Baguette & Salad</div>
                    <div className="kr">바게트 & 샐러드</div>
                  </li>
                  <li>
                    <div className="en">Pasta or Risotto</div>
                    <div className="kr">파스타 or 리조또 메뉴 중 택1</div>
                  </li>
                  <li>
                    <div className="en">Coffee/Tea/Coke/Sprite</div>
                    <div className="kr">커피/차/콜라/스프라이트 택1</div>
                  </li>
                </ul>
                <p>
                  런치 세트는 평일 런치시간에만 이용 가능하며, <br />
                  주말 공휴일에는 이용이 불가능합니다
                </p>

                <div className="btn_area">
                  <button typ="button" className="btn">
                    메뉴보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cont on main">
          <div className="d-flex">
            <div className="lnb_area">
              <div className="top_area">
                <div className="logo"></div>
                <div className="lnb">
                  <ul>
                    <li className="on">
                      <a>
                        샐러드
                        <br />
                        &수프
                      </a>
                    </li>

                    <li>
                      <a>
                        매장
                        <br />
                        정보
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btm_area">
                <div className="language">
                  <button type="button" className="language_open">
                    <span>Language</span>
                  </button>
                  <div className="language_popup">
                    <div className="tit">Language</div>
                    <ul>
                      <li className="select">
                        <button type="button">한국어</button>
                      </li>
                      <li>
                        <button type="button">English</button>
                      </li>
                      <li>
                        <button type="button" className="noto">
                          日本語
                        </button>
                      </li>
                      <li>
                        <button type="button" className="noto">
                          中文
                        </button>
                      </li>
                    </ul>
                    <button type="button" className="language_popup_close">
                      언어선택 팝업닫기
                    </button>
                  </div>
                </div>
                <div className="call">
                  <button type="button" className="btn_call">
                    <span>직원호출</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="cont_area">
              <div className="top_area">
                <div className="right_area">
                  <button type="button" className="select_table">
                    주문 클라이언트
                  </button>
                </div>
                <div className="tab_menu">
                  <ul>
                    <li className="on">
                      <button type="button">
                        {selectedFood.name || "음식을 선택하세요"}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu_list">
                <ul>
                  <li>
                    <div className="img_area">
                      {/* <img src="/images/goods/tomatoPennePasta.jpg" alt="" /> */}
                      <img src="/images/goods/tomatoPennePasta.jpg" alt="" />

                      <button
                        type="button"
                        className="view_more"
                        onClick={() =>
                          handleFoodSelect({
                            name: "토마토 펜네 파스타",
                            quantity: 1,
                            price: 3000,
                          })
                        }
                      >
                        확대보기
                      </button>
                    </div>
                    <div className="txt_area">
                      <div className="name">
                        토마토 펜네 파스타
                        <span className="badge white_bg">NEW</span>
                        <span className="badge orange_bg">인기</span>
                      </div>
                      <div className="txt">
                        토마토 소스를 곁들인 펜네 파스타
                      </div>
                      <div className="price">
                        <strong>3,000</strong> 원
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="img_area">
                      <img src="/images/goods/burrataSalad.jpg" alt="" />
                      <button
                        type="button"
                        className="view_more"
                        onClick={() =>
                          handleFoodSelect({
                            name: "부라타 치즈 샐러드",
                            quantity: 1,
                            price: 4000,
                          })
                        }
                      >
                        확대보기
                      </button>
                    </div>
                    <div className="txt_area">
                      <div className="name">
                        부라타 치즈 샐러드
                        <span className="badge sky_bg">추천</span>
                      </div>
                      <div className="txt">
                        상큼하고 새콤한 부라타 토마토 치즈 샐러드
                      </div>
                      <div className="price">
                        <span className="sale">4,000 원</span>
                        <strong>4,000</strong> 원
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img_area">
                      <img src="/images/goods/figSalad.jpg" alt="" />
                      <button
                        type="button"
                        className="view_more"
                        onClick={() =>
                          handleFoodSelect({
                            name: "무화과 샐러드",
                            quantity: 1,
                            price: 3300,
                          })
                        }
                      >
                        확대보기
                      </button>
                    </div>
                    <div className="txt_area">
                      <div className="name">
                        무화과 샐러드
                        <span className="badge type2 white_bg">NEW</span>
                        <span className="badge type2 orange_bg">인기</span>
                        <span className="badge type2 sky_bg">추천</span>
                      </div>
                      <div className="txt">
                        무화과가 잔뜩 들어간 상큼한 샐러드
                      </div>
                      <div className="price">
                        <strong>3,300</strong> 원
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img_area">
                      <img src="/images/goods/chickenTender.jpg" alt="" />
                      <button
                        type="button"
                        className="view_more"
                        onClick={() =>
                          handleFoodSelect({
                            name: "치킨 텐더",
                            quantity: 1,
                            price: 5000,
                          })
                        }
                      >
                        확대보기
                      </button>
                    </div>
                    <div className="txt_area">
                      <div className="name">
                        치킨 텐더
                        <span className="badge type2 white_bg">NEW</span>
                        <span className="badge type2 orange_bg">인기</span>
                        <span className="badge type2 sky_bg">추천</span>
                      </div>
                      <div className="txt">
                        통안심살이 촉촉 크리스피 텐더 치킨
                      </div>
                      <div className="price">
                        <strong>5,000</strong> 원
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img_area">
                      <img src="/images/goods/gimbap.jpg" alt="" />
                      <button
                        type="button"
                        className="view_more"
                        onClick={() =>
                          handleFoodSelect({
                            name: "김밥",
                            quantity: 1,
                            price: 4000,
                          })
                        }
                      >
                        확대보기
                      </button>
                    </div>
                    <div className="txt_area">
                      <div className="name">
                        김밥
                        <span className="badge sky_bg">추천</span>
                      </div>
                      <div className="txt">신선한 재료를 가득 담은 김밥</div>
                      <div className="price">
                        <span className="sale">4,000 원</span>
                        <strong>6,000</strong> 원
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img_area">
                      <img src="/images/goods/redPastaStew.jpg" alt="" />
                      <button
                        type="button"
                        className="view_more"
                        onClick={() =>
                          handleFoodSelect({
                            name: "토마토 파스타",
                            quantity: 1,
                            price: 7000,
                          })
                        }
                      >
                        확대보기
                      </button>
                    </div>
                    <div className="txt_area">
                      <div className="name">
                        토마토 파스타
                        <span className="badge type2 white_bg">NEW</span>
                        <span className="badge type2 orange_bg">인기</span>
                        <span className="badge type2 sky_bg">추천</span>
                      </div>
                      <div className="txt">
                        매콤한 레드 소스를 더한 국물 파스타
                      </div>
                      <div className="price">
                        <strong>7,000</strong> 원
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img_area">
                      <img src="/images/goods/stirFriedCrabCurry.jpg" alt="" />
                      <button
                        type="button"
                        className="view_more"
                        onClick={() =>
                          handleFoodSelect({
                            name: "푸팟퐁커리",
                            quantity: 1,
                            price: 7000,
                          })
                        }
                      >
                        확대보기
                      </button>
                    </div>
                    <div className="txt_area">
                      <div className="name">
                        푸팟퐁커리
                        <span className="badge type2 white_bg">NEW</span>
                        <span className="badge type2 orange_bg">인기</span>
                        <span className="badge type2 sky_bg">추천</span>
                      </div>
                      <div className="txt">튀긴 게와 코코넛밀크 </div>
                      <div className="price">
                        <strong>7,000</strong> 원
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="shopping_cart">
                <h1>장바구니</h1>
                <div className="top_txt">전망이 아름다운 창가측 테이블</div>
                <div className="cart_list">
                  <ul>
                    <li>
                      <div className="tit">무화과 샐러드</div>
                      <div className="d-flex">
                        <div className="item_input_wrap">
                          <div className="item_input">
                            <input type="number" value="2" />
                            <button
                              type="button"
                              className="item_minus"
                            ></button>
                            <button
                              type="button"
                              className="item_plus"
                            ></button>
                          </div>
                        </div>
                        <div className="price">
                          <strong>6,600</strong> 원
                        </div>
                      </div>
                      <button type="button" className="cart_list_delete">
                        삭제
                      </button>
                    </li>
                    <li>
                      <div className="tit">무화과 샐러드</div>
                      <div className="d-flex">
                        <div className="item_input_wrap">
                          <div className="item_input">
                            <input type="number" value="2" />
                            <button
                              type="button"
                              className="item_minus"
                            ></button>
                            <button
                              type="button"
                              className="item_plus"
                            ></button>
                          </div>
                        </div>
                        <div className="price">
                          <strong>6,600</strong> 원
                        </div>
                      </div>
                      <button type="button" className="cart_list_delete">
                        삭제
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="total">
                  <div className="number">총 2 개</div>
                  <div className="price">
                    <strong>9,900</strong> 원
                  </div>
                </div>

                <div className="btn_area">
                  <button type="button" className="cart_close">
                    <span>닫기</span>
                  </button>
                  <button
                    type="button"
                    className="btn_order"
                    onclick="popup_open('.payment');"
                  >
                    <span>주문하기</span>
                  </button>
                </div>
              </div>

              <div className="order_cart">
                {/* <button
                  type="button"
                  className="btn_order_open"
                  onclick="popup_open('.order_history');"
                >
                  <span className="tit">주문내역</span>
                </button> */}
                <button
                  type="button"
                  className="btn_cart_open"
                  onClick={handleOrder}
                >
                  <span className="tit">주문하기</span>
                  {/* <span className="number">3</span> */}
                </button>
              </div>
            </div>
          </div>

          <div className="view_detail_popup popup">
            <div className="view_detail_cont">
              <div className="info_area">
                <div className="top_area">
                  <div className="img_area">
                    <div className="inner">
                      <img src="./images/detail_view.png" alt="" />
                    </div>
                  </div>
                  <div className="info_txt">
                    <div className="name">
                      무화과 샐러드
                      <span className="badge white_bg">NEW</span>
                    </div>
                    <div className="origin">원산지 : 한국</div>
                    <div className="txt">
                      마늘과 후추로 마리네이드한 닭다리살과 산뜻하고 선명한
                      오리엔탈 드레싱의 조화로 풍미를 더했습니다. 참깨 드레싱이
                      어우러진 매콤달콤의 조화로운 샐러드 입니다.
                    </div>
                  </div>
                </div>
                <div className="btm_area">
                  <div className="item_input_wrap">
                    <div className="item_input">
                      <input type="number" />
                      <button type="button" className="item_minus"></button>
                      <button type="button" className="item_plus"></button>
                    </div>
                  </div>
                  <div className="total_price">
                    <div className="tit">합계금액</div>
                    <div className="price">
                      <strong>3,300</strong> 원
                    </div>
                  </div>
                </div>
              </div>
              <div className="topping_area">
                <div className="inner">
                  <h1>추가 토핑</h1>
                  <div className="topping_list">
                    <ul>
                      <li className="select">
                        <div className="name">무화과토핑 300g</div>
                        <div className="price">
                          <strong>2000</strong>원
                        </div>
                        <div className="item_input type_2">
                          <input type="number" value="1" />
                          <button type="button" className="item_minus"></button>
                          <button type="button" className="item_plus"></button>
                        </div>
                      </li>
                      <li>
                        <div className="name">무화과토핑 300g</div>
                        <div className="price">
                          <strong>2000</strong>원
                        </div>
                        <div className="item_input type_2">
                          <input type="number" value="1" />
                          <button type="button" className="item_minus"></button>
                          <button type="button" className="item_plus"></button>
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          참치 샐러드와 참깨 드레싱 300g
                        </div>
                        <div className="price">
                          <strong>2000</strong>원
                        </div>
                        <div className="item_input type_2">
                          <input type="number" value="1" />
                          <button type="button" className="item_minus"></button>
                          <button type="button" className="item_plus"></button>
                        </div>
                      </li>
                      <li className="sold_out">
                        <div className="name">무화과토핑 300g</div>
                        <div className="price">
                          <strong>2000</strong>원
                        </div>
                        <div className="item_input type_2">
                          <input type="number" value="1" />
                          <button type="button" className="item_minus"></button>
                          <button type="button" className="item_plus"></button>
                        </div>
                        <div className="sold_out_txt">
                          <span>
                            Sold <br />
                            Out
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h1>함께하면 좋은 음식</h1>
                  <div className="topping_list">
                    <ul>
                      <li className="select">
                        <div className="name">무화과토핑 300g</div>
                        <div className="price">
                          <strong>2000</strong>원
                        </div>
                        <div className="item_input type_2">
                          <input type="number" value="1" />
                          <button type="button" className="item_minus"></button>
                          <button type="button" className="item_plus"></button>
                        </div>
                      </li>
                      <li>
                        <div className="name">무화과토핑 300g</div>
                        <div className="price">
                          <strong>2000</strong>원
                        </div>
                        <div className="item_input type_2">
                          <input type="number" value="1" />
                          <button type="button" className="item_minus"></button>
                          <button type="button" className="item_plus"></button>
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          참치 샐러드와 참깨 드레싱 300g
                        </div>
                        <div className="price">
                          <strong>2000</strong>원
                        </div>
                        <div className="item_input type_2">
                          <input type="number" value="1" />
                          <button type="button" className="item_minus"></button>
                          <button type="button" className="item_plus"></button>
                        </div>
                      </li>
                      <li className="sold_out">
                        <div className="name">무화과토핑 300g</div>
                        <div className="price">
                          <strong>2000</strong>원
                        </div>
                        <div className="item_input type_2">
                          <input type="number" value="1" />
                          <button type="button" className="item_minus"></button>
                          <button type="button" className="item_plus"></button>
                        </div>
                        <div className="sold_out_txt">
                          <span>
                            Sold <br />
                            Out
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="btn_area">
                  <button type="button" className="basic-btn01 btn-gray-bd">
                    이전
                  </button>
                  <button type="button" className="btn-cart">
                    <span>장바구니 담기</span>
                  </button>
                </div>
              </div>
              <button type="button" className="popup_close"></button>
            </div>
          </div>

          <div className="view_detail_popup2 popup">
            <div className="view_detail_cont2">
              <div className="img_area">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src="./images/detail_view2.png" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src="./images/detail_view2.png" alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
              <div className="right_area">
                <div className="txt_area">
                  <div className="name">
                    무화과 샐러드
                    <span className="badge white_bg">NEW</span>
                  </div>
                  <div className="price">
                    <strong>3,300</strong> 원
                  </div>
                  <div className="origin">원산지 : 한국</div>
                  <div className="txt">
                    마늘과 후추로 마리네이드한 닭다리살과 산뜻하고 선명한
                    오리엔탈 드레싱의 조화로 풍미를 더했습니다.
                  </div>
                </div>
                <div className="item_input_wrap">
                  <div className="item_input">
                    <input type="number" value="2" />
                    <button type="button" className="item_minus"></button>
                    <button type="button" className="item_plus"></button>
                  </div>
                </div>
                <div className="btn_area">
                  <button type="button" className="btn-cart">
                    <span>장바구니 담기</span>
                  </button>
                </div>
              </div>
              <button type="button" className="popup_close"></button>
            </div>
          </div>

          <div className="order_history popup">
            <div className="order_history_cont">
              <div className="inner">
                <div className="title_area">
                  <h1>주문내역</h1>
                  <p>전망이 아름다운 창가측 테이블</p>
                </div>
                <table>
                  <colgroup>
                    <col style={{ width: "6.7%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "22.5%" }} />
                    <col style={{ width: "12.8%" }} />
                    <col style={{ width: "19%" }} />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" colspan="2">
                        주문시각
                      </th>
                      <th scope="col">상품명</th>
                      <th scope="col">수량</th>
                      <th scope="col">상품금액</th>
                      <th scope="col">주문금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="num blue_bg">2</span>
                      </td>
                      <td className="last_order">
                        마지막주문
                        <div className="time">오전 12 : 18 : 54</div>
                      </td>
                      <td>무화과 샐러드</td>
                      <td className="txt_c">2개</td>
                      <td className="txt_c">
                        <div className="price">
                          <strong>5,000</strong> 원
                        </div>
                      </td>
                      <td className="txt_c">
                        <div className="price">
                          <strong>5,000</strong> 원
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">
                        <span className="num gray_bg">1</span>
                      </td>
                      <td rowspan="2" className="last_order">
                        이전주문
                        <div className="time">오전 12 : 18 : 54</div>
                      </td>
                      <td className="border_none">새우 알리오 올리오</td>
                      <td className="txt_c border_none">2개</td>
                      <td className="txt_c border_none">
                        <div className="price">
                          <strong>5,000</strong> 원
                        </div>
                      </td>
                      <td className="txt_c border_none">
                        <div className="price">
                          <strong>5,000</strong> 원
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>새우 알리오 올리오</td>
                      <td className="txt_c">2개</td>
                      <td className="txt_c">
                        <div className="price">
                          <strong>5,000</strong> 원
                        </div>
                      </td>
                      <td className="txt_c">
                        <div className="price">
                          <strong>5,000</strong> 원
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="total">
                  <div className="tit">Total</div>
                  <div className="ml-auto">
                    <div className="number">총 3 개</div>
                    <div className="price">
                      <strong>12,000</strong>원
                    </div>
                  </div>
                </div>
                <div className="btm_area">
                  <div className="agree">
                    <input type="checkbox" id="receipt" />
                    <label for="receipt">
                      전자영수증 발급으로 탄소 배출 줄이기
                    </label>
                  </div>
                  <button type="button" className="btn_receipt">
                    영수증 발급
                  </button>
                </div>
                <button type="button" className="popup_close"></button>
              </div>
            </div>
          </div>

          <div className="electronic_receipt popup">
            <div className="electronic_receipt_cont">
              <h1>전자 영수증 발급</h1>
              <p>
                전자영수증을 발급 받을 연락처 또는 <br />
                이메일 주소를 입력하세요.
              </p>
              <div className="list">
                <ul>
                  <li>
                    <div className="tit">휴대폰</div>
                    <div className="tel">
                      <select name="" id="">
                        <option value="#">010</option>
                      </select>
                      <input type="number" placeholder="숫자" />
                    </div>
                  </li>
                  <li>
                    <div className="tit">이메일</div>
                    <div className="email">
                      <input type="text" placeholder="영문 및 숫자" />
                      <span>@</span>
                      <input type="text" placeholder="" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="btn_area">
                <button type="button" className="btn_cancel">
                  취소
                </button>
                <button type="button" className="btn_go">
                  계속 결제 진행
                </button>
              </div>
              <button type="button" className="popup_close"></button>
            </div>
          </div>

          <div className="payment popup">
            <div className="payment_cont">
              <h1>결제 방식 선택</h1>
              <div className="payment_tab">
                <ul>
                  <li className="active">
                    <button type="button">일괄결제</button>
                  </li>
                  <li>
                    <button type="button">
                      상품별 <br />
                      나누어 결제
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      금액별 <br />
                      나누어 결제
                    </button>
                  </li>
                  <li>
                    <button type="button">1 / N 결제</button>
                  </li>
                </ul>
              </div>
              <div className="payment_tab_cont">
                <div className="lump_sum_payment on">
                  <div className="list">
                    <ul>
                      <li className="icon_1">
                        <button type="button">카드결제</button>
                      </li>
                      <li className="icon_2">
                        <button type="button">간편결제</button>
                      </li>
                      <li className="icon_3">
                        <button type="button">현금결제</button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="payment_product">
                  <div className="info_box">
                    <ul>
                      <li>
                        <div className="tit">총 주문금액</div>
                        <div className="price">
                          <strong>28,900</strong> 원
                        </div>
                      </li>
                      <li className="c-blue">
                        <div className="tit">결제잔액</div>
                        <div className="price">
                          <strong>28,900</strong> 원
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="list">
                    <ul>
                      <li className="complete">
                        <div className="name">무화과 샐러드</div>
                        <div className="info">
                          <div className="number">
                            <strong>2</strong> 개
                          </div>
                          <div className="price">
                            <strong>8,900</strong> 원
                          </div>
                        </div>
                        <div className="btn_wrap">
                          <button type="button" className="btn btn_blud_bd">
                            나갈 때 결제
                          </button>
                          <button type="button" className="btn btn_blud_bg">
                            결제하기
                          </button>
                        </div>
                        <span className="complete_txt">결제완료</span>
                      </li>
                      <li>
                        <div className="name">무화과 샐러드</div>
                        <div className="info">
                          <div className="number">
                            <strong>2</strong> 개
                          </div>
                          <div className="price">
                            <strong>8,900</strong> 원
                          </div>
                        </div>
                        <div className="btn_wrap">
                          <button type="button" className="btn btn_blud_bd">
                            나갈 때 결제
                          </button>
                          <button type="button" className="btn btn_blud_bg">
                            결제하기
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="name">무화과 샐러드</div>
                        <div className="info">
                          <div className="number">
                            <strong>2</strong> 개
                          </div>
                          <div className="price">
                            <strong>8,900</strong> 원
                          </div>
                        </div>
                        <div className="btn_wrap">
                          <button type="button" className="btn btn_blud_bd">
                            나갈 때 결제
                          </button>
                          <button type="button" className="btn btn_blud_bg">
                            결제하기
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="name">무화과 샐러드</div>
                        <div className="info">
                          <div className="number">
                            <strong>2</strong> 개
                          </div>
                          <div className="price">
                            <strong>8,900</strong> 원
                          </div>
                        </div>
                        <div className="btn_wrap">
                          <button type="button" className="btn btn_blud_bd">
                            나갈 때 결제
                          </button>
                          <button type="button" className="btn btn_blud_bg">
                            결제하기
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="payment_amount">
                  <div className="payment_amount_cont">
                    <div className="info_box">
                      <div className="left_area">
                        <ul>
                          <li>
                            <div className="tit">총 주문금액</div>
                            <div className="price">
                              <strong>28,900</strong> 원
                            </div>
                          </li>
                          <li className="c-blue">
                            <div className="tit">결제잔액</div>
                            <div className="price">
                              <strong>28,900</strong> 원
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="right_area">
                        <div className="tit">인원</div>
                        <div className="input_area">
                          <input type="number" value="2" />
                          <span>명</span>
                        </div>
                      </div>
                    </div>
                    <div className="list">
                      <ul>
                        <li>
                          <div className="input_area">
                            <input type="text" value="5,000" />
                            <span className="unit">원</span>
                          </div>
                          <button type="button" className="btn btn_blue_bg">
                            결제하기
                          </button>
                          <button type="button" className="btn btn_blue_bd">
                            나갈 때 결제
                          </button>
                        </li>
                        <li className="complete">
                          <div className="input_area">
                            <input type="text" value="5,000" />
                            <span className="unit">원</span>
                          </div>
                          <button type="button" className="btn btn_blue_bg">
                            결제하기
                          </button>
                          <button type="button" className="btn btn_blue_bd">
                            나갈 때 결제
                          </button>
                          <span className="complete_txt">결제완료</span>
                        </li>
                        <li>
                          <div className="input_area">
                            <input type="text" value="5,000" />
                            <span className="unit">원</span>
                          </div>
                          <button type="button" className="btn btn_blue_bg">
                            결제하기
                          </button>
                          <button type="button" className="btn btn_blue_bd">
                            나갈 때 결제
                          </button>
                        </li>
                        <li>
                          <div className="input_area">
                            <input type="text" value="5,000" />
                            <span className="unit">원</span>
                          </div>
                          <button type="button" className="btn btn_blue_bg">
                            결제하기
                          </button>
                          <button type="button" className="btn btn_blue_bd">
                            나갈 때 결제
                          </button>
                        </li>
                        <li className="complete">
                          <div className="input_area">
                            <input type="text" value="5,000" />
                            <span className="unit">원</span>
                          </div>
                          <button type="button" className="btn btn_blue_bg">
                            결제하기
                          </button>
                          <button type="button" className="btn btn_blue_bd">
                            나갈 때 결제
                          </button>
                          <span className="complete_txt">결제완료</span>
                        </li>
                        <li>
                          <div className="input_area">
                            <input type="text" value="5,000" />
                            <span className="unit">원</span>
                          </div>
                          <button type="button" className="btn btn_blue_bg">
                            결제하기
                          </button>
                          <button type="button" className="btn btn_blue_bd">
                            나갈 때 결제
                          </button>
                        </li>
                        <li>
                          <div className="input_area">
                            <input type="text" value="5,000" />
                            <span className="unit">원</span>
                          </div>
                          <button type="button" className="btn btn_blue_bg">
                            결제하기
                          </button>
                          <button type="button" className="btn btn_blue_bd">
                            나갈 때 결제
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="calculator_area">
                    <div className="calculator">
                      <ul>
                        <li>
                          <button type="button">9</button>
                        </li>
                        <li>
                          <button type="button">8</button>
                        </li>
                        <li>
                          <button type="button">7</button>
                        </li>
                        <li>
                          <button type="button">6</button>
                        </li>
                        <li>
                          <button type="button">5</button>
                        </li>
                        <li>
                          <button type="button">4</button>
                        </li>
                        <li>
                          <button type="button">3</button>
                        </li>
                        <li>
                          <button type="button">2</button>
                        </li>
                        <li>
                          <button type="button">1</button>
                        </li>
                        <li>
                          <button type="button" className="black">
                            C
                          </button>
                        </li>
                        <li>
                          <button type="button">0</button>
                        </li>
                        <li>
                          <button type="button" className="delete"></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="payment_n">
                    <div className="info_box">
                      <ul>
                        <li>
                          <div className="tit">총 주문금액</div>
                          <div className="price">
                            <strong>28,900</strong> 원
                          </div>
                        </li>
                        <li className="c-blue">
                          <div className="tit">결제잔액</div>
                          <div className="price">
                            <strong>28,900</strong> 원
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="n_number">
                      <div className="tit">분할 결제 횟수</div>
                      <div className="item_input_wrap">
                        <div className="item_input">
                          <input type="number" value="2" />
                          <button type="button" className="item_minus"></button>
                          <button type="button" className="item_plus"></button>
                        </div>
                      </div>
                    </div>
                    <div className="btm_info">
                      <ul>
                        <li>
                          <div className="tit">미결제액</div>
                          <div className="price">28,900</div>원
                        </li>
                        <li className="c-blue">
                          <div className="tit">2인</div>
                          <div className="ml-auto">
                            <button type="button" className="btn">
                              결제하기
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="popup_close"></button>
            </div>
            <div className="btn_area">
              <button type="button" className="btn_employee_call">
                <span>직원호출</span>
              </button>
              <button type="button" className="direct_payment">
                <span>나갈때 결제</span>
              </button>
            </div>
          </div>

          <div className="staff_call popup">
            <div className="staff_call_cont">
              <div className="title_area">
                <h1>직원호출</h1>
                <p>하위에서 요청하실 항목을 선택해주세요.</p>
              </div>
              <div className="list">
                <ul>
                  <li className="select">
                    <div className="icon">
                      <img src="./images/staff_icon_1.png" alt="" />
                    </div>
                    <div className="name">물</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="1" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_2.png" alt="" />
                    </div>
                    <div className="name">물컵</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_4.png" alt="" />
                    </div>
                    <div className="name">숟가락</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_4.png" alt="" />
                    </div>
                    <div className="name">젖가락</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_5.png" alt="" />
                    </div>
                    <div className="name">냅킨</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_6.png" alt="" />
                    </div>
                    <div className="name">물티슈</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_7.png" alt="" />
                    </div>
                    <div className="name">앞접시</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_8.png" alt="" />
                    </div>
                    <div className="name">맥주잔</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_9.png" alt="" />
                    </div>
                    <div className="name">소주잔</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_10.png" alt="" />
                    </div>
                    <div className="name">앞치마</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_11.png" alt="" />
                    </div>
                    <div className="name">기본안주</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="./images/staff_icon_12.png" alt="" />
                    </div>
                    <div className="name">얼음컵</div>
                    <div className="item_input_wrap">
                      <div className="item_input">
                        <input type="number" value="0" />
                        <button type="button" className="item_minus"></button>
                        <button type="button" className="item_plus"></button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="btn_area">
                <button type="button" className="btn-call">
                  <span>직원만 호출</span>
                </button>
                <button type="button" className="btn-request">
                  <span>요청하기</span>
                </button>
              </div>
              <button type="button" className="popup_close"></button>
            </div>
          </div>

          <div className="s_popup">
            <div className="s_popup_cont">
              <h1>결제 진행</h1>
              <div className="txt_area">
                <p>
                  <strong>리더기</strong> 준비중입니다.
                </p>
              </div>
              <button type="button" className="s_popup_close"></button>
            </div>
          </div>

          <div className="s_popup">
            <div className="s_popup_cont">
              <h1>결제 진행</h1>
              <div className="txt_area">
                <p>
                  카드 <strong>결제</strong>가 완료되었습니다
                </p>
              </div>
              <button type="button" className="s_popup_close"></button>
            </div>
          </div>

          <div className="s_popup">
            <div className="s_popup_cont">
              <h1>1/N 결제 진행</h1>
              <div className="txt_area">
                <p>
                  첫번째 <strong>결제</strong>가 완료되었습니다 <br />
                  두번째 결제를 진행하시겠습니까?
                </p>
              </div>
              <div className="btn_area">
                <button type="button" className="btn btn-gray-bg">
                  결제 그만두기
                </button>
                <button type="button" className="btn btn-blue-bg ml-auto">
                  계속 결제 진행
                </button>
              </div>
            </div>
          </div>

          <div className="s_popup type_2">
            <div className="s_popup_cont">
              <div className="txt_1">
                신용카드를 <br />
                <strong>투입구에</strong> 꽂아주세요
              </div>
              <div className="txt_2">
                결제오류 시, 마그네틱이 아래로 향하게 긁어주세요
              </div>
              <div className="img_area">
                <img src="./images/card_img.png" alt="" />
              </div>
              <button type="button" className="s_popup_close"></button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
