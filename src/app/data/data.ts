import { ETypeData, IData } from '@/types/common'

export const technologyData: IData[] = [
  {
    id: 1,
    image:
      'https://photo2.tinhte.vn/data/attachment-files/2021/10/5684773_Cover_bao-mat.png',
    type: ETypeData.TECHNOLOGY,
    title: 'Sử dụng internet an toàn',
    description:
      'Internet mang lại nhiều tiện ích nhưng cũng tiềm ẩn nhiều nguy cơ đối với người lớn tuổi. Bài viết này hướng dẫn cách sử dụng internet an toàn cho người lớn tuổi để tránh các rủi ro như lừa đảo, virus và bảo mật thông tin cá nhân.',
    body: [
      {
        title: 'Không Chia Sẻ Thông Tin Cá Nhân Công Khai',
        content:
          'Người lớn tuổi cần tránh chia sẻ các thông tin cá nhân nhạy cảm như số tài khoản, chứng minh nhân dân trên mạng xã hội hoặc qua email không rõ nguồn gốc để tránh bị lừa đảo và mất mát tài sản.',
      },
      {
        title: 'Sử Dụng Mật Khẩu Mạnh',
        content:
          'Tạo mật khẩu phức tạp, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt. Nên thay đổi mật khẩu định kỳ và sử dụng mật khẩu khác nhau cho mỗi tài khoản.',
      },
      {
        title: 'Cẩn Thận Khi Mở Email Và Tin Nhắn Lạ',
        content:
          'Không mở email hoặc tin nhắn từ người lạ chứa liên kết hoặc yêu cầu cung cấp thông tin cá nhân. Email lừa đảo có thể chứa mã độc gây mất tài khoản hoặc thông tin nhạy cảm.',
      },
      {
        title: 'Sử Dụng Phần Mềm Diệt Virus',
        content:
          'Cài đặt và cập nhật phần mềm diệt virus thường xuyên giúp bảo vệ thiết bị của bạn khỏi virus và các cuộc tấn công mạng.',
      },
      {
        title: 'Cẩn Trọng Khi Mua Sắm Trực Tuyến',
        content:
          'Chỉ mua sắm tại các trang web uy tín và không cung cấp thông tin thẻ tín dụng trên các trang web không có chứng chỉ bảo mật.',
      },
    ],
  },
  {
    id: 2,
    image: 'https://cdn.tgdd.vn/hoi-dap/1336447/10-cach-bao-mat-thong-tin-ca-nhan-cua-ban-trong-thoi-dai-so.003.jpg',
    type: ETypeData.TECHNOLOGY,
    title: 'Bảo mật thông tin cá nhân',
    description: 'Hướng dẫn cách bảo vệ thông tin cá nhân trên mạng xã hội.',
    body: [
      {
        title: 'Sử dụng cài đặt quyền riêng tư',
        content: 'Đảm bảo rằng bạn đã thiết lập quyền riêng tư cho tài khoản mạng xã hội của mình.',
      },
      {
        title: 'Kiểm tra các ứng dụng liên kết',
        content: 'Thường xuyên kiểm tra và xóa các ứng dụng không cần thiết đã liên kết với tài khoản của bạn.',
      },
      {
        title: 'Cảnh giác với các yêu cầu kết bạn',
        content: 'Chỉ chấp nhận lời mời kết bạn từ những người mà bạn biết rõ.',
      },
      {
        title: 'Không chia sẻ vị trí',
        content: 'Tránh chia sẻ vị trí của bạn trong thời gian thực trên mạng xã hội.',
      },
      {
        title: 'Sử dụng xác thực hai yếu tố',
        content: 'Kích hoạt xác thực hai yếu tố cho tài khoản của bạn để tăng cường bảo mật.',
      },
    ],
  },
  {
    id: 3,
    image: 'https://cdn.tgdd.vn/Files/2019/05/28/1169467/cach-bao-mat-thong-tin-ca-nhan-khi-dung-wifi-cong-cong-6759.jpg',
    type: ETypeData.TECHNOLOGY,
    title: 'Nguy cơ từ Wi-Fi công cộng',
    description: 'Cách bảo vệ bản thân khi sử dụng Wi-Fi công cộng.',
    body: [
      {
        title: 'Tránh truy cập thông tin nhạy cảm',
        content: 'Không thực hiện giao dịch tài chính khi sử dụng Wi-Fi công cộng.',
      },
      {
        title: 'Sử dụng VPN',
        content: 'Sử dụng dịch vụ VPN để mã hóa kết nối của bạn.',
      },
      {
        title: 'Tắt chia sẻ tệp',
        content: 'Tắt tính năng chia sẻ tệp khi kết nối với Wi-Fi công cộng.',
      },
      {
        title: 'Quên mạng sau khi sử dụng',
        content: 'Quên mạng Wi-Fi công cộng sau khi sử dụng để ngăn chặn kết nối tự động trong tương lai.',
      },
      {
        title: 'Kiểm tra chứng chỉ SSL',
        content: 'Đảm bảo rằng trang web bạn truy cập có chứng chỉ SSL (https://).',
      },
    ],
  },
  {
    id: 4,
    image: 'https://bcp.cdnchinhphu.vn/zoom/600_315/334894974524682240/2024/3/7/chan-441-17097784276671045096452-0-148-1125-1948-crop-17097784344691503544959.png',
    type: ETypeData.TECHNOLOGY,
    title: 'Cách nhận biết lừa đảo trực tuyến',
    description: 'Hướng dẫn nhận biết các dấu hiệu của lừa đảo trực tuyến.',
    body: [
      {
        title: 'Kiểm tra địa chỉ email',
        content: 'Địa chỉ email lừa đảo thường có các ký tự lạ hoặc không chính xác.',
      },
      {
        title: 'Cảnh giác với các ưu đãi quá tốt',
        content: 'Nếu một ưu đãi nghe có vẻ quá tốt để là thật, có thể đó là lừa đảo.',
      },
      {
        title: 'Không nhấp vào liên kết không rõ nguồn gốc',
        content: 'Tránh nhấp vào các liên kết trong email hoặc tin nhắn từ người lạ.',
      },
      {
        title: 'Xác minh thông tin',
        content: 'Tìm kiếm thông tin trên internet để xác minh tính xác thực của yêu cầu.',
      },
      {
        title: 'Báo cáo lừa đảo',
        content: 'Nếu bạn nghi ngờ một vụ lừa đảo, hãy báo cáo cho cơ quan chức năng.',
      },
    ],
  },
  {
    id: 5,
    image: 'https://cdn.tgdd.vn/hoi-dap/1052063/Thumbnail/quen-mat-khau-gmail-va-cach-lay-lai-nhanh-chong-thumb.jpg',
    type: ETypeData.TECHNOLOGY,
    title: 'Cách bảo vệ tài khoản email',
    description: 'Hướng dẫn bảo vệ tài khoản email khỏi các mối đe dọa.',
    body: [
      {
        title: 'Sử dụng mật khẩu mạnh',
        content: 'Mật khẩu nên có ít nhất 12 ký tự và bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.',
      },
      {
        title: 'Thay đổi mật khẩu định kỳ',
        content: 'Thay đổi mật khẩu của bạn ít nhất mỗi 6 tháng.',
      },
      {
        title: 'Cảnh giác với email lừa đảo',
        content: 'Luôn kiểm tra kỹ lưỡng các email trước khi nhấp vào liên kết hoặc tải xuống tệp đính kèm.',
      },
      {
        title: 'Kích hoạt xác thực hai yếu tố',
        content: 'Bảo vệ tài khoản của bạn bằng cách kích hoạt xác thực hai yếu tố.',
      },
      {
        title: 'Kiểm tra hoạt động tài khoản',
        content: 'Thường xuyên kiểm tra hoạt động tài khoản để phát hiện các hoạt động đáng ngờ.',
      },
    ],
  },
  {
    id: 6,
    image: 'https://8486d3381d.vws.vegacdn.vn/uploadfoldernew/sgdlongbien/image/thaimoa/2021_4_image/su-dung-mang-xe-hoi-an-toan_13042021.jpg?w=600',
    type: ETypeData.TECHNOLOGY,
    title: 'Cách sử dụng mạng xã hội an toàn',
    description: 'Hướng dẫn sử dụng mạng xã hội một cách an toàn.',
    body: [
      {
        title: 'Cài đặt quyền riêng tư',
        content: 'Đảm bảo rằng bạn đã thiết lập quyền riêng tư cho tài khoản mạng xã hội của mình.',
      },
      {
        title: 'Không chia sẻ thông tin nhạy cảm',
        content: 'Tránh chia sẻ thông tin cá nhân nhạy cảm trên mạng xã hội.',
      },
      {
        title: 'Cảnh giác với các yêu cầu kết bạn',
        content: 'Chỉ chấp nhận lời mời kết bạn từ những người mà bạn biết rõ.',
      },
      {
        title: 'Kiểm tra các ứng dụng liên kết',
        content: 'Thường xuyên kiểm tra và xóa các ứng dụng không cần thiết đã liên kết với tài khoản của bạn.',
      },
      {
        title: 'Báo cáo nội dung không phù hợp',
        content: 'Báo cáo các bài viết hoặc người dùng có hành vi không phù hợp.',
      },
    ],
  },
]

