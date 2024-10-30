import { EAuthorName, EMusicType, IAlbum, IAuthor, IMusic } from '@/types/common'

export const listMusics: IMusic[] = [
  {
    id: 1,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FBangKieu%2Fy2mate.com%20-%20Ti%CC%80nh%20%C4%91o%CC%9Bn%20phu%CC%9Bo%CC%9Bng%203%20%20Ba%CC%86%CC%80ng%20Kie%CC%82%CC%80u%20%20Ca%20khu%CC%81c%20ba%CC%82%CC%81t%20hu%CC%89%20nghe%20ma%CC%80%20tha%CC%82%CC%81m.mp3?alt=media&token=899d227b-fd0f-4aca-8fa5-89f85b8b410d',
    name: 'Tình đơn phương',
    author: EAuthorName.BANGKIEU,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCihUgQ-4YP2rya4CnX-BKWyR45Yh--1UagA&s',
  },
  {
    id: 2,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FBangKieu%2FPhu%CC%9Bo%CC%9B%CC%A3ng%20Ho%CC%82%CC%80ng%20-%20Ba%CC%86%CC%80ng%20Kie%CC%82%CC%80u%20%5B%20ezmp3.cc%20%5D.mp3?alt=media&token=fbca08e6-bb4c-45a4-aa31-ae971c934668',
    name: 'Phượng hồng',
    author: EAuthorName.BANGKIEU,
    thumbnail: 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/covers/4/d/4d8305b7f41ec0e15b99e874c4ac9384_1285432928.jpg',
  },
  {
    id: 3,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FBangKieu%2FLo%CC%9B%CC%80i%20Cu%CC%89a%20Gio%CC%81%20-%20Ba%CC%86%CC%80ng%20Kie%CC%82%CC%80u%20%5B%20ezmp3.cc%20%5D.mp3?alt=media&token=763b5938-53d4-4043-8e8d-056c6f2a2fd5',
    name: 'Lời của gió',
    author: EAuthorName.BANGKIEU,
    thumbnail: 'https://dt.muvi.vn/mvn/imgscn/sng/bang-kieu/BD20l9bNaq5P.jpg',
  },
  {
    id: 4,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FNHUQUYNH%2Fy2mate.com%20-%20Nhu%CC%9B%20Quy%CC%80nh%20%20Vu%CC%80ng%20La%CC%81%20Me%20Bay%20Anh%20Vie%CC%A3%CC%82t%20Thanh.mp3?alt=media&token=0b0ff47b-2f14-468c-a11c-8406eb2005b4',
    name: 'Vùng Lá Me Bay',
    author: EAuthorName.NHUQUYNH,
    thumbnail: 'https://i.ytimg.com/vi/z8DLkLnemFY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBX-E7eUQPHhAccwyccE0YuKQtbqQ',
  },
  {
    id: 5,
    author: EAuthorName.NHUQUYNH,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FNHUQUYNH%2Fy2mate.com%20-%20Hue%CC%82%CC%81%20Xu%CC%9Ba%20%20Nhu%CC%9B%20Quy%CC%80nh%20%20Tha%CC%80nh%20An%20ASIA%2062.mp3?alt=media&token=bc9e6f0d-9253-45cf-9740-dcffed87f00f',
    name: "Huế Xưa",
    thumbnail: 'https://s2.dmcdn.net/v/RdveR1ToqUsgc4MI5/x720',
  },
  {
    id: 6,
    author: EAuthorName.PHUONGANH,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FPHUONGNGA%2Fy2mate.com%20-%20Chie%CC%82%CC%80u%20Sa%CC%82n%20Ga%20%20Phu%CC%9Bo%CC%9Bng%20Anh%20Official%20MV.mp3?alt=media&token=a78afb05-cc0e-4cf7-b20b-b6d1dec2612a',
    name: 'Chiều Sân Ga',
    thumbnail: 'https://i.ytimg.com/vi/8pb1cHeW6Cg/maxresdefault.jpg',
  },
  {
    id: 7,
    author: EAuthorName.PHUONGANH,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FPHUONGNGA%2Fy2mate.com%20-%20Phu%CC%9Bo%CC%9Bng%20Anh%20%20Chuye%CC%A3%CC%82n%20Mo%CC%A3%CC%82t%20%C4%90o%CC%82%CC%80i%20Tho%CC%82ng%20composer%20Hamlet%20Tru%CC%9Bo%CC%9Bng%20%20Album%20Na%CC%80ng%20Tho%CC%9B%20Bolero%202024.mp3?alt=media&token=69e7dfcf-bae4-4c09-9fbe-84dfd1af1657',
    name: 'Chuyện Một Đồi Thông',
    thumbnail: 'https://i.ytimg.com/vi/NOckhBjD-FQ/maxresdefault.jpg',
  },
  {
    id: 8,
    author: EAuthorName.QUANGLE,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FQuangLE%2Fy2mate.com%20-%20Sa%CC%82%CC%80u%20Ti%CC%81m%20Thie%CC%A3%CC%82p%20Ho%CC%82%CC%80ng%20%20Quang%20Le%CC%82%20%20Le%CC%A3%CC%82%20Quye%CC%82n%20%20Song%20Ca%20Bolero%20Hay%20Nha%CC%82%CC%81t%20%20Live%20Show%20Ha%CC%81t%20Tre%CC%82n%20Que%CC%82%20Hu%CC%9Bo%CC%9Bng%201.mp3?alt=media&token=3484f701-ed4d-4c0c-b6f0-1dc95a47758d',
    name: 'Sầu Tim Thiếp Hồng',
    thumbnail: 'https://khangphudataudio.com/wp-content/uploads/2023/06/loi-bai-hat-sau-tim-thiep-hong.jpg',
  },
  {
    id: 9,
    author: EAuthorName.QUANGLE,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FQuangLE%2Fy2mate.com%20-%20Ve%CC%82%CC%80%20%C4%90a%CC%82u%20Ma%CC%81i%20To%CC%81c%20Ngu%CC%9Bo%CC%9B%CC%80i%20Thu%CC%9Bo%CC%9Bng%20%20Quang%20Le%CC%82%20%20Official%20MV%20%20Ho%CC%82%CC%80n%20Lo%CC%9B%CC%83%20Sa%20Va%CC%80o%20%C4%90o%CC%82i%20Ma%CC%86%CC%81t%20Em.mp3?alt=media&token=79bfe41f-02b3-4e90-b78b-1981e595f800',
    name: 'Về Đâu Mái Tóc Người Thương',
    thumbnail: 'https://static2.vieon.vn/vieplay-image/poster_v4/2022/03/22/jqrhu20y_quang-le-ve-dau-mai-toc-nguoi-thuong.jpg',
  },
  {
    id: 10,
    author: EAuthorName.HOANGTHUCLINH,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FHoangThucLinh%2FHoa%20La%CC%A3c%20(The%20Lost%20Flower)%20-%20Hoa%CC%80ng%20Thu%CC%A3c%20Linh%20__%20Official%20Lyric%20MV%20%5B%20ezmp3.cc%20%5D.mp3?alt=media&token=2bace69f-51e0-4093-be4c-7868211a2f48',
    name: 'Hoa Lạc',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSzBilpK78Htiv-zQdVqXcL0clIC0BXUa5A&s',
  },
  {
    id: 11,
    author: EAuthorName.HOANGTHUCLINH,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FHoangThucLinh%2FCho%CC%9B%CC%80%20Ngu%CC%9Bo%CC%9B%CC%80i%20-%20Hoa%CC%80ng%20Thu%CC%A3c%20Linh%20__%20Official%20Music%20Video%20%5B%20ezmp3.cc%20%5D.mp3?alt=media&token=90357822-1f0f-41a6-b268-224839f427a6',
    name: 'Chờ Người',
    thumbnail: 'https://i.ytimg.com/vi/FAIkndg66n0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBGiNrmD2EQK7GOn7VzS1xzmnPGqQ',
  },

]

