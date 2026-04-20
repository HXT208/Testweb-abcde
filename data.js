const pcErrors = [
    {
        keywords: ["laptop không lên nguồn", "pc bật không lên", "máy tính không khởi động", "quạt cpu không quay", "nhấn nguồn không phản hồi", "laptop im re không lên", "lỗi không lên nguồn laptop"],
        name: "Không lên nguồn (No Power)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Nhấn nút nguồn không có tín hiệu. Quạt không quay, đèn LED báo nguồn không sáng.", 
        ],
        diagnosisSteps: [
            "Kiểm tra ổ cắm, dây cáp nguồn.",
            "Kiểm tra pin (laptop) / công tắc PSU (desktop).",
            "Đo nguồn sạc/PSU.",
            "Kiểm tra IC nguồn trên Mainboard.",
            
        ],
        fix: [
            "Cắm lại cáp, đổi ổ điện.",
            "Tháo pin/rút điện, nhấn giữ nút nguồn 30s để xả tĩnh điện, cắm điện thử lại.",
            "Thay bộ nguồn hoặc sạc khác.",
            "Cảnh báo: Rút điện hoàn toàn trước khi mở thùng máy tính. Không tự ý mở hộp nguồn (PSU) vì tụ điện bên trong lưu điện áp cao có thể giật chết người.",
            "Desktop: Thử chập dây xanh lá và dây đen trên jack 24-pin để test nguồn sống hay chết.",
            "Laptop: Nếu xả tĩnh điện không được, có thể do chập nguồn tụ gốm hoặc IC nguồn, cần mang ra trung tâm có máy khò hàn.",
        ],
        image: "def", 
        audio: "def", 
        video: "def" 
    },
    {
        keywords: [ "explorer.exe windows 11 lỗi",  "desktop nhấp nháy liên tục"
,  "start menu không mở được"],
        name: "Có nguồn nhưng không lên hình ảnh",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Máy có tiếng quạt quay, đèn nguồn sáng nhưng màn hình đen thui, không hiện logo.",
        ],
        diagnosisSteps: [
            "Chờ 1-2 phút xem có xuất hình chậm không.",
            "Nhìn đèn phím Capslock/Numlock có sáng khi nhấn không.",
            "Kiểm tra cáp xuất hình ảnh.",
            "Kiểm tra RAM, VGA.",

        ],
        fix: [
            "Rút cáp nguồn, tháo RAM dùng tẩy chà sạch chân đồng, lắp lại vào mainboard.",
            "Tháo pin CMOS, đợi 5 phút để reset BIOS rồi lắp lại",
            "Tháo VGA rời, cắm cáp màn hình vào cổng onboard.",
            "Cảnh báo: Cầm linh kiện ở mép, tránh chạm vào chip để ngừa tĩnh điện (ESD).",
            "Nếu bấm Capslock đèn bàn phím sáng/tắt bình thường tức là máy đã boot vào Win nhưng hỏng cáp màn hoặc vỡ panel (thường gặp ở Laptop).",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
        {
        keywords: ["def", "def"],
        name: "Màn hình xanh chết chóc (BSOD)",
        category: "Hệ điều hành | Phần mềm | Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Đang dùng thì màn hình xanh hiện chữ trắng (kèm mã lỗi như CRITICAL_PROCESS_DIED), máy tự khởi động lại.",
        ],
        diagnosisSteps: [
            "Ghi lại mã lỗi Stop Code để tra lỗi.",
            "Nhớ lại phần mềm/driver vừa cài đặt.",
            "Kiểm tra nhiệt độ máy.",
            "Quét lỗi ổ cứng & RAM.",

        ],
        fix: [
            "Boot vào Safe Mode, gỡ driver/ứng dụng vừa cài.",
            "Mở CMD (Run as Admin) chạy lệnh sfc /scannow để sửa file hệ thống.",
            "Dùng Windows Memory Diagnostic kiểm tra RAM.",
            "Cài lại Windows nếu do lỗi hệ diều hành nặng.",
            "Dùng phần mềm BlueScreenView để đọc file minidump, tìm chính xác driver hoặc file .sys gây lỗi. Lỗi do phần cứng (RAM/SSD hỏng) thì cài lại Win vẫn sẽ bị BSOD.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
        {
        keywords: ["def", "def"],
        name: "Máy quá nhiệt, tự sập nguồn",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Máy chạy các tác vụ nặng (game, render) một lúc thì tiếng quạt rú to, máy rất nóng và đột ngột tắt.",
        ],
        diagnosisSteps: [
            "Dùng các phần mềm hỗ trợ xem nhiệt độ như HWMonitor, CoreTemp. (CPU/GPU > 90°C là báo động).",
            "Kiểm tra khe tản nhiệt có bụi bẩn không.",
            "Áp tai vào thùng máy tính nghe quạt có đang quay không.",

        ],
        fix: [
            "Tắt máy, tháo nắp lưng.",
            "Dùng chổi lông và bóng thổi bụi làm sạch khe tản nhiệt & cánh quạt.",
            "Lau sạch keo tản nhiệt cũ, tra keo tản nhiệt mới. Tránh tra quá nhiều keo tản nhiệt tràn ra bo mạch.",
            "Desktop: Xử lý dễ dàng, có thể lắp thêm quạt case.",
	        "Laptop: Phức tạp hơn do ốc vít nhỏ, ngầm.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
        {
        keywords: ["def", "def"],
        name: "Không nhận ổ cứng (Boot Device Not Found)",
        category: "Phần cứng | Hệ điều hành",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Khởi động máy hiện dòng chữ 'No Bootable Device' hoặc 'Insert Boot Media'.",
        ],
        diagnosisSteps: [
            "Vào BIOS kiểm tra xem mainboard có nhận tên ổ cứng không.",
            "Kiểm tra chế độ boot (UEFI/Legacy).",
            "Kiểm tra cáp kết nối vật lý.",

        ],
        fix: [
            "Chuyển lại chuẩn Boot (UEFI/Legacy) trong BIOS cho đúng với chuẩn cài Win cũ.",
            "Tháo nắp máy, cắm lại cáp SATA/Nguồn hoặc tháo lắp lại ổ NVMe/M.2.",
            "Thay ổ cứng mới và cài lại hệ điều hành nếu ổ cũ đã chết cơ/cháy chip.",
            "Nếu trong BIOS nhận ổ cứng nhưng không boot được, hãy dùng USB WinPE để nạp lại MBR/EFI Boot loader.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
        {
        keywords: ["def", "def"],
        name: "Lỗi Full Disk 100% / Chậm, giật lag",
        category: "Hệ điều hành | Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Khởi động lâu, thao tác mở ứng dụng chậm chạp, Task Manager báo Disk liên tục ở mức 100%.",
        ],
        diagnosisSteps: [
            "Mở Task Manager kiểm tra tiến trình nào ngốn Disk/CPU.",
            "Kiểm tra dung lượng trống ổ C.",
            "Kiểm tra tình trạng sức khỏe ổ cứng.",

        ],
        fix: [
            "Nâng cấp từ ổ HDD cơ học lên ổ SSD (khắc phục triệt để nhất).",
            "Tắt các dịch không cần thiết hoặc ít sử dụng trong trong services.msc.",
            "Tắt các ứng dụng khởi động cùng Windows (Startup).",
            "Lỗi này 90% xảy ra trên các máy tính cũ vẫn dùng ổ HDD chạy Windows 10/1 Dùng phần mềm CrystalDiskInfo để kiểm tra xem ổ cứng có bị Bad Sector/Caution không.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
        {
        keywords: ["def", "def"],
        name: "Bàn phím không nhận / Loạn phím",
        category: "Phần cứng | Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Gõ một phím ra phím khác, máy kêu tít tít liên tục khi khởi động, hoặc liệt một số phím cụ thể.",
        ],
        diagnosisSteps: [
            "Cắm thử bàn phím rời qua cổng USB xem có bị không (để loại trừ lỗi do hệ điều hành).",
            "Boot vào WinPE hoặc BIOS để test phím môi trường ngoài.",
            "Kiểm tra cáp tín hiệu bàn phím.",

        ],
        fix: [
            "Cập nhật hoặc xóa driver bàn phím trong Device Manager và khởi động lại.",
            "Tháo cáp bàn phím (laptop) lau sạch chân tiếp xúc bằng cồn 90 độ và cắm lại.",
            "Thay nguyên cụm bàn phím nếu bị chập/đứt mạch.",
            "Laptop: Phím liệt/chập đa số do môi trường ẩm ướt hoặc bị đổ nước. Gặp tình trạng này phải thay phím mới, chi phí sửa mạch phím cao và không bền. Phần mềm test: Keyboard Test Utility.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
         {
        keywords: ["def", "def"],
        name: "Mất kết nối mạng / Không thấy Wi-Fi",
        category: "Hệ điều hành | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Biểu tượng mạng có dấu X đỏ, không tìm thấy bất kỳ mạng Wi-Fi nào, mất luôn icon Wi-Fi.",
        ],
        diagnosisSteps: [
            "Kiểm tra phím cứng/công tắc tắt bật Wi-Fi (Chế độ máy bay).",
            "Kiểm tra driver trong Device Manager (có dấu chấm than vàng không).",
            "Kiểm tra router/modem nhà mạng.",

        ],
        fix: [
            "Tắt/bật lại chế độ máy bay",
            "Chọn mạng -> Forget (Quên) và nhập lại mật khẩu.",
            "Tải driver Wi-Fi (LAN) chuẩn từ trang chủ hãng cài lại.",
            "Tháo lắp lại card Wi-Fi, vệ sinh hai đầu dây anten.",
            "Có trường hợp Windows tự update làm xung đột driver card mạng. Dùng tính năng Network Reset trong Settings của Windows 10/11 rất hiệu quả.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
     {
        keywords: ["def", "def"],
        name: "Màn hình sọc ngang dọc, nhòe màu",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Màn hình có các đường kẻ sọc, màu sắc hiển thị sai (chỉ có màu hồng/xanh), hình ảnh bị xé (artifacts).",
        ],
        diagnosisSteps: [
            "Lấy tay ấn nhẹ vào viền màn hình xem sọc có thay đổi không.",
            "Xuất hình ra màn hình rời (Tivi/Monitor) qua cổng HDMI.",

        ],
        fix: [
            "Nếu xuất hình ra màn rời hình ảnh BÌNH THƯỜNG -> Lỗi do màn hình chính hoặc cáp tín hiệu -> Thay cáp hoặc thay màn hình mới.",
            "Nếu xuất màn rời cũng bị sọc -> Lỗi chip VGA.",
            "CẢNH BÁO: Không tự đóng/hấp lại chip VGA bằng máy sấy tóc, sẽ làm hỏng mainboard.",
            "Lỗi VGA thường yêu cầu kỹ thuật viên có máy đóng chip BGA chuyên dụng. Lỗi sọc màn (chết điểm ảnh/đứt rập) không thể sửa, bắt buộc phải thay màn hình mới.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
     {
        keywords: ["def", "def"],
        name: "Thiết bị ngoại vi (USB, chuột) chập chờn",
        category: "Phần mềm | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Cắm USB, chuột, tai nghe vào máy nhưng không có phản hồi, báo 'USB Device Not Recognized'.",
        ],
        diagnosisSteps: [
            "Đổi cổng USB khác (chuyển từ cổng trước ra cổng sau mainboard).",
            "Cắm thiết bị đó sang máy tính khác xem có chạy không.",
            "Kiểm tra cổng vật lý có bị gỉ sét, cong vênh không.",

        ],
        fix: [
            "Rút ra cắm lại từ từ, đảm bảo tiếp xúc tốt.",
            "Vào Device Manager, tìm mục Universal Serial Bus controllers, chọn Uninstall Device, sau đó Restart máy.",
            "Dùng RP7/Cồn xịt vệ sinh ngàm cắm (nhớ tắt máy ngắt điện trước).",
            "Ghi chú: Desktop: Các cổng USB mặt trước case thường hay hỏng cáp nối hoặc tụt áp, nên ưu tiên cắm các cổng USB phía sau Mainboard. Nếu thiết bị sang máy khác vẫn lỗi thì thay thiết bị mới.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
     {
        keywords: ["def", "def"],
        name: "Sai ngày giờ hệ thống liên tục (Lỗi pin CMOS)",
        category: "Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Khởi động máy hiện cảnh báo 'CMOS Checksum Error' hoặc yêu cầu bấm F1/F2 để tiếp tục. Ngày giờ trên Windows luôn bị lùi về quá khứ, không truy cập được nhiều trang web (trình duyệt báo lỗi chứng chỉ bảo mật SSL).",
        ],
        diagnosisSteps: [
            "Chỉnh lại đúng ngày giờ trong Windows.",
            "Tắt máy, rút hẳn dây điện (hoặc tháo pin laptop) khoảng 10 phút.",
            "Cắm điện bật lại xem giờ có bị sai tiếp không.",

        ],
        fix: [
            "Mở nắp case/máy.",
            "Tìm viên pin tròn (chuẩn CR2032) trên Mainboard.",
            "Dùng móng tay hoặc vật vát mỏng nẩy nhẹ lẫy kim loại để lấy pin cũ ra.",
            "Lắp pin CR2032 mới vào. Bật máy, vào BIOS cài đặt lại ngày giờ và lưu lại (Save & Exit).",
            "Desktop: Rất dễ tự thay.",
            "Laptop: Tùy dòng máy, có dòng pin CMOS nằm ngay dưới nắp RAM, nhưng có dòng phải tháo toàn bộ mainboard mới thấy.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
     {
        keywords: ["def", "def"],
        name: "Treo cứng máy (Freeze) không hiện màn hình xanh",
        category: "Phần cứng | Hệ điều hành",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Đang sử dụng bình thường thì hình ảnh đứng im, chuột không di chuyển được, bấm phím Capslock/Numlock đèn không sáng tắt, âm thanh (nếu đang phát) bị kẹt lại kêu 'rè rè' kéo dài vô tận.",
        ],
        diagnosisSteps: [
            "Chờ 1-2 phút xem máy có tự thoát treo không.",
            "Kiểm tra nhiệt độ CPU/VGA xem có quá ngưỡng không.",
            "Kiểm tra sức khỏe ổ cứng (Bad Sector).",
            "Test lại RAM.",

        ],
        fix: [
            "Nhấn giữ nút nguồn (Power) 5-10 giây để tắt ép (Hard reset), sau đó bật lại.",
            "Nếu do quá nhiệt: Vệ sinh máy, tra keo tản nhiệt.",
            "Nếu do RAM: Tháo RAM ra vệ sinh chân cắm.",
            "Nếu do ổ cứng: Sao lưu dữ liệu ngay lập tức và thay ổ mới.",
            "Ghi chú: Khác với lỗi BSOD (thường do xung đột phần mềm/driver), lỗi treo cứng này 80% liên quan đến phần cứng đang xuống cấp, đặc biệt là ổ cứng bị Bad Sector vật lý nặng khiến hệ thống không thể đọc/ghi dữ liệu.", 
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Mất âm thanh hoặc loa bị rè",
        category: "Phần cứng | Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Biểu tượng loa có dấu x đỏ báo 'No Audio Output Device is installed', hoặc có âm thanh nhưng nghe lẹt xẹt, xè xè rất chói tai.",
        ],
        diagnosisSteps: [
            "Cắm tai nghe (jack 3.5mm) vào xem tai nghe có tiếng không. Nếu tai nghe có mà loa ngoài không có -> Hỏng loa ngoài.",
            "Nếu biểu tượng loa gạch chéo -> Kiểm tra Driver hoặc Audio Service.",

        ],
        fix: [
            "Chuột phải vào biểu tượng loa -> Chọn Troubleshoot sound problems để Windows tự sửa lỗi service.",
            "Vào Device Manager, gỡ driver ‘Realtek High Definition Audio’ (hoặc tương tự) và khởi động lại máy để nạp lại.",
            "Nếu loa bị rè vật lý: Mở máy và kiểm tra xem có mạt sắt/bụi dính vào màng loa không.",
            "Ghi chú:Laptop: Lỗi rách màng loa cực kỳ phổ biến do thói quen mở Max Volume (100%) trong thời gian dài. Rách màng thì bắt buộc phải thay cụm loa mới, giải pháp tạm thời là dùng tai nghe hoặc loa Bluetooth.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Cắm sạc nhưng không vào pin (Plugged in, not charging)",
        category: "Phần cứng | Hệ điều hành",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Chỉ xuất hiện trên Laptop. Biểu tượng pin ở góc màn hình nhận sạc nhưng phần trăm pin đứng im, rút cáp sạc ra là máy tắt phụp lập tức.",
        ],
        diagnosisSteps: [
            "Thử dùng một củ sạc cùng hãng (đủ công suất) khác để cắm vào.",
            "Dùng phần mềm BatteryMon hoặc lệnh powercfg /batteryreport để xem độ chai pin (Wear Level).",
            "Kiểm tra xem máy có đang dùng phần mềm giới hạn ngưỡng sạc của hãng (như ASUS Battery Health Charging, Lenovo Vantage) không.",

        ],
        fix: [
            "Vào Device Manager -> Batteries -> Chuột phải vào Microsoft ACPI-Compliant Control Method Battery -> Uninstall Device. Sau đó Restart máy để Windows nhận diện lại pin.",
            "Nếu mạch pin khóa hoặc cell pin đã chết (Wear Level > 80%): Bắt buộc thay pin mới.",
            "CẢNH BÁO:</b> Tuyệt đối không đâm, chọc hay bóp méo viên pin nếu thấy nó có dấu hiệu phồng rộp đẩy bung vỏ máy (nguy cơ cháy nổ lithium cực cao).",
            "Ghi chú: Nhiều trường hợp không hỏng pin mà hỏng mạch sạc trên Mainboard, kỹ thuật viên cần dùng đồng hồ đo áp để xác định.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Quạt tản nhiệt kêu lạch cạch, rú to bất thường",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Quạt kêu rất to ngay cả khi không chạy ứng dụng nặng, kèm theo âm thanh lạch cạch hoặc rít lên như động cơ. Máy có dấu hiệu rung nhẹ.",
        ],
        diagnosisSteps: [
            "Nghiêng nhẹ máy, nếu tiếng lạch cạch thay đổi âm lượng/tần số -> Trục quạt đã mòn hoặc rụng bi.",
            "Nhìn vào khe tản nhiệt xem có rác, tóc mây hay côn trùng lọt vào cạ vào cánh quạt không.",

        ],
        fix: [
            "Tháo nắp lưng máy.",
            "Tháo ốc cố định quạt, nhấc cụm quạt ra.",
            "Tách phần cánh quạt khỏi stator (nếu loại quạt cho phép tháo), lau sạch trục từ tính.",
            "Tra 1 giọt dầu bôi trơn máy khâu hoặc mỡ bò chịu nhiệt vào lỗ trục.",
            "•	Ghi chú: Không nên dùng bình xịt RP7 xịt thẳng vào tâm quạt. RP7 có tính tẩy rỉ sét sẽ đánh bay lớp mỡ bò mỏng nguyên bản, lúc mới xịt thì êm nhưng vài ngày sau quạt sẽ kêu to và kẹt chết trục luôn. Nên mua quạt mới để thay thế cho đồng bộ.",  
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Mất Bluetooth / Kết nối chập chờn",
        category: "Hệ điều hành | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Nút bật tắt Bluetooth trong Action Center biến mất. Kết nối tai nghe không dây hoặc chuột thỉnh thoảng bị khựng, đứt quãng.",
        ],
        diagnosisSteps: [
            "Tắt, bật lại tai nghe/chuột.",
            "Kiểm tra xem có thiết bị phát sóng mạnh nào (như lò vi sóng, router Wi-Fi 2.4GHz) đặt quá gần máy không (gây nhiễu sóng).",
            "Vào Device Manager kiểm tra driver Bluetooth có bị ẩn hoặc báo lỗi chấm than vàng không.",

        ],
        fix: [
            "Vào Windows Services (services.msc), tìm Bluetooth Support Service, chuột phải chọn Restart và đổi Startup type thành Automatic.",
            "Lên trang chủ của hãng laptop (hoặc hãng mainboard), tải driver Bluetooth tương ứng cài đè vào.",
            "Ghi chú: Card Bluetooth và card Wi-Fi thường được tích hợp chung trên một linh kiện vật lý (Card M.2 hoặc chuẩn PCIe). Nếu máy tính của bạn mất đồng thời cả Wi-Fi lẫn Bluetooth, 99% lỗi nằm ở phần cứng (card bị lỏng hoặc đã hỏng), cần tháo máy để vệ sinh chân đồng hoặc thay card mới.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Màn hình tối mờ (Chết đèn nền / Lỗi cao áp)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Màn hình tưởng chừng như màu đen (không lên hình), nhưng nếu lấy đèn pin điện thoại rọi sát vào màn hình thì vẫn thấy mờ mờ các icon và chuột đang di chuyển bên trong.",
        ],
        diagnosisSteps: [
            "Dùng đèn pin rọi vào góc màn hình để xác nhận có hình ảnh chìm bên trong không.",
            "Cắm xuất hình ra màn hình phụ (Tivi/Monitor), nếu màn phụ lên hình bình thường thì chắc chắn lỗi ở cụm màn hình chính.",

        ],
        fix: [
            "Kiểm tra lại cáp tín hiệu từ Mainboard lên Panel màn hình xem có lỏng/đứt gập không.",
            "Sửa mạch LED driver trên bo mạch (yêu cầu đo đạc linh kiện).",
            "Thay thế toàn bộ cụm Panel màn hình mới nếu bóng LED bên trong đã cháy.",
            "Ghi chú : Lỗi này rất dễ bị chẩn đoán nhầm thành ‘Chết VGA’ hoặc ‘Không lên hình’. Kỹ thuật viên non tay có thể đè Mainboard ra sửa oan.", 

        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Vòng lặp khởi động (Boot Loop / Automatic Repair)",
        category: "Hệ điều hành | Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Máy vừa lên logo Windows hoặc xoay vòng chấm bi được vài giây thì tự động tắt và khởi động lại. Hoặc máy liên tục hiện dòng chữ ‘Preparing Automatic Repair’ nhưng chạy mãi không xong, rồi lại reset.",
        ],
        diagnosisSteps: [
            "Rút toàn bộ USB, ổ cứng di động, thẻ nhớ ra khỏi máy (tránh máy boot nhầm thiết bị).",
            "Đưa máy vào môi trường WinPE (qua USB Boot) hoặc Windows Recovery Environment (WinRE).",

        ],
        fix: [
            "Trong WinRE, chọn Troubleshoot -> Advanced Options -> Uninstall Updates (nếu lỗi xảy ra ngay sau khi Windows tự update).",
            "Mở Command Prompt trong WinRE, chạy các lệnh sửa boot: bootrec /fixmbr, bootrec /fixboot, bootrec /rebuildbcd.",
            "Nếu file hệ thống hỏng quá nặng, tiến hành Cài lại Windows (nhớ dùng WinPE copy cứu dữ liệu ở ổ C trước).",
            "Ghi chú : 80% nguyên nhân do quá trình Windows Update đang diễn ra thì máy bị mất điện, hết pin sập nguồn, hoặc người dùng nôn nóng bấm nút nguồn tắt ép.", 
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Touchpad bị liệt, bấm không ăn (Chỉ Laptop)",
        category: "Phần cứng | Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Không thể dùng tay di chuột trên Touchpad, click trái/phải không có tác dụng. Cắm chuột dây qua cổng USB thì vẫn dùng bình thường.",
        ],
        diagnosisSteps: [
            "Nhìn kỹ phím hàng F (F1-F12) xem có biểu tượng Touchpad bị gạch chéo không.",
            "Vào Device Manager kiểm tra driver Mice and other pointing devices.",
            "Đặt máy trên mặt phẳng, nhìn ngang xem thân máy (khu vực kê tay) có bị cong vênh lên không.",

        ],
        fix: [
            "Bấm tổ hợp phím Fn + F(x) (phím có hình Touchpad) để mở khóa. Một số dòng HP chạm đúp vào góc trái trên cùng của Touchpad để mở.",
            "Gỡ driver Touchpad hiện tại và khởi động lại máy để Windows nạp lại.",
            "Nếu pin bị phồng đội lên Touchpad: Tháo ngay pin ra.",
            "CẢNH BÁO:</b> Khi pin phồng đẩy cứng Touchpad từ bên dưới, tuyệt đối không dùng tay ấn mạnh xuống Touchpad. Việc này có thể làm thủng cell pin gây cháy nổ lập tức.",
            "Ghi chú : Lên trang chủ hãng tải đúng driver I2C HID Device hoặc Synaptics / ELAN Pointing tùy model máy sẽ khắc phục triệt để lỗi phần mềm."
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Lỗi kẹt lệnh in / Không tìm thấy máy in LAN",
        category: "Hệ điều hành | Mạng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Bấm lệnh in (Ctrl+P) bình thường, không báo lỗi nhưng máy in im lìm. Hoặc biểu tượng máy in trong máy tính bị mờ xám (Offline).",
        ],
        diagnosisSteps: [
            "Xem đèn báo trên máy in có nháy đỏ không (hết giấy, kẹt giấy, hết mực).",
            "Ping địa chỉ IP của máy in xem máy tính có thông mạng với máy in không.",
            "Kiểm tra hàng đợi lệnh in (Print Queue) xem có file nào đang báo ‘Error’ cản đường các file sau không.",

        ],
        fix: [
            "Xóa lệnh in bị kẹt: Mở cửa sổ Print Queue -> Printer -> Cancel All Documents.",
            "Khởi động lại dịch vụ in: Bấm Win+R gõ services.msc, tìm đến Print Spooler, chuột phải chọn Restart. Tắt máy in đi bật lại.",
            "Đặt IP tĩnh (Static IP) cho máy in để tránh tình trạng modem đổi IP máy in mỗi ngày.",
            "Ghi chú : Lỗi kinh điển nhất của dân IT Support văn phòng (Helpdesk).",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Máy nhiễm Malware / Adware quảng cáo",
        category: "Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Trình duyệt web (Chrome/Edge) tự động nhảy sang trang web lạ (bet, cờ bạc, quảng cáo), góc phải màn hình liên tục hiện thông báo rác. CPU và RAM luôn ở mức cao dù không mở gì. Trình diệt virus có sẵn bị vô hiệu hóa.",
        ],
        diagnosisSteps: [
            "Vào phần Tiện ích mở rộng (Extensions) của trình duyệt xem có add-on lạ nào không thể xóa không.",
            "Mở Task Manager tìm các tiến trình tên lạ, tốn nhiều tài nguyên.",
            "abc",
        ],
        fix: [
            "Ngắt kết nối mạng ngay lập tức để chặn mã độc tải thêm dữ liệu hoặc gửi thông tin ra ngoài.",
            "Khởi động máy vào Safe Mode.",
            "Cài đặt các công cụ chuyên dụng như Malwarebytes Anti-Malware hoặc Kaspersky Virus Removal Tool (tải từ máy khác copy sang qua USB) để quét toàn bộ ổ cứng.",
            "Reset lại thiết lập mặc định của trình duyệt web.",
            "Ghi chú : Nếu dính biến thể nặng nhất là Ransomware (mã hóa toàn bộ file Word, Excel, JPG thành đuôi lạ và đòi tiền chuộc), KHÔNG nên chuyển tiền vì 99% sẽ mất cả tiền lẫn dữ liệu. Việc duy nhất có thể làm là cài lại trắng Windows và format ổ cứng.", 
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Gãy bản lề, bung chân ốc (Chỉ Laptop)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Gập mở màn hình máy tính cảm thấy rất nặng, cứng hoặc lỏng lẻo bất thường. Nghe tiếng lách cách nhựa gãy bên trong. Khu vực góc màn hình hoặc mép tản nhiệt bị bung hở hoác, thấy rõ bản lề sắt trồi lên",
        ],
        diagnosisSteps: [
            "Ngừng ngay lập tức việc cố sức gập/mở màn hình thêm nữa để tránh cáp màn hình bị đứt hoặc bể luôn kính màn hình.",
            "Quan sát các góc cạnh máy xem nhựa vỏ máy đã vỡ vụn chưa.",
        ],
        fix: [
            "Tháo toàn bộ vỏ máy.",
            "Dùng kìm nới lỏng nhẹ ốc hãm của trục bản lề sắt (để màn hình gập mở nhẹ tay hơn).",
            "Dùng keo AB (Keo Epoxy) chuyên dụng trộn lẫn để đúc và tạo hình lại các chân ốc nhựa đã bị nhổ rễ trên vỏ máy. Chờ 12-24h cho keo chết cứng rồi mới bắt ốc lại.",
            "Nếu vỏ vỡ nát, bắt buộc phải đặt mua mặt vỏ (Mặt A, B, C, D) tương ứng để thay thế.",
            "CẢNH BÁO:</b> TUYỆT ĐỐI không dùng keo 502 (keo dán sắt) đổ trực tiếp vào khe hở bản lề. Keo 502 có tính giòn, không chịu lực xoắn được, đồng thời khi chảy lan vào bo mạch sẽ làm cháy chập linh kiện vĩnh viễn.", 
            "Ghi chú : Lỗi này rất phổ biến ở các dòng laptop vỏ nhựa phổ thông sau khoảng 2-3 năm sử dụng do lớp mỡ bôi trơn bản lề bị khô lại khiến trục thép bị kẹt cứng, sinh ra lực đòn bẩy bẻ gãy chân ốc nhựa mỏng manh.", 
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: " Màn hình nhấp nháy, giật rung (Screen Flickering)",
        category: "Hệ điều hành | Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Màn hình chớp tắt liên tục, icon trên desktop bị rung, hoặc có các dải sáng mờ chạy ngang màn hình.",
        ],
        diagnosisSteps: [
            "Bấm tổ hợp phím Ctrl + Shift + Esc để mở Task Manager.",
            "Nếu cửa sổ Task Manager CŨNG nhấp nháy -> Lỗi do cáp màn hình, panel màn hình hoặc Card VGA (phần cứng).",
            "Nếu cửa sổ Task Manager KHÔNG nhấp nháy mà phần nền phía sau nháy -> Lỗi do Driver VGA hoặc phần mềm không tương thích (phần mềm).",
        ],
        fix: [
            "Vào Device Manager, tìm Display adapters, chuột phải vào card đồ họa chọn Roll Back Driver (nếu vừa update bị lỗi) hoặc Update Driver.",
            "Nhấp chuột phải vào Desktop -> Display settings -> Advanced display, thử chỉnh lại Tần số quét (Refresh Rate) về 60Hz.",
            "Nếu do cáp/phần cứng: Cần tháo máy vệ sinh đầu cáp tín hiệu hoặc thay cáp mới.",
            "Ghi chú : Đây là lỗi kinh điển của Windows 10/11 khi hệ điều hành tự động cập nhật sai phiên bản driver VGA chạy ngầm.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Laptop bị đổ nước / chất lỏng (Trường hợp khẩn cấp)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Nước lọc, cà phê, trà vô tình đổ trực tiếp lên bàn phím hoặc khe tản nhiệt của laptop đang hoạt động.",
        ],
        diagnosisSteps: [
            "KHÔNG ĐƯỢC KIỂM TRA BOOT MÁY! Mọi thao tác cấp nguồn lúc này đều dẫn đến chập cháy linh kiện ngay lập tức.",
        ],
        fix: [
            "Rút cáp sạc ngay lập tức.",
            "Nhấn và giữ lì nút Nguồn (Power) trong khoảng 10 giây để tắt nóng máy.",
            "Tháo pin ra khỏi máy (nếu là dạng pin tháo rời bên ngoài).",
            "Lật úp máy tính xuống theo hình chữ V (như túp lều) để nước chảy ngược ra ngoài, dùng khăn khô thấm phần nước đọng.",
            "Mang máy đến trung tâm sửa chữa sớm nhất để kỹ thuật viên tháo mainboard ra sấy chuyên dụng và rửa bằng dung dịch tẩy cặn mốc.", 
            "CẢNH BÁO:</b> TUYỆT ĐỐI KHÔNG dùng máy sấy tóc thổi hơi nóng vào bàn phím. Gió nóng sẽ làm chảy teo các màng mạch nhựa bên dưới phím và thổi nước lọt sâu hơn vào CPU/VGA. Không bỏ máy vào thùng gạo vì bụi gạo lọt vào khe tản nhiệt sẽ gây hại thêm.", 
            "Ghi chú : Khả năng cứu sống máy phụ thuộc hoàn toàn vào tốc độ bạn rút điện và tắt nguồn.", 
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Quên mật khẩu đăng nhập Windows / Mất mã PIN",
        category: "Hệ điều hành",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Bật máy lên nhưng không thể vào màn hình Desktop do quên Password/PIN, nhập sai nhiều lần máy yêu cầu chờ 2 tiếng.",
        ],
        diagnosisSteps: [
            "Nhìn dưới ô nhập mật khẩu xem đó là tài khoản Local (tài khoản cục bộ) hay Microsoft Account (cần email @outlook/gmail).",
            "Nếu là Microsoft Account, chỉ cần dùng điện thoại truy cập trang chủ Microsoft để ‘Forgot Password’ và đổi mật khẩu mới (máy tính phải đang có mạng).",
        ],
        fix: [
            "Dùng một máy tính khác tạo USB Boot (WinPE).",
            "Cắm USB vào máy bị khóa, boot vào môi trường WinPE.",
            "Mở công cụ Password Changer hoặc NTPWEdit (có sẵn trong WinPE), chọn file SAM của ổ C, tìm đến tên user bị khóa và chọn Clear Password hoặc Unlock.",
            "Khởi động lại máy, Windows sẽ cho phép vào thẳng mà không cần pass.",
            "Ghi chú : Thao tác dùng USB Boot xóa pass chỉ có tác dụng khi ổ cứng KHÔNG bị mã hóa BitLocker. Nếu ổ cứng đã bị khóa BitLocker mà không nhớ cả Key lẫn Pass thì mất 100% dữ liệu, bắt buộc cài lại Windows trắng.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Micro không hoạt động / Đầu dây bên kia không nghe thấy",
        category: "Phần mềm | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Gọi Zalo, Google Meet, Zoom nhưng người khác không nghe thấy bạn nói gì, hoặc tiếng rất bé, rè.",
        ],
        diagnosisSteps: [
            "Nhìn trên bàn phím (hàng F1-F12) xem có phím nào biểu tượng Micro bị sáng đèn không (đang bị Mute cứng).",
            "Kiểm tra phần Sound settings -> mục Input xem thanh âm lượng có nhảy khi bạn nói không.",
        ],
        fix: [
            "Mở Settings -> Privacy & security -> Microphone. Bật On phần Microphone access và Let apps access your microphone.",
            "Trong phần mềm gọi điện (Zalo/Zoom), vào mục Cài đặt thiết bị -> Đảm bảo chọn đúng tên thiết bị Micro (vd: Microphone Array) thay vì thiết bị ảo.",
            "Cài lại driver Audio.",
            "•	Ghi chú : Windows 10/11 có cơ chế bảo mật tự động chặn quyền dùng Micro của ứng dụng. Phần lớn người dùng tưởng hỏng phần cứng nhưng thực tế chỉ cần gạt nút On trong Privacy là xong.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Cắm tai nghe 3.5mm nhưng loa ngoài vẫn kêu",
        category: "Hệ điều hành | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Đã cắm jack tai nghe vào lỗ 3.5mm nhưng âm thanh vẫn phát bô bô từ loa ngoài laptop, hoặc tai nghe và loa phát song song cùng lúc.",
        ],
        diagnosisSteps: [
            "Rút tai nghe ra, cắm lại dứt khoát một lần nữa. Xoay nhẹ chân jack cắm.",
            "Cắm thử tai nghe sang điện thoại xem tai nghe có hỏng không.",
            "abc",
        ],
        fix: [
            "Mở phần mềm Realtek Audio Console (hoặc Waves MaxxAudio tùy hãng). Tìm biểu tượng hình bánh răng (Settings), chọn mục ‘Disable front panel jack detection’ hoặc tick vào ‘Mute the rear output device, when a front headphone plugged in’.",
            "Cập nhật lại driver Audio qua trang chủ hãng.",
            "Dùng tăm bông nhỏ nhúng cồn 90 độ ngoáy nhẹ vào trong lỗ cắm 3.5mm để làm sạch tiếp điểm.",
            "•	Ghi chú : Lỗi này rất thường gặp do lẫy đồng (công tắc ngắt mạch vật lý) bên trong lỗ cắm 3.5mm bị kẹt/dính mạt bụi không nẩy lên được, khiến máy tính không nhận diện được hành động cắm tai nghe của người dùng.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Chuột bị lỗi click đúp (Double-click) / Lăn chuột bị loạn",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Nhấn chuột trái 1 lần để chọn file nhưng máy tự hiểu là 2 lần (mở luôn file). Cuộn con lăn chuột xuống dưới nhưng trang web lại nảy giật lên trên.",
        ],
        diagnosisSteps: [
            "Cắm chuột sang một máy tính khác để thử, nếu vẫn bị thì chắc chắn lỗi vật lý của chuột.",
            "Vào Mouse Settings trên Windows kiểm tra xem tốc độ Double-click speed có đang bị kéo nhanh quá mức không.",
        ],
        fix: [
            "Tạm thời: Tháo ốc dưới gầm chuột, mở vỏ. Nhỏ 1 giọt dung dịch RP7 (hoặc cồn) vào khe nhỏ của nút bấm (Switch) và bộ phận lăn (Encoder). Bấm/lăn liên tục 50 lần để đánh bay rỉ sét bám trên lá đồng.",
            "Triệt để: Mua Switch (ví dụ hiệu Omron, Huano) và bộ Encoder mới, dùng mỏ hàn chì nhổ chân linh kiện cũ ra và thay thế vào bo mạch chuột.",
            "Ghi chú : Đây là lỗi vật lý do lá tiếp điểm bằng đồng bên trong chuột bị ô-xi hóa, xảy ra ở mọi loại chuột từ văn phòng đến gaming đắt tiền.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "USB / Thẻ nhớ báo lỗi ‘The disk is write protected’",
        category: "Phần cứng | Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Cắm USB vào máy, đọc/copy dữ liệu ra thì được, nhưng xóa file, format hay copy file mới vào thì máy báo lỗi ‘Write protected’ (Bảo vệ chống ghi).",
        ],
        diagnosisSteps: [
            "Kiểm tra trên thân USB hoặc vỏ thẻ nhớ SD có nút gạt vật lý (Lock) bị gạt nhầm không.",
            "Quét virus toàn bộ USB.",
        ],
        fix: [
            "Mở CMD (dưới quyền Admin), gõ lần lượt các lệnh: diskpart -> list disk -> select disk (số thứ tự USB) -> attributes disk clear readonly -> exit.",
            "Nhấn Win + R, gõ regedit. Tìm đến đường dẫn HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\StorageDevicePolicies. Chỉnh giá trị WriteProtect thành 0.",
            "Ghi chú : Nếu bạn đã dùng lệnh Diskpart và cả các phần mềm Low-Level Format nhưng USB vẫn báo ‘Write protected’, điều đó có nghĩa là chip nhớ NAND Flash bên trong đã hỏng. Chip nhớ có tính năng tự động khóa (chỉ đọc) khi phát hiện sắp ‘chết’ để bảo vệ dữ liệu còn lại bên trong. Lúc này bắt buộc phải mua USB mới.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Máy in in ra giấy trắng tinh hoặc sọc đen vệt dài",
        category: "Phần cứng ",
        difficulty: "•	Triệu chứng thực tế: Có lệnh in, máy kéo giấy ra bình thường nhưng tờ giấy trắng tinh không có hạt mực nào. Hoặc bản in ra bị một vệt đen xì, đậm kéo dài từ trên xuống dưới tờ giấy.",
        estimatedCost: "def",
        symptoms: [
            "Có lệnh in, máy kéo giấy ra bình thường nhưng tờ giấy trắng tinh không có hạt mực nào. Hoặc bản in ra bị một vệt đen xì, đậm kéo dài từ trên xuống dưới tờ giấy.",
        ],
        diagnosisSteps: [
            "Mở nắp máy in, rút hộp mực (Cartridge) ra ngoài kiểm tra.",
            "Kiểm tra xem hộp mực còn mực hay không.",
        ],
        fix: [
            "Bản in trắng tinh: Nguyên nhân thường do mất tiếp mát trục từ, hoặc đứt cáp/hộp quang không bắn được tia laser. Thử thay một hộp mực khác để loại trừ.",
            "Bản in có sọc đen kéo dài: 100% do xước Trống in (Drum - thanh nhôm hình trụ màu xanh lá/xanh dương) hoặc gạt mực bị mẻ/rách. Cần mua Trống mới thay vào hộp mực.",
            "Ghi chú : Việc tự tháo hộp mực máy in laser đòi hỏi sự khéo léo, nếu không sẽ làm bung lò xo hoặc làm đổ bột mực thải ra ngoài rất độc hại. Khuyến nghị người dùng chỉ nên tự xử lý bằng cách mua hộp mực thay thế, còn việc sửa chữa sâu nên giao cho kỹ thuật viên máy in.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Không xuất được hình ra máy chiếu / Màn hình ngoài",
        category: "Hệ điều hành | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Cắm cáp HDMI/VGA từ máy tính sang máy chiếu hoặc màn hình phụ nhưng bên kia báo ‘No Signal’. Máy tính không có hiện tượng chớp nhận màn hình.",
        ],
        diagnosisSteps: [
            "Kiểm tra máy chiếu đã chọn đúng cổng Input (Source) chưa (Ví dụ: Cắm HDMI 1 nhưng máy chiếu đang để HDMI 2). ",
            "Nhấn tổ hợp phím xuất hình của Windows.",
            "Thử đổi sợi cáp khác để loại trừ lỗi đứt cáp ngầm.",
        ],
        fix: [
            "Bấm tổ hợp phím Windows + P, chọn Duplicate (nhân bản) hoặc Extend (mở rộng).",
            "Rút cáp ra, dùng cồn vệ sinh sạch các chân đồng ở cổng HDMI/VGA trên máy tính rồi cắm lại dứt khoát.",
            "Vào Display Settings, nếu thấy 2 màn hình nhưng màn số 2 bị nhỏ lại, hãy chỉnh lại độ phân giải (Resolution) cho phù hợp với máy chiếu.",
            "•	Ghi chú : Lỗi kinh điển trong các phòng họp. Nhiều người dùng cắm cáp xong ngồi chờ hình lên, nhưng thực tế Windows đôi khi không tự động kích hoạt cổng xuất hình mà cần lệnh Win+P thủ công.",
        ],
        image: "def", 
        audio: "def", 
        video: "https://www.youtube.com/embed/9kzE8isXlQY?si=3cEQTMc-GsXNWwyj"
    },
      {
        keywords: ["def", "def"],
        name: "Laptop vỏ nhôm bị rò điện, giật tê tay",
        category: "Phần cứng ",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Chạm tay vào bề mặt kim loại của laptop (như MacBook, Dell XPS, HP Envy) có cảm giác rung râm ran, tê tê như kiến bò, đặc biệt là ở chỗ kê tay. Rút sạc ra thì hết.",
        ],
        diagnosisSteps: [
            "Chân bạn có đang chạm trực tiếp xuống nền đất gạch/xi măng không?",
            "Củ sạc đang dùng là loại phích cắm 2 chấu hay 3 chấu?",
        ],
        fix: [
            "Tạm thời: Đảo ngược chiều phích cắm điện của cục sạc vào ổ cắm. Mang dép xốp hoặc lót thảm cao su dưới chân khi sử dụng máy.",
            "Triệt để: Thay phích cắm sạc sang loại 3 chấu (nếu củ sạc hỗ trợ) và cắm vào ổ điện có dây tiếp địa (dây nối đất) của tòa nhà.",
            "Có thể tự chế dây tiếp địa bằng cách buộc 1 sợi dây đồng vào ốc vít trên thân máy/vỏ case, đầu còn lại đóng đinh ghim xuống tường/đất.",
            "Ghi chú : Đây KHÔNG PHẢI LỖI MÁY, mà là hiện tượng dòng rò điện từ (EMI) trên các thiết bị vỏ kim loại không được tiếp địa. Nguồn điện lưới Việt Nam đa số dùng ổ 2 chấu không có dây Max nên hiện tượng này cực kỳ phổ biến.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Mạng dây LAN báo ‘Unidentified Network’ (Chấm than vàng)",
        category: "Mạng | Hệ điều hành",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Cổng LAN trên máy sáng đèn chớp nháy bình thường, nhưng biểu tượng mạng hình máy tính ở góc phải có dấu chấm than vàng, báo ‘No Internet Access’.",
        ],
        diagnosisSteps: [
            "Kiểm tra xem các máy tính khác cắm chung cục switch/modem đó có vào được mạng không (loại trừ lỗi nhà mạng).",
            "Kiểm tra xem máy có đang bị set IP tĩnh (Static IP) sai dải mạng không.",
        ],
        fix: [
            "Chuột phải icon mạng -> Network & Internet Settings -> Change adapter options -> Chuột phải vào cổng Ethernet chọn Properties -> Chọn IPv4. Đảm bảo đang để tích ở ô ‘Obtain an IP address automatically’ (Nhận IP động).",
            "Mở CMD quyền Admin, chạy các lệnh làm mới mạng: ipconfig /release -> ipconfig /renew -> netsh winsock reset -> Khởi động lại máy tính.",
            "Ghi chú : Lỗi này do máy tính không nhận được IP từ cục Router cấp phát (lỗi DHCP) hoặc do bộ nhớ cache mạng của Windows bị kẹt.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Camera/Webcam bị đen hoặc báo lỗi 0xA00F4244",
        category: "Phần cứng | Hệ điều hành",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Mở phần mềm Camera trên Win hoặc dùng Zoom/Meet thì màn hình camera đen thui, có hình máy ảnh gạch chéo, hoặc báo lỗi ‘We can't find your camera’.",
        ],
        diagnosisSteps: [
            "Nhìn kỹ ngay trên mắt Camera vật lý xem có ‘Lẫy gạt bảo mật’ (Privacy Shutter) đang che lại không (dấu hiệu: thấy một chấm màu đỏ hoặc cam che trước ống kính).",
            "Tìm trên bàn phím (F1-F12) xem có phím tắt bật/tắt Camera cứng không.",
            "abc",
        ],
        fix: [
            "Gạt mở nắp che vật lý (thường gặp ở Lenovo ThinkPad, HP, Dell đời mới).",
            "Bấm tổ hợp Fn + Phím có hình Camera.",
            "Vào Settings -> Privacy & security -> Camera -> Bật On dòng Camera access.",
            "Vào Device Manager, tìm Cameras hoặc Imaging devices, chuột phải chọn Update driver.",
            "•	Ghi chú : Hơn 70% các ca báo lỗi hỏng Webcam hóa ra là do người dùng vô tình gạt nắp che bảo mật vật lý che mất ống kính, kỹ thuật viên cần chú ý điểm này trước khi tháo máy.", 
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Màn hình cảm ứng tự nhảy lung tung (Ghost Touch)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Triệu chứng thực tế: Laptop có màn hình cảm ứng tự động click liên tục vào một góc màn hình dù không có ai chạm vào. Chuột bị giật liên tục về một điểm khiến người dùng không thể làm việc.",
        ],
        diagnosisSteps: [
            "Lau sạch màn hình bằng khăn mềm và cồn chuyên dụng xem có hết không (loại trừ do mồ hôi/bụi ẩm).",
            "Nếu lau sạch vẫn bị, chắc chắn lớp cảm ứng (Touch Glass) đã bị lỗi điểm.",
        ],
        fix: [
            "Giải pháp tình thế (Rất hiệu quả): Vô hiệu hóa tính năng cảm ứng. Bấm Win+X -> Device Manager -> Mở rộng mục Human Interface Devices -> Chuột phải vào HID-compliant touch screen -> Chọn Disable device. (Sau khi Disable, máy sẽ dùng như laptop không cảm ứng bình thường).",
            "Khắc phục triệt để: Thay cụm màn hình kính cảm ứng mới (Chi phí thường rất đắt đỏ).",
            "Ghi chú : Lỗi phổ biến trên các dòng máy cảm ứng mỏng nhẹ (Dell XPS, Surface, HP Spectre) khi bị cấn móp nhẹ viền màn hình tạo áp lực lên mặt kính. Đa số người dùng chọn giải pháp Disable để tiết kiệm tiền.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Bị đòi mã khóa BitLocker (Màn hình xanh dương)",
        category: "Hệ điều hành | Bảo mật",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Bật máy lên không vào được Windows, hiện ngay một màn hình màu xanh dương có dòng chữ ‘BitLocker’ yêu cầu nhập một dãy số Recovery Key dài 48 chữ số.",
        ],
        diagnosisSteps: [
            "Xác định xem máy vừa được mang đi nâng cấp phần cứng (thay main, đổi TPM) hay vừa cập nhật BIOS xong không.",
            "Hỏi người dùng xem họ có nhớ tài khoản Microsoft (Email) đang đăng nhập trên máy tính này không.",
            "abc",
        ],
        fix: [
            "Lấy điện thoại hoặc máy tính khác, đăng nhập vào trang account.microsoft.com/devices/recoverykey bằng tài khoản Microsoft của người dùng đó.",
            "Tìm đúng tên máy tính, lấy dãy số 48 số nhập vào màn hình BitLocker.",
            "CẢNH BÁO:</b> Tính năng mã hóa ổ cứng của Windows 11 thường TỰ ĐỘNG BẬT ẩn. Nếu người dùng không có mã khóa và không nhớ tài khoản Microsoft, DỮ LIỆU SẼ MẤT VĨNH VIỄN 100%, không một kỹ thuật viên nào có thể bẻ khóa. Bắt buộc phải xóa sạch ổ cứng cài lại Win.",
            "Ghi chú : Lỗi này đang là ‘ác mộng’ của Helpdesk hiện nay. Luôn khuyên người dùng kiểm tra và lưu lại mã BitLocker ra giấy trước khi mang máy đi sửa hoặc cập nhật BIOS.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Lỗi Virtual Disk Service / Không gộp/chia được ổ cứng",
        category: " Hệ điều hành | Phân vùng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Vào Disk Management để chia thêm ổ D, nhưng khi bấm Shrink Volume hoặc Extend Volume thì các nút này bị mờ xám không bấm được, hoặc báo lỗi ‘Virtual Disk Service error’.",
        ],
        diagnosisSteps: [
            "Kiểm tra xem trên ổ đĩa có phân vùng Recovery xen giữa phân vùng C và vùng trống không.",
            "Kiểm tra System Protection có đang bật và chiếm dụng dung lượng làm file Pagefile/Hibernate không.",
        ],
        fix: [
            "Dùng phần mềm quản lý phân vùng chuyên dụng bên thứ 3 (như MiniTool Partition Wizard hoặc AOMEI Partition Assistant) để thay thế trình Disk Management mặc định của Windows.",
            "Nếu Shrink bị giới hạn do file hệ thống: Tắt System Restore, tắt Hibernate (powercfg -h off trong CMD), tắt Pagefile, sau đó khởi động lại và Shrink lại.",
            "Ghi chú : Công cụ Disk Management của Windows có cơ chế bảo vệ file rất cứng nhắc. Thường cứ cài MiniTool Partition Wizard là gộp/chia tùy ý cực kỳ nhanh chóng và an toàn.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Quạt tản nhiệt quay max tốc độ nhưng máy mát rượi",
        category: "Phần cứng (Lỗi Sensor)",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Bật nguồn máy lên là quạt tản nhiệt lập tức rú lên ở tốc độ 100% ồn ào không ngừng nghỉ. Tuy nhiên sờ vào vỏ máy và khe tản nhiệt thì gió thổi ra rất mát, kiểm tra phần mềm HWMonitor báo nhiệt CPU chỉ 40-50 độ.",
        ],
        diagnosisSteps: [
            "Cập nhật thử phiên bản BIOS mới nhất xem có vá lỗi quạt không.",
            "Kiểm tra xem máy có bị rơi rớt làm lỏng giắc cắm cảm biến nhiệt (Thermal Sensor) trên mainboard không.",
        ],
        fix: [
            "Vào BIOS, tìm mục Fan Control hoặc Cooling Policy, chuyển thử sang chế độ Quiet hoặc Balanced.",
            "Nếu lỗi phần cứng: Lỗi này thường do chết cảm biến nhiệt trên Mainboard, hoặc lỗi chip SIO (Super I/O) khiến máy hiểu nhầm là đang quá nhiệt nên kích ép quạt quay max tốc để bảo vệ. Cần đưa ra trung tâm để kỹ thuật viên đo đạc và thay chip I/O.",
            "•	Ghi chú : Một số dòng laptop Dell, nếu bạn cắm sạc pin không chính hãng (không nhận diện được công suất trong BIOS), máy cũng có tính năng tự động cho quạt quay max tốc độ và hạ xung nhịp CPU xuống thấp nhất để phòng cháy nổ.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Màn hình bị hở sáng cạnh viền (Backlight Bleeding)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Khi hiển thị hình nền màu đen (hoặc khi xem phim có dải đen trên/dưới), các góc cạnh viền màn hình xuất hiện các vệt sáng rực lên không đều nhau.",
        ],
        diagnosisSteps: [
            "Đưa máy vào phòng tối, mở một bức ảnh đen toàn màn hình.",
            "Dùng ngón tay ấn nhẹ vào viền màn hình khu vực bị sáng. Nếu ánh sáng thay đổi hoặc biến mất, nguyên nhân là do viền máy ép quá chặt vào panel.",
        ],
        fix: [
            "Tạm thời: Giảm độ sáng màn hình (Brightness) xuống mức vừa phải.",
            "Khắc phục vật lý: Tháo nắp viền màn hình (Bezel), nới lỏng các ốc vít bắt panel vào khung máy khoảng 1/4 vòng. Có thể lót thêm băng keo xốp mỏng cách ly.",
            "Nếu là lỗi cố hữu của tấm nền IPS rẻ tiền: Bắt buộc phải sống chung với lũ hoặc thay panel cao cấp hơn.",
            "•	Ghi chú : Lỗi hở sáng hầu như không ảnh hưởng đến tuổi thọ máy. Rất nhiều dòng Laptop Gaming sử dụng tấm nền IPS đều mắc bệnh này, hãng thường từ chối bảo hành nếu hở sáng ở mức độ nhẹ.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Bấm 1 phím ra nhiều ký tự / Dính phím (Key Chattering)",
        category: "Phần cứng | Hệ điều hành",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            " Gõ chữ ‘A’ một lần nhưng trên màn hình hiện ra ‘AA’ hoặc ‘AAA’. Xảy ra ở cả bàn phím cơ Desktop lẫn phím Laptop.",
        ],
        diagnosisSteps: [
            "Mở trang web keyboardtester.com để test chính xác phím nào đang bị kẹt đúp.",
            "Tháo keycap của phím đó ra kiểm tra xem có kẹt vụn bánh, tóc hay bụi rác bên dưới lẫy không.",
        ],
        fix: [
            "Sửa bằng phần mềm: Vào Windows Settings -> Accessibility -> Keyboard -> Bật Filter Keys để Windows tự động bỏ qua các nhịp gõ phím quá nhanh do chập mạch.",
            "Sửa phần cứng: Dùng cồn 90 độ hoặc dung dịch tẩy rửa tiếp điểm xịt vào switch (phím cơ) rồi bấm liên tục để làm sạch lá đồng. Với laptop, dùng bóng thổi bụi và chổi lông cứng quét sạch ngàm phím.",
            "Ghi chú : Nếu phím cơ loại Hotswap thì chỉ cần nhổ switch cũ thay switch mới là xong trong 5 giây. Nếu phím Laptop bị lỗi này ở nhiều phím cùng lúc, 90% là do ẩm mạch màng carbon, cần thay toàn bộ cụm phím.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Ổ cứng phát tiếng kêu lạch cạch cơ học (Click of Death)",
        category: " Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Máy tính khởi động chậm rùa bò, hay bị treo cứng. Đặc biệt, bên trong máy phát ra tiếng kêu ‘cạch... cạch... cạch’ hoặc ‘tít tít’ lặp đi lặp lại rất rõ ràng từ ổ cứng (HDD).",
        ],
        diagnosisSteps: [
            "Ghé sát tai vào khu vực gắn ổ cứng để xác nhận âm thanh phát ra từ vòng quay ổ cơ học chứ không phải tiếng quạt tản nhiệt cạ cánh.",
            "Dùng phần mềm Hard Disk Sentinel xem sức khỏe (Health), chắc chắn sẽ báo đỏ hoặc hiện Bad Sector chằng chịt.",
            "abc",
        ],
        fix: [
            "CẤP CỨU: Dừng ngay mọi tác vụ đang làm, cắm USB hoặc ổ cứng ngoài vào sao lưu (Copy) những dữ liệu quan trọng nhất ngay lập tức.",
            "Tháo bỏ ổ cứng hỏng để tránh làm treo hệ thống.",
            "Nâng cấp lên ổ SSD.",
            "CẢNH BÁO:</b> Khi ổ cứng đã kêu ‘cạch cạch’, tuổi thọ của nó chỉ còn tính bằng phút hoặc giờ. Đầu từ (Head) đang va đập trực tiếp lên mặt đĩa từ, càng cố chạy sẽ càng xước đĩa, dẫn đến các trung tâm cứu dữ liệu cũng vô phương cứu chữa.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Bật máy đòi Password BIOS nền đen (BIOS Locked)",
        category: "Phần cứng | Hệ điều hành",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Vừa bấm nút nguồn, máy hiện logo hãng rồi chuyển ngay sang một màn hình đen/xanh dương, yêu cầu nhập ‘System Password’ hoặc ‘Administrator Password’ mới cho boot vào Windows.",
        ],
        diagnosisSteps: [
            "Hỏi chủ máy xem họ hoặc trẻ nhỏ có vô tình vào BIOS đặt mật khẩu không.",
            "Gõ sai 3 lần xem máy có cung cấp một đoạn mã Code (System Disable Code) hay không.",
        ],
        fix: [
            "Desktop: Rút điện, tháo nắp máy, tìm viên Pin CMOS tròn và tháo ra khoảng 15 phút. Hoặc tìm Jumper ghi chữ CLR_CMOS trên Mainboard và chập 2 chân lại với nhau vài giây để xóa pass.",
            "Laptop: Thử vào trang bios-pw.org, nhập đoạn mã Code báo lỗi (sau khi gõ sai 3 lần) để lấy Master Password nhập ngược lại.",
            "Ghi chú : Việc tháo pin CMOS để xóa pass chỉ hiệu quả với Desktop. Các dòng Laptop Business (ThinkPad, Dell Latitude) bảo mật pass BIOS bằng một con chip eeprom riêng, tháo pin CMOS không có tác dụng, phải mang ra tiệm dùng máy khò nhổ chip nạp lại ROM.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Lỗi ‘USB Device Over Current Status Detected’",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Khởi động máy bàn (Desktop), hiện logo Mainboard kèm dòng chữ ‘USB Device Over Current Status Detected !! System Will Shut Down After 15 Seconds’. Sau đúng 15 giây máy tắt phụp, không thể vào BIOS cũng không vào được Win.",
        ],
        diagnosisSteps: [
            "Rút TOÀN BỘ các thiết bị đang cắm vào cổng USB (chuột, phím, tai nghe, máy in).",
            "Dùng đèn pin soi vào tất cả các lỗ USB trên máy tính xem có mạt sắt, nhíp kim loại, hoặc các chân tiếp xúc (lá đồng) bên trong cổng USB có bị gãy gập chập vào nhau (chạm mass) không.",
        ],
        fix: [
            "Bật máy tính lên lại (khi không cắm bất kỳ USB nào), nếu máy qua được lỗi -> Một trong các thiết bị ngoại vi bị chập mạch.",
            "Nếu vẫn báo lỗi: Tháo nắp hông case, rút bỏ sợi cáp ghi chữ USB (cáp nối cổng USB mặt trước case vào Mainboard). 90% nguyên nhân là do vỉ USB mặt trước vỏ case bị rỉ sét ẩm ướt gây đoản mạch.",
            "CẢNH BÁO:</b> Tính năng này của Mainboard sinh ra để chống cháy nổ. Nếu các bước trên không giải quyết được, thì IC bảo vệ nguồn USB trên Mainboard đã nổ, cần tháo Main mang đi hàn lại IC.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Nhận không đủ dung lượng RAM (Hardware Reserved)",
        category: "Hệ điều hành | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Lắp RAM 8GB (hoặc 16GB) vào máy, vào phần Properties của My Computer thấy hiện: Installed RAM: 8.00 GB (3.9 GB usable). Máy chạy đa nhiệm rất kém do thiếu RAM thực tế.",
        ],
        diagnosisSteps: [
            "Nhấn Ctrl + Shift + Esc mở Task Manager -> Tab Performance -> Memory. Nhìn xuống góc phải dưới xem mục Hardware reserved có đang ăn mất vài GB không.",
            "Kiểm tra Windows đang cài là bản 32-bit hay 64-bit (Bản 32-bit chỉ nhận tối đa gần 4GB RAM).",
            "abc",
        ],
        fix: [
            "Do phần mềm: Nhấn Win + R gõ msconfig -> Tab Boot -> Advanced options. Đảm bảo mục Maximum memory KHÔNG bị tích chọn. Khởi động lại máy.",
            "Do Mainboard chia RAM cho Card Onboard: Vào BIOS, tìm mục UMA Frame Buffer Size hoặc Share Memory Size, giảm mức chia sẻ xuống (chỉ chia 128MB hoặc 256MB cho đồ họa tích hợp nếu bạn đã có Card rời).",
            "Do phần cứng dơ bẩn: Tháo thanh RAM ra, chà sạch chân đồng, xịt RP7 vệ sinh khe cắm RAM trên mainboard rồi cắm lại thật chặt.",
            "Ghi chú : Lỗi này rất hay gặp khi người dùng tự mua thêm thanh RAM thứ 2 về cắm nâng cấp nhưng thanh RAM mới bị lỏng chân hoặc không cùng bus/hãng khiến mainboard không đồng bộ được luồng dữ liệu (Dual Channel).",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Màn hình bị lưu ảnh, bóng mờ (Image Retention / Burn-in)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Đang xem phim toàn màn hình hoặc mở file Word trắng, nhưng vẫn thấy mờ mờ hình ảnh của thanh Taskbar, icon Desktop hoặc một bảng tính Excel đã mở trước đó hằn lên nền màn hình.",
        ],
        diagnosisSteps: [
            "Khởi động lại máy vào màn hình BIOS (nền xám/đen), nếu vẫn thấy cái ‘bóng ma’ đó xuất hiện thì 100% là lỗi vật lý của tấm nền màn hình.",
            "Xác định công nghệ màn hình là IPS/LCD hay là OLED.",
        ],
        fix: [
            "Màn hình IPS/LCD (Image Retention - Tạm thời): Tắt máy tính để màn hình nghỉ ngơi vài tiếng. Hoặc lên YouTube tìm các video ‘LCD Burn-in Fix’ (video nhấp nháy nhiều màu sắc chói lọi) và bật toàn màn hình trong 2-3 tiếng để kích thích các tinh thể lỏng hoạt động lại bình thường.",
            "Màn hình OLED (Burn-in - Vĩnh viễn): Sự suy thoái của bóng LED hữu cơ là không thể đảo ngược. Cách duy nhất là thay nguyên cụm màn hình mới.",
            "•	Ghi chú : Lỗi này thường xảy ra với dân kế toán, văn phòng, những người treo một cửa sổ phần mềm cố định (với giao diện độ tương phản cao) trên màn hình 8-10 tiếng mỗi ngày, qua nhiều tháng.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Ứng dụng tự động văng (Crash to Desktop / Force Close)",
        category: "Phần mềm | Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Đang chơi game nặng, thiết kế đồ họa hoặc làm video thì cửa sổ ứng dụng đột ngột biến mất, văng thẳng ra màn hình Desktop. Không có thông báo lỗi màn hình xanh, máy tính vẫn dùng bình thường.",
        ],
        diagnosisSteps: [
            "Mở Event Viewer của Windows -> Windows Logs -> Application. Tìm các dòng có dấu chấm than màu đỏ (Error) trùng với khung giờ ứng dụng bị văng để xem mã lỗi.",
            "Kiểm tra nhiệt độ VGA/CPU khi đang chạy ứng dụng nặng.",
        ],
        fix: [
            "Lỗi thư viện: Cài đặt lại hoặc bổ sung bộ thư viện nền tảng: DirectX, Visual C++ Redistributable, và .NET Framework. Rất nhiều game bị văng vì thiếu file .dll.",
            "Xung đột RAM (Memory Leak): Tăng dung lượng bộ nhớ ảo (Pagefile) cho Windows.",
            "Nếu báo lỗi liên quan đến Display Driver (nvlddmkm): Dùng phần mềm DDU (Display Driver Uninstaller) để xóa sạch driver Card màn hình cũ rồi cài lại bản mới nhất từ trang chủ Nvidia/AMD.",
            "Ghi chú : Nếu văng app kèm theo quạt rú lên rồi hạ xuống đột ngột, rất có thể bộ nguồn (PSU) của bạn không cung cấp đủ điện dòng 12V cho Card đồ họa hoạt động tối đa (Peak load), dẫn đến VGA tự sập tiến trình.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Sai định dạng ngày tháng, hiển thị font chữ ô vuông",
        category: "Hệ điều hành",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Gõ chữ tiếng Việt trong các phần mềm kế toán (MISA, HTKK) bị biến thành ô vuông hoặc ký tự giun dế. Xuất file Excel bị đảo ngược ngày và tháng (Ví dụ: 05/12/2026 máy tự hiểu là ngày 12 tháng 5).",
        ],
        diagnosisSteps: [
            "Kiểm tra bộ gõ Unikey xem đã bật chế độ gõ Tiếng Việt và chọn đúng bảng mã (Unicode/TCVN3) chưa.",
            "Mở Control Panel -> Clock and Region để kiểm tra định dạng phân vùng.",
        ],
        fix: [
            "Lỗi ngày tháng: Trong Region -> Formats, đổi Format về English (United Kingdom) hoặc Vietnamese. Trong phần Additional settings, chỉnh tab Date phần Short date thành dd/MM/yyyy.",
            "Lỗi font chữ: Lên mạng tải các bộ font Tiếng Việt đầy đủ (Font VNI, Font TCVN3, Font Roboto), giải nén, bôi đen toàn bộ chuột phải chọn Install. Khởi động lại phần mềm/máy tính.",
            "Ghi chú : Lỗi định dạng ngày tháng MM/dd/yyyy (chuẩn Mỹ) mặc định của Windows là ‘sát thủ’ gây ra hàng loạt sai sót trong việc lọc dữ liệu, tính lương hoặc tính lãi suất của dân kế toán/hành chính.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Không thể Format USB / Ổ đĩa báo ‘Windows was unable to...’",
        category: "Hệ điều hành | Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Cắm USB hoặc ổ cứng ngoài vào, máy nhận biểu tượng ổ đĩa nhưng bấm vào thì bắt Format. Khi ấn Format, thanh chạy được 1 lúc thì báo lỗi Windows was unable to complete the format.",
        ],
        diagnosisSteps: [
            "Kiểm tra xem USB/Ổ cứng có đang bị phần mềm diệt virus quét ngầm không (chiếm quyền điều khiển đọc/ghi).",
            "Cắm thử sang cổng USB khác ở mặt sau Mainboard (ưu tiên cổng USB 3.0 màu xanh).",
        ],
        fix: [
            "Mở CMD (Quyền Admin), dùng công cụ Diskpart. Gõ lệnh: diskpart -> list disk -> select disk X (X là số của USB) -> clean. Sau đó mở Disk Management để tạo lại phân vùng mới (New Simple Volume).",
            "Nếu Diskpart báo lỗi I/O Device Error hoặc Data error (cyclic redundancy check): Chip nhớ của USB đã chết hoặc cơ ổ cứng HDD ngoài đã hỏng.",
            "Ghi chú : Nhiều trường hợp USB bị rút ra đột ngột khi đang copy dữ liệu dẫn đến lỗi bảng phân vùng định dạng (RAW partition). Các công cụ format mặc định của Windows sẽ bó tay, bắt buộc phải dùng lệnh CMD diskpart - clean hoặc các phần mềm chia ổ đĩa để ép cấu trúc lại.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Mạng LAN có dây báo đèn cam, rớt tốc độ",
        category: "Phần cứng (Mạng)",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Đã kéo cáp mạng LAN từ Modem cắm thẳng vào máy tính nhưng mạng tải rất chậm. Kiểm tra phần Ethernet Status thấy thông số Speed chỉ báo 100.0 Mbps hoặc 10.0 Mbps thay vì 0 Gbps. Đèn báo hiệu ở lỗ cắm mạng nháy màu Cam thay vì màu Xanh lá.",
        ],
        diagnosisSteps: [
            "Kiểm tra loại dây cáp mạng đang dùng là CAT5, CAT5e hay CAT6 (thường in chữ dọc thân dây).",
            "Nhìn kỹ hạt mạng (đầu RJ45) bằng nhựa trong suốt xem có đủ 8 sợi dây đồng chạm vào lẫy tiếp xúc không.",
        ],
        fix: [
            "Do dây cáp / hạt mạng (90%): Dây cáp mạng bị đứt 1-2 lõi bên trong hoặc thợ bấm đầu mạng chỉ bấm 4 sợi (để tiết kiệm) sẽ làm tốc độ mạng bị ép rớt xuống ngưỡng 100Mbps. Cần bấm lại hạt mạng chuẩn 8 lõi hoặc thay dây cáp CAT5e/CAT6 loại tốt.",
            "Do cài đặt Card mạng: Vào Device Manager -> Network adapters -> Chuột phải vào Card mạng LAN chọn Properties -> Tab Advanced. Tìm mục Speed & Duplex, chuyển giá trị từ Auto Negotiation sang 0 Gbps Full Duplex.",
            "Ghi chú : Cục Modem/Router nhà mạng cho gói cước gia đình hiện nay đều cấp cổng Gigabit (1Gbps), và mainboard máy tính 10 năm đổ lại đây cũng đều dùng Card Gigabit. Nếu máy báo 100Mbps thì vấn đề gần như chắc chắn nằm ở sợi cáp vật lý nằm giữa chúng.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Cắm nhầm điện áp 220V cho thiết bị điện 110V",
        category: "Phần cứng ",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Bạn mang một case máy tính (Desktop) hoặc màn hình từ Nhật Bản, Mỹ (các quốc gia dùng điện lưới 100V - 110V) về Việt Nam. Vừa cắm thẳng phích cắm vào ổ điện 220V ở nhà, nghe một tiếng nổ ‘Đoàng’ hoặc ‘Bụp’ lớn, kèm theo tia lửa chớp sáng sau thân máy và mùi khét lẹt bốc lên. Máy tính chết hoàn toàn.",
        ],
        diagnosisSteps: [
            "Không cần kiểm tra nữa, tụ chống sét bảo vệ quá áp bên trong bộ nguồn (PSU) đã nổ tung.",
        ],
        fix: [
            "BƯỚC 1 (CỰC KỲ QUAN TRỌNG): Rút ngay phích cắm ra khỏi ổ điện. TUYỆT ĐỐI không thử bật công tắc nguồn máy tính thêm lần nào nữa để tránh dòng điện rò tàn phá lên Mainboard và các linh kiện khác.",
            "Mở case máy tính, tháo bỏ toàn bộ khối nguồn (PSU).",
            "Mang bộ nguồn đi sửa (thợ sẽ thay tụ lọc, cầu chì và điện trở mồi) hoặc mua một bộ nguồn 220V mới có cùng công suất lắp thay thế vào.",
            "CẢNH BÁO:</b> Không được tò mò tháo nắp hộp kim loại của bộ nguồn (PSU) ra xem. Tụ điện lớn bên trong vẫn có thể tích trữ dòng điện hàng trăm Volt gây nguy hiểm đến tính mạng dù đã rút điện.",
            "Ghi chú : Hầu hết các bộ nguồn xịn (có chứng nhận 80 Plus, dải điện áp Auto-Volt 100-240V) sẽ tự chuyển đổi an toàn. Lỗi nổ này thường gặp ở các máy bộ đồng bộ nội địa (như Dell, HP dòng văn phòng nhỏ gọn) sử dụng nguồn chỉ hỗ trợ duy nhất mức 110V. Rất may mắn là các bộ nguồn này thường thiết kế cầu chì và linh kiện bảo vệ (Varistor) chốt chặn ngay đầu vào, khi nổ nó sẽ ngắt mạch ngay, nên 95% trường hợp Mainboard, CPU, Ổ cứng bên trong vẫn an toàn vô sự.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Thanh Taskbar đơ, nháy liên tục (Explorer Loop)",
        category: "Hệ điều hành | Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            " Giao diện Desktop nháy chớp liên tục, mất hết icon trên thanh Taskbar. Mỗi lần click chuột vào thanh dưới cùng là màn hình lại load lại từ đầu, không thể bấm được nút Start.",
        ],
        diagnosisSteps: [
            "Nhấn Ctrl + Shift + Esc để mở Task Manager.",
            "Kiểm tra xem tiến trình Windows Explorer có đang chiếm CPU cao và tự động restart không.",
            "Nhớ lại xem gần đây có cài phần mềm đổi giao diện (như TranslucentTB, StartAllBack) không.",
        ],
        fix: [
            "Trong Task Manager, chọn File -> Run new task, gõ cmd (nhớ tích chọn chạy quyền Admin).",
            "Gõ lệnh sfc /scannow để Windows tự sửa file hệ thống bị hỏng.",
            "Nếu không được, vào Safe Mode để gỡ cài đặt các phần mềm can thiệp giao diện bên thứ 3 hoặc gỡ bản cập nhật Windows Update gần nhất.",
            "Ghi chú : Lỗi này rất thường xảy ra ngay sau khi Microsoft tung ra bản cập nhật hệ điều hành lớn (Feature Update), làm xung đột với các phần mềm tùy biến giao diện cũ.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Tiếng rít e e từ linh kiện (Coil Whine)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "def",
        symptoms: [
            "Khi chơi game nặng hoặc render đồ họa, từ trong thùng máy (khu vực Card màn hình hoặc Nguồn) phát ra tiếng rít chói tai ‘e e e e...’ ở tần số cao. Thoát game là hết kêu ngay lập tức.",
        ],
        diagnosisSteps: [
            "Áp sát tai vào thùng máy, xác định chính xác tiếng kêu phát ra từ Nguồn (PSU) hay Card đồ họa (VGA).",
            "Bật tính năng V-Sync trong game xem tiếng kêu có giảm không.",
        ],
        fix: [
            "Bằng phần mềm: Dùng phần mềm MSI Afterburner để Undervolt (giảm điện áp) cho Card màn hình, hoặc giới hạn mức FPS tối đa (Max Frame Rate) trong Nvidia Control Panel.",
            "Bằng vật lý: Kỹ thuật viên tháo bo mạch, tìm cuộn cảm (Choke) đang bị rung và đổ keo nến/silicon tản nhiệt vào để cố định lõi đồng bên trong.",
            "Ghi chú : Đây là hiện tượng vật lý bình thường khi dòng điện lớn chạy qua cuộn cảm gây cộng hưởng từ, KHÔNG PHẢI là lỗi hỏng hóc gây cháy nổ. Các hãng sản xuất thường sẽ từ chối bảo hành đối với hiện tượng Coil Whine này.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Pin tụt nhanh, sập nguồn ảo (Chỉ Laptop)",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Máy đang báo còn 30% - 40% pin, nhưng vừa rút sạc ra dùng được 5 phút thì máy tự động tắt phụp (sập nguồn đen thui). Bật lại báo hết pin.",
        ],
        diagnosisSteps: [
            "Mở CMD, gõ lệnh powercfg /batteryreport để xuất file báo cáo sức khỏe pin.",
            "Kiểm tra sự chênh lệch giữa Design Capacity (Dung lượng gốc) và Full Charge Capacity (Dung lượng thực tế hiện tại).",
        ],
        fix: [
            "Calibrate (Cân chỉnh) lại mạch pin: Cắm sạc đầy 100%, sau đó vào BIOS (để máy không tự tắt) và để máy chạy đến khi cạn sạch pin sập nguồn. Đợi máy nguội rồi cắm sạc liên tục lên lại 100% không bật máy.",
            "Nếu cân chỉnh xong vẫn bị sập ảo: Cell pin bên trong đã chai phồng lệch nhau, bắt buộc phải thay viên pin mới.",
            "Ghi chú : Mạch điều khiển của pin laptop đôi khi đếm sai dung lượng thực tế còn lại, dẫn đến báo ảo. Việc Calibrate giúp reset lại IC đếm dung lượng này.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Máy tính tự động ‘thức giấc’ giữa đêm",
        category: "Hệ điều hành | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "def",
        symptoms: [
            "Đưa máy vào chế độ Sleep (Ngủ), nhưng lát sau hoặc nửa đêm máy tự động bật sáng màn hình, quạt quay vù vù dù không có ai chạm vào chuột hay bàn phím.",
        ],
        diagnosisSteps: [
            "Mở CMD quyền Admin, gõ lệnh powercfg -lastwake để xem tác nhân nào vừa ‘gọi’ máy tính dậy.",
            "Gõ tiếp lệnh powercfg -devicequery wake_armed để xem danh sách các thiết bị có quyền đánh thức máy tính.",
        ],
        fix: [
            "Mở Device Manager, chuột phải vào Card mạng (Network Adapter), chuột và bàn phím -> Chọn Properties -> Tab Power Management -> Bỏ tích ô Allow this device to wake the computer.",
            "Vào Power Options -> Change advanced power settings -> Mở rộng mục Sleep -> Allow wake timers -> Chuyển thành Disable.",
            "Ghi chú : Lỗi cực kỳ khó chịu với những ai hay để máy tính trong phòng ngủ. Nguyên nhân thường do Card mạng nhận được tín hiệu (Magic Packet) ngẫu nhiên từ router, hoặc Windows Update tự động lên lịch tải nền.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Cổng Tai nghe có tiếng rột rẹt, nhiễu tĩnh điện",
        category: "Phần cứng (Môi trường)",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Cắm tai nghe vào lỗ 3.5mm, nghe nhạc thì có tiếng lạch cạch, lẹt xẹt phía sau. Đặc biệt, mỗi khi di chuột hoặc máy đang tải nặng (chơi game) thì tiếng rè/rít trong tai nghe càng rõ hơn.",
        ],
        diagnosisSteps: [
            "Cắm thử tai nghe sang điện thoại xem tai nghe có hỏng không.",
            "Với Desktop: Rút cáp tai nghe từ cổng phía trước (Front Panel) cắm ra cổng màu xanh lá cây ở phía sau Mainboard xem có hết nhiễu không.",
        ],
        fix: [
            "Tiếp mát cho máy tính: Bắt một sợi dây điện từ vỏ sắt của thùng máy nối xuống đất hoặc đinh đóng vào tường để triệt tiêu dòng rò.",
            "Nếu Mainboard rẻ tiền, khu vực Audio không được cách ly chống nhiễu tốt: Chuyển sang mua một chiếc tai nghe dùng cổng USB, hoặc mua một chiếc USB Sound Card (DAC rời) để lấy tín hiệu kỹ thuật số, sẽ loại bỏ 100% tiếng xè xè.",
            "Ghi chú : Dây nối cổng Audio mặt trước của vỏ case thường không có bọc chống nhiễu từ (EMI), khi luồn qua các linh kiện như VGA, Nguồn sẽ bị nhiễm từ trường sinh ra tạp âm lọt vào tai nghe.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "Tụt FPS, giật khựng (Stuttering) khi chơi game",
        category: "Phần mềm | Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "def",
        symptoms: [
            "Cấu hình máy tính rất mạnh nhưng khi chơi game lại gặp hiện tượng khung hình (FPS) đang rất cao đột ngột rớt thẳng xuống 10-20 FPS trong khoảng 1 giây rồi lại bình thường, lặp đi lặp lại tạo cảm giác giật cục (lag).",
        ],
        diagnosisSteps: [
            "Dùng phần mềm MSI Afterburner bật tính năng OSD để theo dõi khi bị giật cục thì thông số nào thay đổi: CPU 100%, VGA giảm xung nhịp, hay VRAM (bộ nhớ card hình) bị đầy.",
            "Kiểm tra xem game đang cài trên ổ cứng HDD cơ học hay SSD.",
        ],
        fix: [
            "Tắt tính năng quay video ngầm của Windows: Mở Settings -> Gaming -> Captures -> Tắt Record what happened.",
            "Chuyển cài đặt game sang ổ SSD. (Tốc độ đọc chậm của HDD khiến game không load kịp kết cấu hình ảnh gây khựng).",
            "Giảm mức thiết lập Texture (Kết cấu bề mặt) trong game xuống 1 nấc để tránh làm tràn VRAM của Card màn hình.",
            "Ghi chú : Hiện tượng nghẽn cổ chai (Bottleneck) do ổ cứng HDD hoặc thiếu RAM là nguyên nhân hàng đầu gây ra Stuttering.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: ["def", "def"],
        name: "abc",
        category: "abc",
        difficulty: "abc",
        estimatedCost: "def",
        symptoms: [
            "abc",
        ],
        diagnosisSteps: [
            "abc",
            "abc",
            "abc",
        ],
        fix: [
            "abc",
            "abc",
            "abc",
            "abc",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
];