export const exercisesData: IData[] = [
  {
    id: 1,
    image:
      'https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/nen_hay_khong_tap_gym_sau_60_tuoi_o_Cgpy_1669652059_f1da1dd078.png',
    type: ETypeData.EXERCISE,
    youtubeId: 'UsH2ppREeQo',
    title: 'Các bài tập người già nên tránh',
    description:
      'Tập luyện là một cách tốt để người già duy trì sức khỏe, nhưng không phải bài tập nào cũng an toàn. Một số bài tập có thể gây nguy hiểm hoặc làm tăng nguy cơ chấn thương. Dưới đây là các bài tập mà người lớn tuổi nên tránh và các giải pháp thay thế an toàn hơn.',
    body: [
      {
        title: '1. Các Bài Tập Sử Dụng Tạ Nặng',
        content:
          'Tạ nặng tạo áp lực lên khớp và lưng, có thể gây chấn thương nghiêm trọng. Thay thế bằng tạ nhẹ hoặc bài tập với trọng lượng cơ thể.',
      },
      {
        title: '2. Chạy Bộ Dài',
        content:
          'Chạy bộ dài có thể gây căng thẳng lên khớp gối, hông và lưng. Thay thế bằng đi bộ nhanh hoặc bơi lội.',
      },
      {
        title: '3. Bài Tập Squat Sâu',
        content:
          'Squat sâu gây áp lực lên khớp gối và hông. Thay thế bằng squat nông hoặc đứng lên ngồi xuống với ghế.',
      },
      {
        title: '4. Bài Tập Bằng Máy Chống Đẩy (Leg Press Machine)',
        content:
          'Máy chống đẩy chân có thể gây tổn thương khớp gối và lưng. Thay thế bằng dây đàn hồi hoặc các bài tập dưới nước.',
      },
      {
        title: '5. Nhảy Cao Và Các Bài Tập Cường Độ Cao (Plyometrics)',
        content:
          'Nhảy cao dễ gây tổn thương dây chằng và khớp. Thay thế bằng thể dục nhịp điệu nhẹ nhàng hoặc đi bộ theo nhạc.',
      },
      {
        title: '6. Bài Tập Plank Với Thời Gian Dài',
        content:
          'Plank lâu có thể gây đau lưng. Thay thế bằng plank ngắn hoặc các bài tập cơ bụng nhẹ nhàng hơn.',
      },
      {
        title: '7. Các Bài Tập Xoay Người Quá Mức',
        content:
          'Xoay người mạnh dễ tổn thương cột sống. Thay thế bằng các động tác xoay nhẹ nhàng và có kiểm soát.',
      },
      {
        title: '8. Động Tác Ngồi Gập Bụng (Sit-ups)',
        content:
          'Sit-ups có thể gây căng thẳng lên cột sống. Thay thế bằng các bài tập nghiêng chéo hoặc nâng chân nhẹ.',
      },
    ],
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBValfWNY9YpxnckUluAoOVong6r5w5xuVhg&s',
    youtubeId: 'UsH2ppREeQo',
    type: ETypeData.EXERCISE,
    title: 'Các Bài Tập Sức Khỏe Phù Hợp Cho Người Già',
    description:
      'Tập thể dục thường xuyên có lợi cho sức khỏe của người cao tuổi, giúp tăng cường sức mạnh, giữ gìn sự linh hoạt và cải thiện tâm trạng. Dưới đây là một số bài tập an toàn và hiệu quả dành cho người già.',
    body: [
      {
        title: '1. Đi Bộ',
        content:
          'Đi bộ là bài tập nhẹ nhàng, không gây căng thẳng lên khớp, phù hợp với mọi người ở mọi độ tuổi. Đi bộ 30 phút mỗi ngày giúp cải thiện tim mạch, lưu thông máu và giảm căng thẳng.',
      },
      {
        title: '2. Thể Dục Nhịp Điệu Nhẹ',
        content:
          'Thể dục nhịp điệu nhẹ với các động tác tay chân giúp tăng cường sự linh hoạt, cải thiện nhịp tim và giúp duy trì sức khỏe tổng thể. Các lớp thể dục dành cho người già thường có hướng dẫn an toàn và bài tập phù hợp.',
      },
      {
        title: '3. Bài Tập Kéo Dãn Cơ',
        content:
          'Kéo dãn cơ là một phần quan trọng để duy trì sự linh hoạt và ngăn ngừa cứng khớp. Tập kéo dãn mỗi ngày giúp tăng cường sự linh động của khớp, giảm căng cơ và giảm nguy cơ chấn thương.',
      },
      {
        title: '4. Yoga Hoặc Thái Cực Quyền',
        content:
          'Yoga và Thái Cực Quyền giúp cải thiện thăng bằng, linh hoạt và sự thư giãn tinh thần. Các động tác chậm rãi và có kiểm soát của Thái Cực Quyền giúp tăng cường thăng bằng và giảm nguy cơ té ngã ở người cao tuổi.',
      },
      {
        title: '5. Bài Tập Tăng Cường Sức Mạnh',
        content:
          'Bài tập tăng cường sức mạnh, như nâng tạ nhẹ hoặc sử dụng dây đàn hồi, giúp tăng cường cơ bắp và xương khớp, cải thiện khả năng di chuyển hàng ngày. Hãy tập luyện với mức độ vừa phải, phù hợp với thể trạng.',
      },
      {
        title: '6. Bài Tập Thở Và Thư Giãn',
        content:
          'Các bài tập thở sâu và thư giãn giúp cải thiện chức năng hô hấp và giảm căng thẳng. Dành 10-15 phút mỗi ngày để thực hiện các bài tập thở sâu, giúp cung cấp oxy tốt hơn cho cơ thể và tinh thần.',
      },
      {
        title: '7. Bơi Lội',
        content:
          'Bơi lội là một bài tập toàn thân tuyệt vời, không gây áp lực lên các khớp, đồng thời giúp tăng cường sức mạnh cơ bắp và cải thiện tim mạch. Đây là hoạt động lý tưởng cho người cao tuổi bị đau khớp hoặc viêm khớp.',
      },
    ],
  },
  {
    id: 3,
    image: 'https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/v3wr33MXp4.jpg',
    youtubeId: 'UsH2ppREeQo',
    type: ETypeData.EXERCISE,
    title: 'Bài Tập Giúp Cải Thiện Thăng Bằng',
    description: 'Thăng bằng là yếu tố quan trọng giúp người già tránh té ngã. Dưới đây là một số bài tập giúp cải thiện thăng bằng.',
    body: [
      {
        title: '1. Đứng Trên Một Chân',
        content: 'Giữ thăng bằng bằng cách đứng trên một chân trong 10-30 giây, sau đó đổi chân.',
      },
      {
        title: '2. Đi Bộ Trên Đường Thẳng',
        content: 'Đi bộ trên một đường thẳng, cố gắng giữ thăng bằng và không để chân chạm vào nhau.',
      },
      {
        title: '3. Tập Yoga Với Tư Thế Cân Bằng',
        content: 'Các tư thế yoga như Tư Thế Cây giúp cải thiện thăng bằng và sự tập trung.',
      },
      {
        title: '4. Sử Dụng Bóng Thể Dục',
        content: 'Ngồi trên bóng thể dục và giữ thăng bằng giúp tăng cường cơ bụng và thăng bằng.',
      },
      {
        title: '5. Tập Thể Dục Nhịp Điệu',
        content: 'Tham gia các lớp thể dục nhịp điệu giúp cải thiện thăng bằng và sức khỏe tổng thể.',
      },
      {
        title: '6. Đi Bộ Trên Bề Mặt Không Bằng Phẳng',
        content: 'Đi bộ trên bề mặt không bằng phẳng như cỏ hoặc cát giúp cải thiện thăng bằng.',
      },
    ],
  },
  {
    id: 4,
    image: 'https://oreni.vn/uploads/contents/bai-tap-yoga-cho-nguoi-cao-tuoi.jpg',
    youtubeId: 'UsH2ppREeQo',
    type: ETypeData.EXERCISE,
    title: 'Bài Tập Tăng Cường Linh Hoạt',
    description: 'Linh hoạt là yếu tố quan trọng giúp người già duy trì khả năng vận động. Dưới đây là một số bài tập tăng cường linh hoạt.',
    body: [
      {
        title: '1. Kéo Dãn Cơ Bắp',
        content: 'Kéo dãn cơ bắp hàng ngày giúp duy trì sự linh hoạt và giảm nguy cơ chấn thương.',
      },
      {
        title: '2. Bài Tập Xoay Cổ',
        content: 'Xoay cổ từ trái sang phải và ngược lại giúp giảm căng thẳng và tăng cường linh hoạt.',
      },
      {
        title: '3. Bài Tập Xoay Hông',
        content: 'Xoay hông nhẹ nhàng giúp cải thiện linh hoạt và giảm đau lưng.',
      },
      {
        title: '4. Tư Thế Ngồi Gập Người',
        content: 'Ngồi gập người về phía trước giúp kéo dãn cơ lưng và chân.',
      },
      {
        title: '5. Bài Tập Kéo Dãn Đùi',
        content: 'Kéo dãn đùi giúp cải thiện linh hoạt và giảm căng cơ.',
      },
      {
        title: '6. Tập Thể Dục Nhẹ Nhàng',
        content: 'Tham gia các lớp thể dục nhẹ nhàng giúp cải thiện linh hoạt và sức khỏe tổng thể.',
      },
    ],
  },
  {
    id: 5,
    image: 'https://thanhnien.mediacdn.vn/Uploaded/ngocquy/2016_06_01/nguoi-gia-gym-shutterstock_NYAD.jpg',
    youtubeId: 'UsH2ppREeQo',
    type: ETypeData.EXERCISE,
    title: 'Bài Tập Tăng Cường Sức Mạnh Cơ Bắp',
    description: 'Sức mạnh cơ bắp là yếu tố quan trọng giúp người già duy trì khả năng vận động. Dưới đây là một số bài tập tăng cường sức mạnh.',
    body: [
      {
        title: '1. Nâng Tạ Nhẹ',
        content: 'Nâng tạ nhẹ giúp tăng cường sức mạnh cơ bắp mà không gây áp lực lên khớp.',
      },
      {
        title: '2. Sử Dụng Dây Đàn Hồi',
        content: 'Dây đàn hồi là công cụ tuyệt vời để tập luyện sức mạnh mà không cần tạ nặng.',
      },
      {
        title: '3. Bài Tập Chống Đẩy',
        content: 'Chống đẩy giúp tăng cường sức mạnh cơ tay và cơ ngực.',
      },
      {
        title: '4. Bài Tập Ngồi Xuống Đứng Lên',
        content: 'Ngồi xuống và đứng lên từ ghế giúp tăng cường sức mạnh chân.',
      },
      {
        title: '5. Bài Tập Kéo Lưng',
        content: 'Kéo lưng giúp tăng cường sức mạnh cơ lưng và cải thiện tư thế.',
      },
      {
        title: '6. Tập Thể Dục Nhẹ Nhàng',
        content: 'Tham gia các lớp thể dục nhẹ nhàng giúp cải thiện sức mạnh và sức khỏe tổng thể.',
      },
    ],
  },
  {
    id: 6,
    image: 'https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/1200/324455921873985536/2021/8/10/bai-tap-duong-sinh-cho-nguoi-cao-tuoi-3-16286071519171685845138-0-0-394-630-crop-16286073107291692564620.jpg',
    youtubeId: 'UsH2ppREeQo',
    type: ETypeData.EXERCISE,
    title: 'Bài Tập Thư Giãn và Giảm Căng Thẳng',
    description: 'Thư giãn và giảm căng thẳng là rất quan trọng cho sức khỏe tinh thần của người già. Dưới đây là một số bài tập giúp thư giãn.',
    body: [
      {
        title: '1. Thở Sâu',
        content: 'Thực hiện các bài tập thở sâu giúp giảm căng thẳng và cải thiện chức năng hô hấp.',
      },
      {
        title: '2. Thiền',
        content: 'Thiền giúp cải thiện sự tập trung và giảm lo âu.',
      },
      {
        title: '3. Yoga Thư Giãn',
        content: 'Các tư thế yoga thư giãn giúp giảm căng thẳng và cải thiện tâm trạng.',
      },
      {
        title: '4. Nghe Nhạc Thư Giãn',
        content: 'Nghe nhạc nhẹ nhàng giúp thư giãn tinh thần và giảm căng thẳng.',
      },
      {
        title: '5. Đi Dạo Trong Thiên Nhiên',
        content: 'Đi dạo trong thiên nhiên giúp cải thiện tâm trạng và giảm căng thẳng.',
      },
      {
        title: '6. Tắm Nước Nóng',
        content: 'Tắm nước nóng giúp thư giãn cơ bắp và giảm căng thẳng.',
      },
    ],
  },
  {
    id: 7,
    image: 'https://ngaymoionline.com.vn/stores/news_dataimages/luongtoan/072020/22/10/in_article/1246_nguoi-cao-tuoi-2.jpg?rt=20200722143732',
    youtubeId: 'UsH2ppREeQo',
    type: ETypeData.EXERCISE,
    title: 'Bài Tập Tăng Cường Sức Khỏe Tim Mạch',
    description: 'Sức khỏe tim mạch là rất quan trọng đối với người già. Dưới đây là một số bài tập giúp cải thiện sức khỏe tim mạch.',
    body: [
      {
        title: '1. Đi Bộ Nhanh',
        content: 'Đi bộ nhanh giúp cải thiện sức khỏe tim mạch và tăng cường lưu thông máu.',
      },
      {
        title: '2. Bơi Lội',
        content: 'Bơi lội là bài tập tuyệt vời cho sức khỏe tim mạch mà không gây áp lực lên khớp.',
      },
      {
        title: '3. Đạp Xe',
        content: 'Đạp xe giúp cải thiện sức khỏe tim mạch và tăng cường sức mạnh chân.',
      },
      {
        title: '4. Thể Dục Nhịp Điệu',
        content: 'Tham gia các lớp thể dục nhịp điệu giúp cải thiện sức khỏe tim mạch và sức khỏe tổng thể.',
      },
      {
        title: '5. Nhảy Nhẹ',
        content: 'Nhảy nhẹ nhàng giúp cải thiện sức khỏe tim mạch và tăng cường sức mạnh cơ bắp.',
      },
      {
        title: '6. Tập Thể Dục Nhịp Điệu',
        content: 'Tham gia các lớp thể dục nhịp điệu giúp cải thiện sức khỏe tim mạch và sức khỏe tổng thể.',
      },
    ],
  },
]