export const listAuthor: IAuthor[] = [
  {
    id: 1,
    name: EAuthorName.BANGKIEU,
    thumbnail:
      'https://image.tienphong.vn/w890/Uploaded/2024/ofh_zsaomzte/2020_10_12/y12bfnTaMHZSYwcttxyDaUgYSwjIbVtpFlFVbKFb_BSUN.jpeg',
  },
  {
    id: 2,
    name: EAuthorName.QUANGLE,
    thumbnail:
      'https://images2.thanhnien.vn/Uploaded/thanhlongn/2023_01_10/lvph1-61-1-3193.jpg',
  },
  {
    id: 3,
    name: EAuthorName.HOANGTHUCLINH,
    thumbnail:
      'https://nguoinoitieng.vn/wp-content/uploads/2019/08/28115156733_48c0ca9175_b-768x1024.jpg',
  },
  {
    id: 4,
    name: EAuthorName.NHUQUYNH,
    thumbnail: 'https://icdn.24h.com.vn/upload/4-2021/images/2021-11-10/Nhu-Quynh-duoc-thoi-gian-uu-ai-dep-man-ma-o-tuoi-co-the-doi-244696298_409203640569549_6872808529326514646_n-1636518348-59-width1400height1862.jpg',
  },
  {
    id: 5,
    name: EAuthorName.PHUONGANH,
    thumbnail: 'https://viberate-upload.ams3.cdn.digitaloceanspaces.com/prod/entity/artist/phuong-anh-bolero-tyk3I',
  },
]