export const newsData: IData[] = [
  {
    id: 1,
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2019/12/cuoc-song2.jpg',
    type: ETypeData.LIBRARY,
    title: 'Bài Thơ Về Cuộc Sống',
    description:
      'Một bài thơ ngắn gọn nhưng đầy ý nghĩa về cuộc sống.',
    body: [
      {
        title: 'Cuộc Sống',
        content:
          'Cuộc sống như một dòng sông,\n' +
          'Chảy mãi không ngừng, không dừng lại.\n' +
          'Có lúc êm đềm, có lúc cuồng phong,\n' +
          'Nhưng ta vẫn bước, không ngại ngần.',
      },
      {
        title: 'Tình Yêu',
        content:
          'Tình yêu như ánh nắng mai,\n' +
          'Sưởi ấm tâm hồn, xua tan u ám.\n' +
          'Dù cho bão tố, dù cho giông bão,\n' +
          'Tình yêu vẫn mãi, không phai nhòa.',
      },
      {
        title: 'Sự Bình Yên',
        content:
          'Trong cuộc sống bộn bề lo toan,\n' +
          'Tìm một góc nhỏ để bình yên.\n' +
          'Nghe tiếng gió thổi, nhìn mây trôi,\n' +
          'Tâm hồn nhẹ nhàng, như cánh diều bay.',
      },
      {
        title: 'Khó Khăn',
        content:
          'Khó khăn là thử thách của cuộc đời,\n' +
          'Giúp ta trưởng thành, mạnh mẽ hơn.\n' +
          'Hãy đối mặt và vượt qua,\n' +
          'Mỗi bước đi là một bài học quý giá.',
      },
      {
        title: 'Hy Vọng',
        content:
          'Hy vọng là ánh sáng trong đêm tối,\n' +
          'Giúp ta vững bước trên con đường dài.\n' +
          'Dù có khó khăn, đừng từ bỏ,\n' +
          'Bởi vì phía trước luôn có điều tốt đẹp.',
      },
    ],
  },
  {
    id: 2,
    image:
      'https://png.pngtree.com/png-vector/20231230/ourlarge/pngtree-two-elderly-walking-arm-in-arm-lover-valentine-s-day-png-image_11249886.png',
    type: ETypeData.LIBRARY,
    title: 'Bài Văn Về Tình Yêu',
    description:
      'Tình yêu là một chủ đề bất tận trong cuộc sống.',
    body: [
      {
        title: 'Tình Yêu',
        content:
          'Tình yêu không chỉ là cảm xúc,\n' +
          'Mà còn là sự hy sinh và sẻ chia.\n' +
          'Là những khoảnh khắc ngọt ngào,\n' +
          'Là những kỷ niệm không thể phai mờ.',
      },
      {
        title: 'Tình Bạn',
        content:
          'Bạn bè như những vì sao sáng,\n' +
          'Luôn bên ta trong những lúc khó khăn.\n' +
          'Tình bạn chân thành, không gì sánh bằng,\n' +
          'Là món quà quý giá trong cuộc sống.',
      },
      {
        title: 'Tình Yêu Thương',
        content:
          'Tình yêu thương là sợi dây kết nối,\n' +
          'Giữa con người với con người, không thể thiếu.\n' +
          'Nó mang lại niềm vui và hạnh phúc,\n' +
          'Giúp ta vượt qua mọi thử thách trong đời.',
      },
      {
        title: 'Nỗi Đau',
        content:
          'Nỗi đau là một phần của tình yêu,\n' +
          'Giúp ta hiểu rõ hơn về cảm xúc.\n' +
          'Dù có khó khăn, hãy kiên nhẫn,\n' +
          'Bởi vì tình yêu sẽ luôn chiến thắng.',
      },
      {
        title: 'Kỷ Niệm',
        content:
          'Kỷ niệm bên người yêu luôn quý giá,\n' +
          'Những buổi chiều cùng nhau trò chuyện.\n' +
          'Dù thời gian trôi, kỷ niệm vẫn sống,\n' +
          'Tình yêu mãi mãi trong tim không phai.',
      },
      {
        title: 'Sự Chân Thành',
        content:
          'Chân thành là nền tảng của tình yêu,\n' +
          'Giúp ta xây dựng mối quan hệ bền vững.\n' +
          'Hãy luôn thành thật với nhau,\n' +
          'Để tình yêu mãi mãi không phai nhòa.',
      },
    ],
  },
  {
    id: 3,
    image:
      'https://yenbai.gov.vn/noidung/tintuc/PublishingImages/Thong-Tin-Tinh/Thang-Canh-Du-Lich/mu-cang-chi.jpg',
    type: ETypeData.LIBRARY,
    title: 'Bài Thơ Về Thiên Nhiên',
    description:
      'Khám phá vẻ đẹp của thiên nhiên qua những vần thơ.',
    body: [
      {
        title: 'Thiên Nhiên',
        content:
          'Cánh đồng xanh mướt, bầu trời trong,\n' +
          'Gió nhẹ thổi qua, tiếng chim hót.\n' +
          'Thiên nhiên tươi đẹp, cuộc sống tràn đầy,\n' +
          'Mỗi ngày trôi qua, ta thêm yêu đời.',
      },
      {
        title: 'Mùa Xuân',
        content:
          'Mùa xuân đến, hoa nở rực rỡ,\n' +
          'Cỏ cây xanh tươi, lòng người phơi phới.\n' +
          'Hương thơm ngào ngạt, tiếng chim ca,\n' +
          'Mùa xuân là khởi đầu của mọi điều tốt đẹp.',
      },
      {
        title: 'Sự Kết Nối',
        content:
          'Thiên nhiên và con người, một mối liên kết,\n' +
          'Chúng ta sống hòa hợp, cùng nhau phát triển.\n' +
          'Bảo vệ môi trường, giữ gìn vẻ đẹp,\n' +
          'Để thế hệ sau có được cuộc sống tươi đẹp.',
      },
      {
        title: 'Biển Cả',
        content:
          'Biển cả mênh mông, sóng vỗ bờ,\n' +
          'Hương vị mặn mà, gió biển thổi.\n' +
          'Mỗi lần ra khơi, lòng ta rạo rực,\n' +
          'Biển là nơi ta tìm thấy tự do.',
      },
      {
        title: 'Rừng Xanh',
        content:
          'Rừng xanh bát ngát, cây cối um tùm,\n' +
          'Tiếng chim hót vang, hòa cùng gió.\n' +
          'Rừng là nơi ta tìm về bình yên,\n' +
          'Giữa cuộc sống bộn bề, tìm lại chính mình.',
      },
      {
        title: 'Ngọn Núi',
        content:
          'Ngọn núi hùng vĩ, chạm tới mây,\n' +
          'Là nơi ta khám phá, chinh phục.\n' +
          'Mỗi bước đi là một hành trình,\n' +
          'Ngọn núi dạy ta về sức mạnh và kiên trì.',
      },
    ],
  },
  {
    id: 4,
    image:
      'https://storage-vnportal.vnpt.vn/ndh-ubnd/5793/2024/thang3/19/5_07595828062020.jpg',
    type: ETypeData.LIBRARY,
    title: 'Bài Văn Về Gia Đình',
    description:
      'Gia đình là nơi ta tìm về và yêu thương.',
    body: [
      {
        title: 'Gia Đình',
        content:
          'Gia đình là nơi bắt đầu mọi thứ,\n' +
          'Là nơi ta lớn lên, là nơi ta trở về.\n' +
          'Tình yêu và sự ấm áp luôn hiện hữu,\n' +
          'Gia đình là bến đỗ của cuộc đời.',
      },
      {
        title: 'Kỷ Niệm',
        content:
          'Kỷ niệm bên gia đình luôn quý giá,\n' +
          'Những bữa cơm, những tiếng cười vui vẻ.\n' +
          'Dù thời gian trôi, kỷ niệm vẫn sống,\n' +
          'Gia đình là nơi ta luôn trở về.',
      },
      {
        title: 'Tình Yêu Gia Đình',
        content:
          'Tình yêu gia đình là vô giá,\n' +
          'Là nguồn động lực giúp ta vươn xa.\n' +
          'Dù cuộc sống có bao nhiêu khó khăn,\n' +
          'Gia đình luôn là nơi ta tìm về.',
      },
      {
        title: 'Sự Ủng Hộ',
        content:
          'Gia đình là chỗ dựa vững chắc,\n' +
          'Giúp ta vượt qua mọi thử thách.\n' +
          'Tình yêu thương là sức mạnh lớn lao,\n' +
          'Gia đình là nơi ta tìm thấy niềm vui.',
      },
      {
        title: 'Giá Trị Gia Đình',
        content:
          'Giá trị gia đình là điều quý giá,\n' +
          'Giúp ta nhận ra ý nghĩa cuộc sống.\n' +
          'Hãy trân trọng từng khoảnh khắc bên nhau,\n' +
          'Gia đình là nơi ta tìm thấy hạnh phúc.',
      },
      {
        title: 'Tương Lai',
        content:
          'Tương lai tươi sáng bắt đầu từ gia đình,\n' +
          'Nơi ta học hỏi và trưởng thành.\n' +
          'Hãy xây dựng một gia đình hạnh phúc,\n' +
          'Để con cháu mai sau có được cuộc sống tốt đẹp.',
      },
    ],
  },
  {
    id: 5,
    image:
      'https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/dataimages/202011/original/images2330390_ban_be.jpg',
    type: ETypeData.LIBRARY,
    title: 'Bài Thơ Về Bạn Bè',
    description:
      'Tình bạn là một trong những điều quý giá nhất.',
    body: [
      {
        title: 'Tình Bạn',
        content:
          'Bạn bè như những vì sao sáng,\n' +
          'Luôn bên ta trong những lúc khó khăn.\n' +
          'Tình bạn chân thành, không gì sánh bằng,\n' +
          'Là món quà quý giá trong cuộc sống.',
      },
      {
        title: 'Kỷ Niệm Bạn Bè',
        content:
          'Những kỷ niệm bên bạn bè thân thiết,\n' +
          'Là những buổi chiều cùng nhau trò chuyện.\n' +
          'Dù cuộc sống có thay đổi, vẫn nhớ,\n' +
          'Tình bạn mãi mãi trong tim không phai.',
      },
      {
        title: 'Sự Ủng Hộ',
        content:
          'Bạn bè là người luôn bên ta,\n' +
          'Trong những lúc khó khăn, họ không rời xa.\n' +
          'Họ là nguồn động viên, là ánh sáng,\n' +
          'Giúp ta vượt qua mọi thử thách trong đời.',
      },
      {
        title: 'Tình Bạn Đích Thực',
        content:
          'Tình bạn đích thực là sự chân thành,\n' +
          'Giúp ta vượt qua mọi nỗi đau.\n' +
          'Hãy trân trọng những người bạn bên ta,\n' +
          'Bởi vì họ là báu vật trong cuộc sống.',
      },
      {
        title: 'Sự Chia Sẻ',
        content:
          'Chia sẻ niềm vui, nỗi buồn với nhau,\n' +
          'Là cách để tình bạn thêm bền chặt.\n' +
          'Hãy luôn bên nhau trong mọi hoàn cảnh,\n' +
          'Tình bạn sẽ mãi mãi không phai nhòa.',
      },
      {
        title: 'Tình Bạn Qua Thời Gian',
        content:
          'Thời gian trôi qua, tình bạn vẫn còn,\n' +
          'Dù cuộc sống có bao nhiêu thay đổi.\n' +
          'Hãy giữ gìn những kỷ niệm đẹp,\n' +
          'Tình bạn sẽ mãi mãi trong tim ta.',
      },
    ],
  },
  {
    id: 6,
    image:
      'https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/062023/tha-dieu_20230607205708.jpg',
    type: ETypeData.LIBRARY,
    title: 'Bài Văn Về Ước Mơ',
    description:
      'Ước mơ là động lực để ta vươn tới tương lai.',
    body: [
      {
        title: 'Ước Mơ',
        content:
          'Ước mơ là ánh sáng dẫn đường,\n' +
          'Giúp ta vượt qua mọi thử thách.\n' +
          'Hãy tin vào bản thân, đừng từ bỏ,\n' +
          'Ước mơ sẽ trở thành hiện thực.',
      },
      {
        title: 'Khát Vọng',
        content:
          'Khát vọng vươn xa, chạm tới ước mơ,\n' +
          'Dù đường dài, ta vẫn không ngại.\n' +
          'Mỗi bước đi là một hành trình,\n' +
          'Hãy sống hết mình, đừng chần chừ.',
      },
      {
        title: 'Sự Nỗ Lực',
        content:
          'Nỗ lực không ngừng nghỉ, là chìa khóa,\n' +
          'Giúp ta mở ra cánh cửa thành công.\n' +
          'Hãy kiên trì, đừng bao giờ từ bỏ,\n' +
          'Ước mơ sẽ đến, chỉ cần ta cố gắng.',
      },
      {
        title: 'Tương Lai',
        content:
          'Tương lai tươi sáng bắt đầu từ ước mơ,\n' +
          'Hãy dũng cảm theo đuổi những gì mình muốn.\n' +
          'Dù có khó khăn, đừng từ bỏ,\n' +
          'Bởi vì ước mơ sẽ dẫn lối cho ta.',
      },
      {
        title: 'Sự Tin Tưởng',
        content:
          'Tin tưởng vào bản thân là điều quan trọng,\n' +
          'Giúp ta vượt qua mọi rào cản.\n' +
          'Hãy luôn tin rằng mình có thể,\n' +
          'Ước mơ sẽ trở thành hiện thực.',
      },
      {
        title: 'Hành Trình',
        content:
          'Hành trình theo đuổi ước mơ không dễ,\n' +
          'Nhưng mỗi bước đi là một trải nghiệm.\n' +
          'Hãy trân trọng từng khoảnh khắc,\n' +
          'Bởi vì đó là những gì làm nên cuộc sống.',
      },
    ],
  },
]

export const totalData = [...technologyData, ...exercisesData, ...newsData]