export const listMeditationMusic = [
  {
    id: 1,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2Fy2mate.com%20-%20Nha%CC%A3c%20Thie%CC%82%CC%80n%20Ti%CC%83nh%20Ta%CC%82m%20%20Khu%CC%81c%20Nha%CC%A3c%20An%20Nhie%CC%82n%20Tha%CC%82%CC%81m%20%C4%90a%CC%82%CC%83m%20Trie%CC%82%CC%81t%20Ly%CC%81%20Nha%CC%82n%20Sinh%20%20RA%CC%82%CC%81T%20HAY.mp3?alt=media&token=89ea1be3-11a0-498c-9e64-45b6e7a365fc',
    name: 'Nhạc Thiền Tĩnh Tâm - Khúc Nhạc An Nhiên, Thấm Đẫm Triết Lý Nhân Sinh Nhạc Thiền Tịnh Tâm',
    author: 'Unknown',
    thumbnail:
      'https://vapa.vn/wp-content/uploads/2022/12/hinh-nen-tinh-tam-002.jpg',
  },
  {
    id: 2,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2Fy2mate.com%20-%20Nha%CC%A3c%20Thie%CC%82%CC%80n%20%20Vo%CC%82%20U%CC%9Bu.mp3?alt=media&token=f1d61fbe-849e-4178-a9e3-85477698ee30',
    name: 'Nhạc Thiền - Vô Ưu',
    author: 'Unknown',
    thumbnail: 'https://cms.lichngaytot.com/medias/standard/2017/8/15/doa-hoa-vo-uu-trong-long-moi-nguoi.jpg',
  },
  {
    id: 3,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2Fy2mate.com%20-%20Nha%CC%A3c%20thie%CC%82%CC%80n%20trong%20phim%20Cuo%CC%A3%CC%82c%20%C4%90o%CC%9B%CC%80i%20%C4%90u%CC%9B%CC%81c%20Pha%CC%A3%CC%82t%20%20Chu%CC%9B%CC%83a%20La%CC%80nh%20Tha%CC%82n%20Ta%CC%82m%20Tri%CC%81%20%20An%20La%CC%A3c%20Mo%CC%82%CC%83i%20Nga%CC%80y%20%20Da%CC%80nh%20ta%CC%A3%CC%86ng%20ba%CC%A3n.mp3?alt=media&token=5b91f8b1-e3c1-4b96-8b5b-753fd79ba2bf',
    name: 'Nhạc thiền trong phim Cuộc Đời Đức Phật - Chữa Lành Thân Tâm Trí - An Lạc Mỗi Ngày',
    author: 'Unknown',
    thumbnail:
      'https://i.ex-cdn.com/phatgiao.org.vn/files/content/2023/02/16/con-duong-huong-toi-hanh-phuc-nhan-sinh-qua-viec-thuc-hanh-loi-phat-day-0514.jpeg',
  },
  {
    id: 4,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2F5%20Phu%CC%81t%20Nha%CC%A3c%20Thie%CC%82%CC%80n%20Buo%CC%82%CC%89i%20Sa%CC%81ng%20%5B%20ezmp3.cc%20%5D.mp3?alt=media&token=d6d9b187-2ada-4ca8-a4eb-f803a3ace072',
    name: 'Nhạc Thiền Buổi Sáng Tràn Đầy Năng Lượng - Tiếng Chim Hót - Thu Hút Điều Tốt Đẹp - Nhạc Thư Giãn',
    author: 'Binh Tran Healing',
    thumbnail: 'https://redsvn.net/wp-content/uploads/2021/11/img_61a4a5a0cc761.jpg',
  },
  {
    id: 5,
    url: 'https://firebasestorage.googleapis.com/v0/b/food-donation-98ef2.appspot.com/o/QuynhNhu%2FNHA%CC%A3C%20THIE%CC%82%CC%80N%20CO%CC%82%CC%89%20CA%CC%82%CC%80M%20TRUNG%20HOA%20%5B%20ezmp3.cc%20%5D.mp3?alt=media&token=d10e0600-fad4-4930-92f8-bb031daee853',
    name: 'Nhạc Thiền Cổ Điển Trung Hoa',
    author: 'Unknown',
    thumbnail:
      'https://vyctravel.com/libs/upload/ckfinder/images/Trung_Quoc/khai%20phong.png',
  },
]

export const listAlbums: IAlbum[] = [
  {
    id: 1,
    title: '100 Ca Khúc Nhạc Trữ Tình Hay Nhất',
    thumbnail:
      'https://amthanhthudo.com/wp-content/uploads/Top-100-nhac-tru-tinh-hay-nhat-hien-nay.jpg',
    list: listMusics,
    musicType: EMusicType.BOLERO,
  },
  {
    id: 2,
    title: '340+ Tình Khúc Bolero Hải Ngoại',
    thumbnail:
      'https://i.ytimg.com/vi/bN3hhgmAmK4/maxresdefault.jpg',
    list: listMusics,
    musicType: EMusicType.BOLERO,
  },
  {
    id: 3,
    title: 'Nhạc Thiền Không Lời Hay Nhất',
    thumbnail:
      'https://i.ytimg.com/vi/t-Zum0cIC1s/maxresdefault.jpg',
    list: listMeditationMusic,
    musicType: EMusicType.THIEN,
  },
  {
    id: 4,
    title: 'Nhạc Bolero Trữ Tình',
    thumbnail:
      'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/8/5/d/e/85deb162e1e8a7400a01b35e116949c5.jpg',
    list: listMusics,
    musicType: EMusicType.BOLERO,
  },
  {
    id: 5,
    title: 'Nhạc Thiền Buổi Sáng Tràn Đầy Năng Lượng',
    thumbnail:
      'https://i.ytimg.com/vi/Qq6dBbRusdw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgSyg1MA8=&rs=AOn4CLCnnt_B477A9zewq3JtkwuyUfSm9w',
    list: listMusics,
    musicType: EMusicType.BOLERO,
  },
]

export const allMusics = [...listMusics]