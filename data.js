const pcErrors = [
    {
    //loi-1
        keywords: [
        "Không lên nguồn (No Power)",
        "laptop không lên nguồn",
        "pc bật không lên",
        "máy tính không khởi động",
        "quạt cpu không quay",
        "nhấn nguồn không phản hồi",
        "laptop im re không lên",
        "pc mất nguồn đột ngột",
        "lỗi không lên nguồn laptop"
        ],
        name: "Không lên nguồn (No Power)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Nhấn nút nguồn không có tín hiệu. Quạt không quay, đèn LED báo nguồn không sáng.", 
        ],
        diagnosisSteps: [
            "Kiểm tra ổ cắm, dây cáp nguồn.",
            "Kiểm tra pin (laptop) / công tắc nguồn (desktop).",
            "Đo nguồn sạc (laptop)/ kiểm tra nguồn (desktop)",
            "Kiểm tra IC nguồn trên Mainboard.",
            
        ],
        fix: [
            "Cắm lại cáp, đổi ổ điện.",
            "Tháo pin/rút điện, nhấn giữ nút nguồn 30s để xả tĩnh điện, cắm điện thử lại.",
            "Thay bộ nguồn hoặc sạc khác.",
            "Cảnh báo: Rút điện hoàn toàn trước khi mở thùng máy tính. Không tự ý mở hộp nguồn (PSU) vì tụ điện bên trong lưu điện áp cao có thể giật chết người.",
            "Desktop: Thử chập dây xanh lá và dây đen trên jack 24-pin để kiểm tra nguồn sống hay chết.",
            "Laptop: Nếu xả tĩnh điện không được, có thể do chập nguồn tụ gốm hoặc IC nguồn, cần mang ra trung tâm có máy khò hàn.",
        ],
        image: "def", 
        audio: "def", 
        video: "def",
    },
    {
    //loi-2
        keywords: [
        "Có nguồn nhưng không lên hình",
        "laptop có nguồn không lên hình",
        "pc quạt quay màn hình đen",
        "máy tính đèn sáng không hiển thị",
        "laptop không xuất hình",
        "pc có điện nhưng đen màn hình",
        "lỗi không lên hình laptop",
        "máy tính boot không lên màn hình"
        ],
        name: "Có nguồn nhưng không lên hình ảnh",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Máy chạy có tiếng quạt quay, đèn nguồn sáng nhưng màn hình đen, không hiện logo.",
        ],
        diagnosisSteps: [
            "Chờ 1-2 phút xem có xuất hình chậm không.",
            "Nhìn đèn phím Capslock/Numlock có sáng khi nhấn không.",
            "Kiểm tra cáp xuất hình ảnh.",
            "Kiểm tra RAM, VGA.",

        ],
        fix: [
            "Rút cáp nguồn, tháo RAM dùng tẩy chà sạch chân đồng, lắp lại vào mainboard.",
            "Tháo pin CMOS, đợi vài phút để reset BIOS rồi lắp lại",
            "Tháo VGA rời, cắm cáp màn hình vào cổng onboard.",
            "Nếu bấm Capslock đèn bàn phím sáng/tắt bình thường tức là máy đã boot vào Win nhưng hỏng cáp màn hoặc vỡ panel (thường gặp ở Laptop).",
        ],
        image: "def", 
        audio: "def", 
        video: "def",
    },
        {
    //loi-3
        keywords: [
        "Màn hình xanh BSOD",
        "màn hình xanh laptop",
        "bsod windows 10",
        "lỗi màn hình xanh chết chóc",
        "máy tính tự restart màn hình xanh",
        "critical process died sửa lỗi",
        "laptop báo stop code",
        "bsod cách khắc phục"
        ],
        name: "Màn hình xanh chết chóc (BSOD)",
        category: "Hệ điều hành | Phần mềm | Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Đang dùng thì hiện màn hình xanh chữ trắng (kèm mã lỗi như CRITICAL_PROCESS_DIED), máy tự khởi động lại.",
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
            "Lỗi do phần cứng (RAM/SSD) hỏng thì cài lại Win vẫn sẽ bị màn hình xanh.",
        ],
        image: "def", 
        audio: "def", 
        video: "def",
    },
        {
    //loi-4
        keywords: [
        "Máy quá nhiệt, tự sập nguồn",
        "laptop quá nóng tự tắt",
        "pc sập nguồn khi chơi game",
        "máy tính nhiệt độ cao tự shutdown",
        "quạt tản nhiệt kêu to máy nóng",
        "laptop render bị sập nguồn",
        "cpu quá nhiệt cách xử lý"
        ],
        name: "Máy quá nhiệt, tự sập nguồn",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
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
            "Dùng chổi lông và bóng thổi bụi để làm sạch khe tản nhiệt, các cánh quạt.",
            "Lau sạch keo tản nhiệt cũ, tra keo tản nhiệt mới. Tra keo tản nhiệt vừa đủ để tránh tràn ra bo mạch.",
            "Desktop: Xử lý dễ dàng, có thể lắp thêm quạt cho thùng máy.",
	        "Laptop: Phức tạp hơn do ốc vít nhỏ, ngầm.",
        ],
        image: "def", 
        audio: "def",
        video: "def",
    },
        {
    //loi-5
        keywords: [
        "Không nhận ổ cứng",
        "laptop không nhận ổ cứng",
        "no bootable device sửa lỗi",
        "pc không tìm thấy ổ cứng",
        "lỗi boot device not found",
        "máy tính không vào được win",
        "ổ cứng không hiển thị bios",
        "laptop báo insert boot media"
        ],
        name: "Không nhận ổ cứng (Boot Device Not Found)",
        category: "Phần cứng | Hệ điều hành",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Khởi động máy hiện dòng chữ 'No Bootable Device' hoặc 'Insert Boot Media'.",
        ],
        diagnosisSteps: [
            "Vào BIOS kiểm tra xem mainboard có nhận tên ổ cứng không.",
            "Kiểm tra chế độ boot (UEFI/Legacy).",
            "Kiểm tra cáp kết nối vật lý (SATA).",

        ],
        fix: [
            "Chuyển lại chuẩn Boot (UEFI/Legacy) trong BIOS cho đúng với chuẩn cài Win cũ.",
            "Tháo nắp máy, cắm lại cáp SATA/Nguồn hoặc tháo lắp lại ổ NVMe/M.2.",
            "Thay ổ cứng mới và cài lại hệ điều hành nếu ổ cứng cũ đã hỏng.",
            "Nếu trong BIOS nhận ổ cứng nhưng không boot được, hãy dùng USB WinPE để nạp lại MBR/EFI Boot loader.",
        ],
        image: "def", 
        audio: "def", 
        video: "def",
    },
        {
    //loi-6
        keywords: [
        "Full Disk 100% / Chậm lag",
        "laptop disk 100% chậm",
        "taskmanager disk 100% sửa",
        "máy tính chạy chậm win 10",
        "ổ hdd bị full disk",
        "laptop giật lag mở ứng dụng",
        "cách khắc phục disk usage 100%"
        ],
        name: "Lỗi Full Disk 100% máy chậm, giật lag",
        category: "Hệ điều hành | Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Khởi động lâu, thao tác mở các ứng dụng chậm chạp, Task Manager hiển thị 100% Disk.",
        ],
        diagnosisSteps: [
            "Mở Task Manager kiểm tra tiến trình nào ngốn Disk/CPU.",
            "Kiểm tra dung lượng trống ổ cứng.",
            "Kiểm tra tình trạng sức khỏe ổ cứng.",

        ],
        fix: [
            "Nâng cấp từ ổ HDD lên ổ SSD.",
            "Nâng cấp ổ cứng lên dung lượng cao hơn",
            "Tắt các dịch không cần thiết hoặc ít sử dụng trong trong services.msc.",
            "Tắt các ứng dụng khởi động cùng Windows (Startup).",
            "Lỗi này 90% xảy ra trên các máy tính cũ vẫn dùng ổ HDD chạy Windows 10/1 Dùng phần mềm CrystalDiskInfo để kiểm tra xem ổ cứng có bị Bad Sector/Caution không.",
        ],
        image: "def", 
        audio: "def", 
        video: "def",
    },
        {
        keywords: [
    //loi-7
        "Bàn phím không nhận / Loạn phím",
        "laptop bàn phím không gõ được",
        "phím laptop bị liệt",
        "bàn phím gõ 1 ra 2 ký tự",
        "laptop loạn phím sửa lỗi",
        "phím cơ không nhận tín hiệu",
        "keyboard laptop không hoạt động"
        ],
        name: "Không nhận bàn phím hoặc loạn phím",
        category: "Phần cứng | Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
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
            "Laptop: Phím liệt/chập đa số do môi trường ẩm ướt hoặc bị đổ nước. Gặp tình trạng này phải thay phím mới, chi phí sửa mạch phím cao và thường không bền.",
            "Desktop: Lắp thử bàn phím khác để kiểm tra"
        ],
        image: "def", 
        audio: "def", 
        video: "def",
    },
         {
    //loi-8
        keywords: [
        "Mất Wi-Fi / Không thấy mạng",
        "laptop mất wifi đột ngột",
        "pc không tìm thấy mạng wifi",
        "biểu tượng wifi biến mất",
        "laptop không kết nối internet",
        "wifi adapter không hoạt động",
        "máy tính báo no internet access"
        ],
        name: "Mất kết nối mạng hoặc không thấy Wi-Fi",
        category: "Hệ điều hành | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "---",
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
            "Chọn wifi -> Forget (Quên) và nhập lại mật khẩu.",
            "Tải driver Wi-Fi (LAN) chuẩn từ trang chủ hãng và cài đặt lại.",
            "Tháo lắp lại card Wi-Fi, vệ sinh hai đầu dây anten.",
            "Có trường hợp Windows tự update làm xung đột driver card mạng. Dùng tính năng Network Reset trong Settings của Windows 10/11 rất hiệu quả.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
     {
    //loi-9
        keywords: [
        "Màn hình sọc / Nhòe màu",
        "laptop màn hình bị sọc",
        "màn hình pc nhòe màu",
        "laptop sọc ngang màn hình",
        "lỗi màn hình laptop artifacts",
        "pc màn hình sai màu",
        "sọc dọc màn hình laptop sửa"
        ],
        name: "Màn hình sọc ngang dọc, nhòe màu",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Màn hình có các đường kẻ sọc, màu sắc hiển thị sai (chỉ có màu hồng/xanh), hình ảnh bị xé (artifacts).",
        ],
        diagnosisSteps: [
            "Lấy tay ấn nhẹ vào viền màn hình xem sọc có thay đổi không.",
            "Xuất hình ra màn hình rời (Tivi/Monitor) qua cổng VGA/HDMI.",

        ],
        fix: [
            "Nếu xuất hình ra màn rời hình ảnh BÌNH THƯỜNG -> Lỗi do màn hình chính hoặc cáp tín hiệu -> Thay cáp hoặc thay màn hình mới.",
            "Nếu xuất màn rời cũng bị sọc -> Lỗi VGA.",
            "CẢNH BÁO: Không tự đóng/hấp lại chip VGA bằng máy sấy tóc, sẽ làm hỏng mainboard.",
            "Lỗi VGA thường yêu cầu kỹ thuật viên có máy đóng chip BGA chuyên dụng. Lỗi sọc màn (chết điểm ảnh/đứt rập) không thể sửa, bắt buộc phải thay màn hình mới.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
     {
    //loi-10 (can am thanh)
        keywords: [
        "USB / Chuột chập chờn",
        "usb cắm vào không nhận",
        "laptop không nhận thiết bị usb",
        "chuột usb chập chờn kết nối",
        "usb device not recognized sửa",
        "cổng usb laptop bị lỏng",
        "pc cổng usb không hoạt động"
        ],
        name: "Thiết bị ngoại vi (USB, chuột) chập chờn",
        category: "Phần mềm | Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Cắm USB, chuột, tai nghe vào máy nhưng không có phản hồi hoặc máy báo 'USB Device Not Recognized'.",
        ],
        diagnosisSteps: [
            "Đổi cổng USB khác (chuyển từ cổng trước ra cổng sau mainboard).",
            "Cắm thiết bị đó sang máy tính khác xem có chạy không.",
            "Kiểm tra cổng vật lý có bị gỉ sét, cong vênh không.",
        ],
        fix: [
            "Rút ra cắm lại từ từ, đảm bảo tiếp xúc tốt.",
            "Vào Device Manager, tìm mục Universal Serial Bus controllers, chọn Uninstall Device, sau đó Restart máy.",
            "Desktop: Các cổng USB mặt trước case thường hay hỏng cáp nối hoặc tụt áp, nên ưu tiên cắm các cổng USB phía sau Mainboard. Nếu thiết bị sang máy khác vẫn lỗi thì thay thiết bị mới.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
     {
    //loi-11
        keywords: [
        "Sai ngày giờ (Lỗi pin CMOS)",
        "laptop sai ngày giờ sau tắt",
        "cmos checksum error sửa",
        "máy tính quên ngày giờ",
        "pin cmos laptop thay thế",
        "laptop báo f1 khi khởi động",
        "hệ thống mất thời gian thực"
        ],
        name: "Sai ngày giờ hệ thống liên tục (Lỗi pin CMOS)",
        category: "Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "---",
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
            "Tìm viên pin cmos (CR2032) trên Mainboard.",
            "Dùng móng tay hoặc vật vát mỏng nẩy nhẹ lẫy kim loại để lấy pin cũ ra.",
            "Lắp pin cmos mới vào. Bật máy, vào BIOS cài đặt lại ngày giờ và lưu lại (Save & Exit).",
            "Desktop: Rất dễ tự thay.",
            "Laptop: Tùy dòng máy, có dòng phải tháo toàn bộ mainboard mới thấy.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
     {
    //loi-12 (can am thanh)
        keywords: [
        "Treo cứng máy (Freeze)",
        "laptop treo cứng không phản hồi",
        "pc đứng hình không chuột",
        "máy tính freeze không bsod",
        "laptop đơ màn hình sửa lỗi",
        "pc không di chuyển được chuột",
        "hệ thống bị treo đột ngột"
        ],
        name: "Treo cứng máy (Freeze) không hiện màn hình xanh",
        category: "Phần cứng | Hệ điều hành",
        difficulty: "Trung bình",
        estimatedCost: "---",
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
            "Nhấn giữ nút nguồn (Power) 5-10 giây để ép máy tắt (Hard reset), sau đó bật lại.",
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
    //loi-13 (can am thanh)
        keywords: [
        "Mất âm thanh / Loa rè",
        "laptop mất tiếng loa",
        "pc no audio output device",
        "loa laptop bị rè xè",
        "máy tính không có âm thanh",
        "driver audio laptop bị lỗi",
        "tai nghe cắm vào không nghe"
        ],
        name: "Mất âm thanh hoặc loa bị rè",
        category: "Phần cứng | Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Biểu tượng loa có dấu x đỏ báo 'No Audio Output Device is installed' hoặc có âm thanh nhưng nghe lẹt xẹt, xè xè rất chói tai.",
        ],
        diagnosisSteps: [
            "Cắm tai nghe (jack 3.5mm) vào xem tai nghe có tiếng không. Nếu tai nghe có mà loa ngoài không có -> Hỏng loa ngoài.",
            "Nếu biểu tượng loa gạch chéo -> Kiểm tra Driver hoặc Audio Service.",
        ],
        fix: [
            "Chuột phải vào biểu tượng loa -> Chọn Troubleshoot sound problems để Windows tự sửa lỗi service.",
            "Vào Device Manager, gỡ driver Realtek High Definition Audio (hoặc tương tự) và khởi động lại máy để nạp lại.",
            "Nếu loa bị rè vật lý: Mở máy và kiểm tra xem có mạt sắt/bụi dính vào màng loa không.",
            "Laptop: Lỗi rách màng loa cực kỳ phổ biến do thói quen mở Max Volume (100%) trong thời gian dài. Rách màng thì bắt buộc phải thay cụm loa mới, giải pháp tạm thời là dùng tai nghe hoặc loa Bluetooth.",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
    //loi-14
        keywords: [
        "Cắm sạc không vào pin",
        "plugged in not charging sửa",
        "pin laptop không sạc đầy",
        "laptop sạc nhưng % pin không tăng",
        "ic sạc laptop bị hỏng",
        "máy tính rút sạc là tắt"
        ],
        name: "Cắm sạc nhưng không vào pin (Plugged in, not charging)",
        category: "Phần cứng | Hệ điều hành",
        difficulty: "Trung bình",
        estimatedCost: "---",
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
            "Nhiều trường hợp không hỏng pin mà hỏng mạch sạc trên Mainboard, yêu cầu cần mang đến kỹ thuật viên.",
            "CẢNH BÁO: Tuyệt đối không đâm, chọc hay bóp méo viên pin nếu thấy nó có dấu hiệu phồng rộp đẩy bung vỏ máy (nguy cơ cháy nổ lithium cực cao).",
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
    //loi-15 (can am thanh)
        keywords: [
        "Quạt kêu lạch cạch / Rú to",
        "quạt laptop kêu to bất thường",
        "quạt cpu kêu lạch cạch",
        "laptop quạt tản nhiệt kêu rít",
        "pc quạt case kêu ồn sửa",
        "quạt laptop kêu như động cơ",
        "vệ sinh quạt tản nhiệt laptop"
        ],
        name: "Quạt tản nhiệt kêu lạch cạch, rú to bất thường",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
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
            "Nên mua quạt mới để thay thế cho quạt cũ.",  
        ],
        image: "def", 
        audio: "def", 
        video: "def"
    },
      {
        keywords: [
        "Mất Bluetooth / Kết nối chập chờn",
        "laptop mất bluetooth đột ngột",
        "bluetooth không tìm thấy thiết bị",
        "kết nối bluetooth chập chờn",
        "driver bluetooth laptop bị lỗi",
        "pc không bật được bluetooth",
        "tai nghe bluetooth ngắt quãng"
    ],
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
        keywords: [
        "Màn hình tối mờ (Chết đèn nền)",
        "laptop màn hình đen có hình mờ",
        "chết đèn nền laptop sửa",
        "màn hình laptop tối nhưng có hình",
        "pc màn hình không sáng đèn",
        "lỗi cao áp màn hình laptop",
        "rọi đèn pin thấy hình màn hình"
    ],
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
        keywords: [
        "Vòng lặp khởi động (Boot Loop)",
        "laptop boot loop không vào win",
        "automatic repair chạy mãi không xong",
        "máy tính khởi động lại liên tục",
        "windows preparing automatic repair",
        "pc vòng lặp restart sửa",
        "laptop không boot được hệ thống"
    ],
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
        keywords: [
        "Touchpad bị liệt (Laptop)",
        "laptop touchpad không di chuột",
        "touchpad laptop bị liệt sửa",
        "click touchpad không phản hồi",
        "laptop mất cảm ứng touchpad",
        "fn + f khóa touchpad mở",
        "touchpad laptop bấm không ăn"
    ],
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
        keywords: [
        "Lỗi kẹt lệnh in / Máy in LAN",
        "máy in không in được lệnh",
        "printer offline sửa lỗi",
        "laptop không tìm thấy máy in mạng",
        "print spooler bị lỗi",
        "lệnh in bị kẹt trong queue",
        "máy in lan không kết nối được"
    ],
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
        keywords: [
        "Nhiễm Malware / Adware",
        "laptop bị quảng cáo pop-up",
        "máy tính nhiễm malware sửa",
        "trình duyệt tự nhảy trang lạ",
        "adware chrome cách xóa",
        "laptop cpu cao dù không làm gì",
        "malwarebytes quét virus miễn phí"
    ],
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
        keywords:[
        "Gãy bản lề / Bung chân ốc (Laptop)",
        "laptop gãy bản lề màn hình",
        "bung chân ốc laptop sửa chữa",
        "bản lề laptop bị cứng khó gập",
        "vỏ laptop nứt do bản lề",
        "laptop mở màn hình kêu lách cách",
        "keo epoxy sửa chân ốc laptop"
    ],
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
        keywords: [
        "Màn hình nhấp nháy (Screen Flickering)",
        "laptop màn hình chớp tắt liên tục",
        "screen flickering windows 10 sửa",
        "màn hình pc bị rung giật",
        "driver vga lỗi màn hình nháy",
        "laptop display flickering khắc phục",
        "màn hình laptop bị sọc chớp"
    ],
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
        keywords: [
        "Laptop đổ nước (Khẩn cấp)",
        "laptop đổ nước phải làm gì",
        "máy tính dính nước cứu dữ liệu",
        "laptop ướt không bật nguồn",
        "xử lý laptop bị vào nước",
        "sấy laptop sau khi đổ cà phê",
        "cứu laptop bị chập nước"
    ],
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
        keywords: [
        "Quên mật khẩu Windows / Mất PIN",
        "quên password win 10 cách vào",
        "laptop mất mã pin đăng nhập",
        "xóa mật khẩu windows bằng usb",
        "microsoft account quên pass lấy lại",
        "local account reset password win",
        "winpe xóa pass laptop"
    ],
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
        keywords: [
        "Micro không hoạt động",
        "laptop micro không thu âm",
        "zoom không nghe thấy tiếng",
        "microphone bị mute sửa lỗi",
        "privacy microphone access bật",
        "laptop gọi zalo không có tiếng",
        "driver audio micro không hoạt động"
    ],
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
        keywords: [
        "Cắm tai nghe loa vẫn kêu",
        "cắm tai nghe loa vẫn phát",
        "laptop không tắt loa khi cắm tai nghe",
        "jack 3.5mm không nhận tai nghe",
        "realtek audio console cài tai nghe",
        "lỗ cắm tai nghe laptop bị hỏng",
        "tai nghe cắm vào vẫn nghe loa ngoài"
    ],
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
        keywords: [
        "Chuột click đúp / Lăn loạn",
        "chuột click 1 lần thành 2 lần",
        "mouse double click fix lỗi",
        "con lăn chuột bị nhảy trang",
        "chuột gaming bị click đúp sửa",
        "switch chuột bị oxy hóa",
        "chuột văn phòng click không nhạy"
    ],
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
        keywords: [
        "USB / Thẻ nhớ Write Protected",
        "usb write protected xóa không được",
        "thẻ nhớ bị khóa chống ghi",
        "diskpart remove write protection",
        "usb không format được báo lỗi",
        "thẻ sd locked cách mở khóa",
        "registry writeprotect sửa lỗi usb"
    ],
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
        keywords: [
        "Máy in ra giấy trắng / Sọc đen",
        "máy in laser in ra giấy trắng",
        "bản in bị sọc đen dọc tờ",
        "cartridge máy in không nhận mực",
        "trống in bị xước sửa lỗi",
        "máy in kéo giấy nhưng không in",
        "hộp mực máy in bị lỗi"
    ],
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
        keywords: [
        "Không xuất hình ra máy chiếu",
        "laptop không xuất hình ra máy chiếu",
        "hdmi no signal sửa lỗi",
        "win + p không chuyển màn hình",
        "máy chiếu không nhận tín hiệu laptop",
        "cáp vga laptop không lên hình",
        "extended display không hoạt động"
    ],
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
        keywords: [
        "Laptop vỏ nhôm rò điện",
        "laptop vỏ kim loại bị giật tay",
        "rò điện laptop macbook dell xps",
        "sạc laptop bị tê khi chạm",
        "tiếp địa laptop chống giật",
        "emi laptop vỏ nhôm xử lý",
        "laptop cắm sạc bị rung tay"
    ],
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
        keywords:[
        "LAN Unidentified Network",
        "lan unidentified network sửa lỗi",
        "chấm than vàng mạng có dây",
        "ethernet no internet access fix",
        "dhcp không cấp ip cho laptop",
        "ipv4 tự động lấy ip",
        "winsock reset mạng có dây"
    ],
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
        keywords: [
        "Webcam bị đen / Lỗi 0xA00F4244",
        "webcam laptop bị đen màn hình",
        "camera not working windows 10",
        "lỗi 0xa00f4244 webcam sửa",
        "privacy shutter camera bị che",
        "driver webcam laptop không hoạt động",
        "zoom không thấy camera laptop"
    ],
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
        keywords: [
        "Màn hình cảm ứng Ghost Touch",
        "laptop cảm ứng tự click loạn",
        "ghost touch màn hình laptop fix",
        "touchscreen tự di chuyển chuột",
        "hid-compliant touch screen disable",
        "màn hình cảm ứng bị ẩm loạn",
        "surface ghost touch khắc phục"
    ],
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
        keywords: [
        "BitLocker đòi mã khóa",
        "bitlocker recovery key tìm ở đâu",
        "màn hình xanh bitlocker nhập mã",
        "quên bitlocker key mất dữ liệu",
        "microsoft account lấy recovery key",
        "bitlocker hỏi pass khi khởi động",
        "ổ cứng mã hóa bitlocker mở khóa"
    ],
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
        keywords: [
        "Virtual Disk Service / Chia ổ",
        "disk management shrink volume bị mờ",
        "virtual disk service error fix",
        "không chia được ổ d trong win 10",
        "minitool partition wizard chia ổ",
        "extend volume không bấm được",
        "phân vùng ổ cứng bị giới hạn"
    ],
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
        keywords: [
        "Quạt quay max nhưng máy mát",
        "quạt laptop quay max nhưng máy mát",
        "cpu fan 100% speed fix lỗi",
        "sensor nhiệt độ laptop bị hỏng",
        "bios fan control chỉnh tốc độ",
        "laptop quạt kêu to không nóng",
        "chip sio lỗi quạt chạy max"
    ],
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
        keywords: [
        "Màn hình hở sáng viền",
        "màn hình laptop bị hở sáng góc",
        "backlight bleeding ips fix được không",
        "viền màn hình phát sáng khi đen",
        "panel laptop hở sáng cạnh",
        "giảm brightness khắc phục hở sáng",
        "màn hình gaming bị bleed light"
    ],
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
        keywords: [
        "Phím bấm 1 ra nhiều ký tự",
        "phím laptop gõ 1 ra 3 ký tự",
        "key chattering keyboard fix",
        "phím cơ bị dính nhấn 1 ra 2",
        "filter keys windows bật tắt",
        "switch phím bị oxy hóa sửa",
        "laptop phím tự lặp ký tự"
    ],
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
        keywords: [
        "Ổ cứng kêu lạch cạch (Click of Death)",
        "ổ hdd kêu cạch cạch sửa được không",
        "click of death hard drive cứu dữ liệu",
        "ổ cứng cơ học kêu lạ cứu file",
        "bad sector ổ hdd sao lưu gấp",
        "đầu từ ổ cứng va đập tiếng kêu",
        "thay ssd khi hdd kêu lạch cạch"
    ],
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
        keywords: [
        "Password BIOS nền đen",
        "bios password quên cách xóa",
        "system password laptop mở khóa",
        "clr cmos xóa pass bios pc",
        "bios-pw.org lấy master password",
        "laptop hỏi pass khi bật máy",
        "thinkpad bios password reset"
    ],
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
        keywords: [
        "USB Over Current Status Detected",
        "usb over current detected fix",
        "mainboard báo lỗi usb chập",
        "pc tắt sau 15 giây usb error",
        "cổng usb bị chạm mass sửa",
        "cáp usb front panel bị hỏng",
        "ic bảo vệ usb mainboard cháy"
    ],
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
        keywords:[
        "RAM không nhận đủ (Hardware Reserved)",
        "ram 8gb chỉ nhận 4gb usable",
        "hardware reserved memory fix",
        "laptop không nhận hết ram lắp",
        "dual channel ram cắm sai khe",
        "bios uma frame buffer giảm"
    ],
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
        keywords: [
        "Màn hình lưu ảnh / Burn-in",
        "màn hình laptop bị bóng mờ icon",
        "burn-in oled có sửa được không",
        "image retention lcd khắc phục",
        "taskbar in lên màn hình lcd",
        "youtube fix burn-in video chạy",
        "màn hình bị ghost image tạm thời"
    ],
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
        keywords: [
        "Ứng dụng tự văng (Crash to Desktop)",
        "game bị văng ra desktop đột ngột",
        "application crash to desktop fix",
        "phần mềm tự tắt không báo lỗi",
        "nvlddmkm error game bị crash",
        "directx thiếu file dll game văng",
        "ram memory leak ứng dụng đóng"
    ],
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
        keywords:[
        "Sai định dạng ngày tháng / Font ô vuông",
        "windows sai định dạng ngày tháng",
        "font chữ tiếng việt bị ô vuông",
        "region settings đổi dd/mm/yyyy",
        "unikey gõ tiếng việt bị lỗi font",
        "excel đảo ngày tháng sửa lỗi",
        "cài font vni tcvn3 cho windows"
    ],
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
        keywords: [
        "Không Format được USB / Ổ đĩa",
        "usb không format được windows error",
        "windows unable to complete format fix",
        "diskpart clean usb bị lỗi",
        "raw partition usb cứu dữ liệu",
        "ổ cứng ngoài format không thành"
    ],
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
        keywords:[
        "LAN đèn cam / Rớt tốc độ",
        "lan đèn cam 100mbps fix",
        "ethernet speed chỉ 100mbps không lên gigabit",
        "cáp mạng cat5e bấm lại 8 lõi",
        "card mạng speed & duplex chỉnh",
        "dây lan đứt lõi trong giảm tốc",
        "router gigabit nhưng máy chỉ 100mbps"
    ],
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
        keywords: [
        "Cắm nhầm 220V cho thiết bị 110V",
        "cắm nhầm 220v cho nguồn 110v nổ",
        "psu 110v cắm 220v cứu được không",
        "máy tính từ mỹ về việt nam cháy nguồn",
        "auto-volt power supply phân biệt",
        "varistor bảo vệ quá áp nổ",
        "thay tụ nguồn sau khi cắm sai điện"
    ],
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
        keywords: [
        "Thanh Taskbar đơ, nháy liên tục",
        "taskbar laptop bị đơ",
        "explorer.exe windows 11 lỗi",
        "desktop nhấp nháy liên tục",
        "start menu không mở được",
        "win + e không hoạt động",
        "restart explorer task manager",
        "laptop thanh công cụ bị treo"
    ],
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
        keywords: [
        "Tiếng rít e-e-e từ linh kiện (Coil Whine)",
        "pc kêu e e e khi chơi game",
        "coil whine vga là gì",
        "card màn hình kêu rít",
        "nguồn máy tính kêu chói tai",
        "cách giảm coil whine laptop",
        "tiếng rít linh kiện điện tử",
        "vga kêu to có sao không"
    ],
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
        keywords: [
        "Pin tụt nhanh, sập nguồn ảo (Laptop)",
        "laptop pin 40% tự tắt",
        "pin laptop báo ảo",
        "sập nguồn khi rút sạc laptop",
        "calibrate pin laptop cách làm",
        "pin chai không sạc đầy",
        "laptop dùng pin được 5 phút",
        "battery report windows kiểm tra"
    ],
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
        keywords: [
        "Máy tính tự thức giấc giữa đêm",
        "laptop tự bật khi sleep",
        "máy tính tự wake up",
        "tắt tính năng wake on lan",
        "powercfg lastwake kiểm tra",
        "laptop ngủ không sâu",
        "chuột đánh thức máy tính",
        "tắt allow wake timer windows"
    ],
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
        keywords: [
        "Cổng tai nghe có tiếng rột rẹt, nhiễu",
        "tai nghe laptop bị rè",
        "cổng 3.5mm nhiễu tĩnh điện",
        "âm thanh laptop bị xè xè",
        "laptop nghe nhạc bị tạp âm",
        "cắm tai nghe bị nhiễu điện",
        "sound card rời usb laptop",
        "tắc tiếp mass laptop giật tay"
    ],
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
        keywords: [
        "Tụt FPS, giật khựng khi chơi game",
        "game bị giật cục fps",
        "stuttering khi chơi game pc",
        "laptop chơi game bị lag đột ngột",
        "ổ hdd gây giật game",
        "vram đầy game bị khựng",
        "msi afterburner theo dõi fps",
        "nâng cấp ssd chơi game mượt"
    ],
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
    "keywords": [
        "Cắm sai vị trí RAM làm giảm hiệu năng",
        "ram dual channel cắm sai khe",
        "pc lắp 2 thanh ram chạy single",
        "mainboard 4 khe ram cắm khe nào",
        "ram không chạy dual channel",
        "laptop 2 khe ram cắm đúng cách",
        "kiểm tra ram single dual",
        "task manager memory slot sử dụng"
    ],
    "name": "Cắm sai vị trí RAM làm giảm hiệu năng (Chỉ Desktop)",
    "category": "Phần cứng (Lỗi do lắp ráp)",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Máy lắp 16GB RAM (2 thanh 8GB) đắt tiền nhưng chơi game FPS rất thấp, máy chạy không mượt.",
        "Màn hình khởi động của BIOS có thể hiện cảnh báo \"Memory modules are in non-optimized slots\"."
    ],
    "diagnosisSteps": [
        "Mở nắp kính case máy tính.",
        "Nhìn vào khu vực cắm RAM bên cạnh CPU (thường có 4 khe cắm).",
        "Quan sát xem 2 thanh RAM đang cắm sát rạt vào nhau (Khe 1-2 hoặc 3-4) hay cắm cách nhau 1 khe."
    ],
    "fix": [
        "Tắt máy, rút điện hoàn toàn.",
        "Tháo 1 thanh RAM ra.",
        "Cắm lại vào đúng nguyên tắc Dual Channel: Ưu tiên cắm vào các khe có màu giống nhau (Thường là khe số 2 và khe số 4 tính từ CPU đếm ra).",
        "⚠️ CẢNH BÁO: Luôn ấn thanh RAM xuống với lực đều hai đầu cho đến khi nghe tiếng \"Tách\" của lẫy khóa. Cắm lỏng nửa vời khi bật máy sẽ làm chập cháy tiếp điểm RAM ngay lập tức.",
        "Ghi chú: Lỗi lắp ráp kinh điển của người dùng nghiệp dư. Việc cắm RAM cạnh nhau sẽ bắt hệ thống chạy ở chế độ Single Channel (Băng thông hẹp), làm lãng phí một nửa tốc độ thực tế của phần cứng."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
    },
    {
    "keywords": [
        "Trình duyệt báo lỗi \"Your clock is behind\"",
        "trình duyệt báo lỗi đồng hồ",
        "net err cert date invalid",
        "windows sai ngày giờ không vào web",
        "sync time windows 10",
        "lỗi ssl do sai giờ hệ thống",
        "cài lại giờ tự động windows",
        "pin cmos hết pin sai giờ"
    ],
    "name": "Trình duyệt báo lỗi \"Your clock is behind/ahead\"",
    "category": "Hệ điều hành | Mạng",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Trình duyệt bị chặn bởi màn hình báo lỗi \"Your connection is not private\" kèm dòng chữ báo đồng hồ chạy sai hoặc lỗi NET::ERR_CERT_DATE_INVALID."
    ],
    "diagnosisSteps": [
        "Nhìn xuống góc phải màn hình xem ngày, tháng, năm có đúng với thực tế hiện tại không[cite: 369].",
        "Ví dụ: Năm hiện tại là 2026 nhưng máy đang báo năm 2008[cite: 370]."
    ],
    "fix": [
        "Chuột phải vào đồng hồ góc phải dưới -> Adjust date/time[cite: 371].",
        "Bật On tính năng Set time automatically và nhấn nút Sync now để máy tính tự cập nhật giờ chuẩn từ máy chủ Microsoft[cite: 372].",
        "Nếu sau khi tắt máy rút điện mà giờ lại bị sai, hãy kiểm tra và thay viên pin CMOS (CR2032) trên mainboard[cite: 745].",
        "Ghi chú: Lỗi này khiến các chứng chỉ bảo mật (SSL) của trang web bị coi là không hợp lệ vì nằm ngoài khoảng thời gian thực của máy tính[cite: 736]."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Gãy lẫy nhựa trong cổng USB (Chạm mass)",
        "cổng usb gãy lẫy nhựa",
        "usb over current detected pc",
        "chân đồng usb chạm vỏ",
        "cổng usb bị chập cháy",
        "rút cáp usb front panel",
        "sửa cổng usb laptop gãy",
        "cắm usb bị nổ tia lửa"
    ],
    "name": "60. Gãy lẫy nhựa trong cổng USB (Chạm mass)",
    "category": "Vật lý (Phần cứng)",
    "difficulty": "Khó",
    "estimatedCost": "def",
    "symptoms": [
        "Không thể cắm thiết bị vào cổng USB, máy có thể bị sập nguồn ngay lập tức và có mùi khét khi cố cắm hoặc khi bật máy."
    ],
    "diagnosisSteps": [
        "Tuyệt đối KHÔNG cắm thêm bất kỳ thiết bị nào vào cổng có dấu hiệu hỏng vật lý[cite: 359].",
        "Dùng đèn pin soi thẳng vào cổng USB để kiểm tra xem miếng nhựa định vị ở giữa có bị mất không[cite: 358, 360].",
        "Kiểm tra xem 4 chân đồng có bị cong gập chạm vào vỏ sắt bao quanh (chạm mass) hay không[cite: 358]."
    ],
    "fix": [
        "Nếu là máy bàn (Desktop): Rút dây nối cổng USB hỏng từ mặt trước vỏ case ra khỏi mainboard để cách ly hoàn toàn[cite: 361].",
        "Nếu là cổng USB hàn chết trên Mainboard/Laptop: Dùng nhíp nhựa hoặc que gỗ nhỏ cẩn thận tách các chân đồng đang chạm nhau ra (tạm thời)[cite: 362].",
        "Cách triệt để: Mang máy ra tiệm để kỹ thuật viên dùng máy khò nhổ bỏ cổng USB hỏng và thay bằng cổng mới[cite: 363].",
        "Ghi chú: Lỗi này rất nguy hiểm vì chân nguồn 5V chạm vào vỏ sắt (GND) sẽ gây đoản mạch, có thể làm cháy chipset hoặc IC nguồn của máy tính[cite: 364]."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Kẹt xung nhịp CPU ở mức 0.79GHz",
        "cpu bị khóa 0.79ghz",
        "bd prochot throttlestop tắt",
        "laptop cắm sạc cpu chậm",
        "throttlestop sửa lỗi xung nhịp",
        "cpu không tăng tốc độ khi chơi game",
        "laptop chậm dù cấu hình mạnh",
        "sạc không chính hãng cpu giảm xung"
    ],
    "name": "Kẹt xung nhịp CPU ở mức 0.79GHz / 0.8GHz",
    "category": "Phần cứng | Hệ điều hành",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Máy tính chạy cực kỳ chậm, giật lag ngay cả khi chỉ mở một tab web, kiểm tra Task Manager thấy tốc độ CPU (Speed) bị khóa cứng ở 0.79GHz hoặc 0.8GHz không tăng lên dù đang chạy nặng."
    ],
    "diagnosisSteps": [
        "Mở Task Manager -> Tab Performance -> CPU để xác nhận thông số Speed.",
        "Kiểm tra xem máy có đang cắm sạc không (một số dòng Laptop tự hạ xung khi dùng pin yếu).",
        "Kiểm tra nhiệt độ CPU (nếu quá nóng máy sẽ tự bóp xung để bảo vệ linh kiện)."
    ],
    "fix": [
        "Sử dụng phần mềm ThrottleStop: Mở app, BỎ TÍCH ở ô 'BD PROCHOT', sau đó nhấn Save và Turn On. Đây là cách 'vượt rào' phổ biến nhất cho lỗi này.",
        "Kiểm tra sạc (Adapter): Nếu sạc không chính hãng hoặc không đủ công suất, Laptop Dell/HP thường tự hạ xung CPU về mức thấp nhất.",
        "Vệ sinh máy và tra keo tản nhiệt nếu nguyên nhân do quá nhiệt (Thermal Throttling).",
        "Ghi chú: Lỗi BD PROCHOT (Bi-directional Processor Hot) là một tín hiệu ảo từ mạch cảm biến trên Mainboard hoặc sạc báo về, bắt CPU phải giảm tốc độ dù thực tế máy chưa quá nóng."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Lỏng Card đồ họa do cong xệ (GPU Sag)",
        "vga bị xệ pc case",
        "gpu sag giá đỡ vga",
        "card màn hình lỏng khe pcie",
        "pc di chuyển mất hình vga",
        "chống xệ card đồ họa 3 quạt",
        "pcb vga bị cong sửa",
        "vga holder lắp như thế nào"
    ],
    "name": "Lỏng Card đồ họa do cong xệ (GPU Sag)",
    "category": "Vật lý (Phần cứng)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Thùng máy PC bị xê dịch hoặc va chạm nhẹ là màn hình tắt phụp (No Signal), quạt VGA rú rầm rĩ hoặc máy bị treo cứng."
    ],
    "diagnosisSteps": [
        "Mở nắp kính thùng máy, quan sát xem phần đuôi của Card đồ họa (loại 2-3 quạt) có bị chúi hẳn xuống so với phương ngang không.",
        "Dùng ngón tay nhấc nhẹ đuôi Card lên xem có bị rơ lỏng ở khe cắm PCIe trên Mainboard không."
    ],
    "fix": [
        "Tắt máy rút điện. Tháo hẳn Card đồ họa ra, dùng cồn lau sạch chân đồng PCIe và cắm cẩn thận lại vào khe, siết chặt ốc giữ ở sườn case.",
        "Bắt buộc trang bị Giá đỡ VGA (VGA Holder). Có thể mua giá đỡ nhôm vặn ren, hoặc dùng vật cứng cách điện tự chế chống từ đáy case lên đuôi Card.",
        "⚠️ CẢNH BÁO: Việc để Card đồ họa xệ lâu ngày sẽ làm cong bản mạch (PCB), dẫn đến hở chân chì chip GPU (hỏng không thể sửa) hoặc làm bung chân khe PCIe."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Mất Wi-Fi sau khi gập máy (Sleep)",
        "laptop ngủ dậy mất wifi",
        "wifi không wake up sau sleep",
        "tắt tiết kiệm pin card wifi",
        "power management wifi adapter",
        "intel ax200 mất kết nối sleep"
    ],
    "name": "Mất kết nối Wi-Fi sau khi gập máy (Sleep/Hibernate)",
    "category": "Hệ điều hành | Quản lý năng lượng",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Gập màn hình laptop để máy ngủ, khi mở lại thì biểu tượng Wi-Fi bị mất hoặc hiện dấu chấm than, phải khởi động lại máy mới dùng bình thường."
    ],
    "diagnosisSteps": [
        "Khẳng định Card Wi-Fi không hỏng phần cứng vì khi Restart vẫn nhận diện và sử dụng bình thường.",
        "Xác định đây là lỗi phần mềm do Card Wi-Fi không thể tự thức giấc sau trạng thái nghỉ."
    ],
    "fix": [
        "Bấm Win + X -> Device Manager -> Mở rộng Network adapters.",
        "Chuột phải vào Card Wi-Fi đang dùng (Ví dụ: Intel(R) Wi-Fi 6 AX201) -> Chọn Properties.",
        "Chuyển sang thẻ Power Management.",
        "BỎ TÍCH ở ô 'Allow the computer to turn off this device to save power' (Cho phép máy tính tắt thiết bị này để tiết kiệm pin). Bấm OK.",
        "Ghi chú: Một số bản update driver Wi-Fi xử lý đánh thức ACPI kém, việc bỏ giới hạn tiết kiệm pin sẽ giải quyết dứt điểm sự cố."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Cảnh báo \"CPU Fan Error!\" khi bật máy",
        "bios báo cpu fan error",
        "quạt cpu không nhận mainboard",
        "cpu fan speed ignore bios",
        "cắm quạt sai chân cpu_fan",
        "quạt tản nhiệt quay nhưng báo lỗi",
        "mainboard không đọc tốc độ quạt"
    ],
    "name": "Cảnh báo \"CPU Fan Error!\" khi vừa bật máy",
    "category": "Phần cứng",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Vừa nhấn nút nguồn, máy hiện màn hình đen với dòng chữ \"CPU Fan Error! Press F1 to Run SETUP\" và không vào được Windows."
    ],
    "diagnosisSteps": [
        "Mở nắp thùng máy, quan sát xem quạt tản nhiệt nằm trên CPU có quay hay không.",
        "Kiểm tra xem dây cắm của quạt có đang cắm đúng vào chân có chữ 'CPU_FAN' trên Mainboard hay không (hay đang cắm nhầm sang SYS_FAN/CHA_FAN)."
    ],
    "fix": [
        "Nếu quạt vẫn quay bình thường nhưng máy vẫn báo lỗi: Vào BIOS -> Monitor -> Tìm mục CPU Fan Speed và chọn 'Ignore' để máy bỏ qua việc kiểm tra tốc độ quạt.",
        "Nếu quạt không quay: Kiểm tra xem có dây điện nào vướng vào cánh quạt không, hoặc thử cắm lại jack nguồn của quạt thật chặt.",
        "Ghi chú: Lỗi này thường do tốc độ vòng quay của quạt quá thấp (thường gặp ở quạt xịn/quạt rời) khiến cảm biến của Mainboard hiểu lầm là quạt đã hỏng."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Lỗ cắm tai nghe mặt trước case không tiếng",
        "cổng tai nghe trước case không hoạt động",
        "hd audio front panel không nhận",
        "realtek disable front panel jack",
        "cắm tai nghe mặt trước pc không nghe",
        "jaud1 mainboard cắm đúng cách"
    ],
    "name": "Lỗ cắm tai nghe mặt trước vỏ case không có tiếng",
    "category": "Phần cứng (Lắp ráp / Thiết lập BIOS)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Cắm tai nghe vào lỗ mặt trước vỏ case không có tiếng và không nhận thiết bị, trong khi cắm mặt sau vẫn nghe bình thường."
    ],
    "diagnosisSteps": [
        "Tháo nắp kính hông case, kiểm tra cụm dây của vỏ case ghi chữ HD AUDIO đã được cắm vào chân JAUD1 (hoặc F_AUDIO) trên mainboard chưa."
    ],
    "fix": [
        "Cắm đúng chân HD AUDIO lên mainboard.",
        "Mở phần mềm Realtek Audio Console (hoặc trình quản lý âm thanh của hãng main). Vào biểu tượng Cài đặt bánh răng -> Bật tính năng Disable front panel jack detection (Vô hiệu hóa nhận dạng giắc cắm bảng mặt trước).",
        "Trên mainboard đời rất cũ: Vào BIOS -> Onboard Devices Configuration -> Đổi thiết lập Front Panel Type từ HD Audio sang AC97.",
        "Ghi chú: Lỗi do bảng mạch Audio mặt trước của các loại vỏ case rẻ tiền thường không có tín hiệu dò chân (Jack Detection), dẫn đến Windows không biết khi nào người dùng cắm tai nghe vào để xuất âm thanh ra. Tính năng \"Disable front panel jack detection\" sẽ ép hệ thống luôn luôn đẩy âm thanh ra mặt trước."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Pin Laptop phồng rộp đội vỏ, bung Touchpad",
        "pin laptop phồng đội vỏ",
        "touchpad laptop bị cộm lên",
        "pin lithium phồng nguy hiểm",
        "tháo pin phồng laptop an toàn",
        "laptop kê tay bị gồ"
    ],
    "name": "Pin Laptop phồng rộp đội vỏ, bung Touchpad",
    "category": "Vật lý (Phần cứng)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Bề mặt kê tay hoặc Touchpad bị gồ lên bất thường, bấm Touchpad thấy cứng, máy đặt trên bàn bị cập kênh hoặc hở ngàm nắp đáy."
    ],
    "diagnosisSteps": [
        "Ngừng cắm sạc ngay lập tức.",
        "Nhìn ngang thân máy để xác nhận độ phồng và cảm nhận xem khu vực đó có tỏa nhiệt nóng bất thường không."
    ],
    "fix": [
        "Tắt nguồn máy. Chuẩn bị bộ tua vít mở nắp đáy laptop.",
        "Cẩn thận tháo các ốc vít. Khi nhấc nắp đáy ra, tuyệt đối không dùng vật nhọn bẩy mạnh vào khu vực có pin.",
        "Tháo giắc cắm pin ra khỏi mainboard, nhấc viên pin phồng ra mang đến điểm thu gom rác thải điện tử và thay pin mới.",
        "⚠️ CẢNH BÁO: Pin Lithium-ion phồng chứa khí gas dễ cháy. TUYỆT ĐỐI không dùng kim chọc xì, không bóp nắn. Nếu rách màng bọc, pin sẽ bắt lửa và phát nổ cực mạnh.",
        "Ghi chú: Pin phồng là cơ chế bảo vệ cuối cùng để cell pin không nổ khi chai quá mức. Máy vẫn có thể cắm sạc dùng trực tiếp khi không có pin."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Màn hình đen chỉ có con trỏ chuột",
        "windows đen màn hình có chuột",
        "explorer.exe không khởi động",
        "ctrl shift esc mở task manager",
        "màn hình đen sau login win 10",
        "chạy explorer.exe mới vào desktop",
        "lỗi black screen with cursor",
        "sfc scannow sửa file hệ thống"
    ],
    "name": "Màn hình đen chỉ có con trỏ chuột (Black Screen with Cursor)",
    "category": "Hệ điều hành",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Sau khi đăng nhập, máy chỉ hiện một màu đen thui và con trỏ chuột trắng, không hiển thị icon hay thanh Taskbar."
    ],
    "diagnosisSteps": [
        "Bấm thử phím Capslock xem đèn báo trên bàn phím có phản hồi không để khẳng định máy chưa bị treo cứng."
    ],
    "fix": [
        "Bấm tổ hợp phím Ctrl + Shift + Esc (hoặc Ctrl + Alt + Del) để gọi Task Manager.",
        "Nhấn File -> Run new task.",
        "Gõ explorer.exe vào ô trống và nhấn Enter để màn hình Desktop hiện ra.",
        "Để sửa triệt để: Mở CMD (Quyền Admin) gõ lệnh 'sfc /scannow' để khôi phục file hệ thống bị lỗi.",
        "Ghi chú: Lỗi này xảy ra do tiến trình Windows Explorer bị crash không thể tự khởi động cùng Windows."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Phân vùng ổ cứng biến thành định dạng RAW",
        "ổ cứng bị raw không mở được",
        "format disk raw mất dữ liệu",
        "chkdsk sửa lỗi raw partition",
        "easeus data recovery ổ raw",
        "ổ đĩa 0 bytes raw fix",
        "cứu dữ liệu ổ cứng raw",
        "raw partition do cúp điện đột ngột"
    ],
    "name": "Phân vùng ổ cứng biến thành định dạng RAW",
    "category": "Hệ điều hành | Lưu trữ",
    "difficulty": "Khó (Nếu cần cứu dữ liệu) / Dễ (Nếu chấp nhận mất trắng)",
    "estimatedCost": "def",
    "symptoms": [
        "Ổ đĩa báo lỗi 'You need to format the disk' khi mở, File System báo định dạng RAW và dung lượng hiển thị 0 Bytes."
    ],
    "diagnosisSteps": [
        "Nhớ lại xem trước đó có bị cúp điện đột ngột hoặc rút ổ cứng ngoài không an toàn (Safely Remove) không.",
        "Xác định xem dữ liệu bên trong có quan trọng hay không trước khi tiến hành các bước tiếp theo."
    ],
    "fix": [
        "NẾU KHÔNG CẦN DỮ LIỆU: Tiến hành Format disk để ổ cứng hoạt động lại bình thường.",
        "NẾU CẦN DỮ LIỆU (Tuyệt đối không Format): Chạy CMD quyền Admin, gõ lệnh 'chkdsk X: /f /r' (X là tên ổ bị lỗi) để sửa bảng phân vùng.",
        "Nếu lệnh CMD không cứu được: Sử dụng phần mềm EaseUS Data Recovery hoặc MiniTool Power Data Recovery để quét sâu và lấy dữ liệu ra ổ đĩa khác trước khi Format.",
        "Ghi chú: RAW nghĩa là Windows không đọc được mục lục của ổ cứng. Format sẽ ghi đè mục lục mới và làm mất dấu vết dữ liệu cũ."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Nút nguồn (Power Button) bị liệt, chập chờn",
        "nút nguồn pc bấm không ăn",
        "power switch laptop bị hỏng",
        "dùng reset sw thay power sw",
        "nút nguồn chập máy tự tắt",
        "thay mạch nút nguồn laptop",
        "bấm nguồn phải ấn mạnh mới lên",
        "công tắc nguồn vật lý bị liệt"
    ],
    "name": "Nút nguồn (Power Button) bị liệt, chập chờn",
    "category": "Phần cứng (Công tắc vật lý)",
    "difficulty": "Dễ (Với PC) / Khó (Với Laptop)",
    "estimatedCost": "def",
    "symptoms": [
        "Bấm nút nguồn không tác dụng, phải ấn thật sâu hoặc đang dùng máy tự động hiện 'Shutting down' rồi tắt ngấm."
    ],
    "diagnosisSteps": [
        "Loại trừ nguyên nhân do nguồn điện (kiểm tra cáp sạc, PSU).",
        "Cảm nhận phản hồi vật lý của nút: Bấm có còn độ nảy (khấc) không hay bị lún tụt hẳn vào trong."
    ],
    "fix": [
        "Với PC (Desktop): Tháo nắp case, rút cặp dây POWER SW và cắm cặp dây RESET SW vào thay thế để bật máy bằng nút Reset.",
        "Với Laptop: Nếu nút nguồn rời thì thay cáp mạch mới; nếu tích hợp trên bàn phím thì bắt buộc phải thay toàn bộ cụm bàn phím.",
        "Ghi chú: Nút nguồn chập chờn gây chạm mạch (giống như bị giữ lì nút nguồn), làm máy tắt đột ngột dễ hỏng ổ cứng và lỗi Windows."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Cắm sạc thì máy giật lag, rút sạc lại mượt",
        "laptop cắm sạc bị lag",
        "rút sạc laptop chạy nhanh hơn",
        "sạc không nhận kim id gãy",
        "ac adapter unknown bios dell",
        "cpu giảm xung khi cắm sạc",
        "thay sạc laptop chính hãng",
        "mạch sạc mainboard bị lỗi"
    ],
    "name": "Cắm sạc thì máy giật lag, rút sạc ra lại dùng mượt",
    "category": "Phần cứng (Nguồn / Adapter)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Cắm sạc vào là máy bị khựng lag, thao tác chậm chạp và tốc độ CPU tụt xuống 0.79 GHz, nhưng dùng pin thì lại mượt."
    ],
    "diagnosisSteps": [
        "Rút cáp sạc, kiểm tra chiếc kim nhỏ chính giữa lỗ sạc xem có bị gãy, cong vẹo hay mất không.",
        "Vào BIOS kiểm tra mục 'AC Adapter Type' xem máy báo 'Unknown' hoặc báo sai công suất sạc không."
    ],
    "fix": [
        "Dùng nhíp nhọn khều hoặc nắn lại chiếc kim ID ở giữa đầu sạc cho thẳng lại (nếu bị cong).",
        "Thay thế củ sạc (Adapter) chính hãng mới đúng công suất.",
        "Nếu đã thử sạc xịn vẫn bị: Mang ra tiệm sửa mạch sạc (IC so áp) trên Mainboard.",
        "Ghi chú: Đây là cơ chế bảo vệ nguồn. Khi mất tín hiệu từ kim ID, máy không nhận diện được sạc nên tự động hạ xung CPU xuống mức thấp nhất để tránh nguy cơ cháy nổ."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Gập mở màn hình bị chớp tắt hoặc đổi màu",
        "laptop gập màn hình bị sọc",
        "cáp màn hình laptop bị đứt ngầm",
        "gập mở laptop chớp màn hình",
        "cáp edp laptop thay ở đâu",
        "màn hình laptop nhiễu khi di chuyển",
        "sửa cáp màn hình laptop bản lề",
        "xuất hình hdmi bình thường màn chính sọc"
    ],
    "name": "Gập mở màn hình bị chớp tắt hoặc đổi màu",
    "category": "Vật lý (Cáp tín hiệu)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Màn hình laptop bị nhiễu sọc ngang, chớp tắt khi thay đổi góc gập mở, nhưng trở lại bình thường khi điều chỉnh đúng vị trí."
    ],
    "diagnosisSteps": [
        "Lắc nhẹ thân máy để loại trừ lỗi khác; nếu chỉ gập mở mới bị nhiễu thì khẳng định lỗi cáp tín hiệu (LVDS/eDP).",
        "Xuất hình ra màn hình rời qua HDMI, nếu màn ngoài không bị sọc thì chắc chắn không phải do hỏng Card VGA."
    ],
    "fix": [
        "Mở nắp đáy laptop, tháo pin để đảm bảo an toàn.",
        "Tìm cụm cáp màn hình dọc theo bản lề, rút ra vệ sinh chân tiếp xúc và cắm thật chặt lại.",
        "Nếu cáp bị đứt gập ruột đồng bên trong do bản lề chèn ép: Bắt buộc đặt mua sợi cáp eDP đúng mã máy để thay thế.",
        "Ghi chú: Nhiều trường hợp cáp đứt ngầm bên trong dù vỏ ngoài nguyên vẹn. Việc thay cáp cần sự tỉ mỉ để tránh làm vỡ mặt kính màn hình."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Lỗi trùng địa chỉ IP trong mạng LAN",
        "ip conflict windows 10 sửa",
        "windows detected ip address conflict",
        "ip tĩnh trùng nhau trong lan",
        "ipconfig release renew sửa lỗi",
        "đặt ip tĩnh tránh trùng",
        "máy in tranh chấp ip mạng",
        "dhcp cấp ip trùng 2 máy"
    ],
    "name": "Lỗi trùng địa chỉ IP trong mạng LAN (IP Conflict)",
    "category": "OS | Mạng",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Mất mạng đột ngột, biểu tượng mạng có chấm than vàng và hiện thông báo 'Windows has detected an IP address conflict'."
    ],
    "diagnosisSteps": [
        "Kiểm tra xem máy có đang thiết lập IP tĩnh thủ công không.",
        "Xác định xem có thiết bị mới (di động, máy in) vừa kết nối vào mạng gây tranh chấp IP hay không."
    ],
    "fix": [
        "Tạm thời giải phóng IP: Mở CMD (Admin), gõ lệnh 'ipconfig /release' sau đó gõ 'ipconfig /renew' để xin cấp IP mới. Khởi động lại máy.",
        "Khắc phục cấu hình: Vào Network Connections -> Card mạng -> Properties -> IPv4 -> Chọn 'Obtain an IP address automatically' (DHCP).",
        "Ghi chú: Nếu dùng IP tĩnh, hãy chọn các đuôi IP ở xa dải cấp phát tự động (ví dụ .200 đến .250) để tránh bị trùng với các thiết bị di động mới kết nối."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Tràn keo kim loại lỏng gây chập Mainboard",
        "keo tản nhiệt kim loại lỏng dẫn điện",
        "liquid metal chập mainboard",
        "keo tản nhiệt chảy ra bo mạch",
        "cẩn thận khi tra keo kim loại",
        "keo mx-4 an toàn không dẫn điện",
        "vệ sinh keo kim loại lỏng bằng cồn",
        "kapton tape cách điện cpu"
    ],
    "name": "Tràn keo tản nhiệt kim loại lỏng (Liquid Metal) gây chập Mainboard",
    "category": "Phần cứng (Lỗi do người dùng tự bảo dưỡng)",
    "difficulty": "Khó",
    "estimatedCost": "def",
    "symptoms": [
        "Sau khi tự tra keo tản nhiệt và lắp lại, máy bật lên bị xẹt lửa, quạt quay vài giây rồi tắt lịm hoặc có mùi cháy khét."
    ],
    "diagnosisSteps": [
        "Xác định loại keo vừa tra có phải dạng dung dịch lấp lánh như thủy ngân (Liquid Metal) hay không.",
        "Tháo tản nhiệt, dùng kính lúp soi các tụ điện quanh chip CPU/GPU xem có giọt kim loại lỏng nào nhỏ ra gây chạm mạch không."
    ],
    "fix": [
        "Xử lý hậu quả: TUYỆT ĐỐI KHÔNG dùng giấy lau. Phải dùng bông tăm xịt cồn IPA 90 độ chấm và lăn nhẹ để hút dần các giọt kim loại lỏng ra.",
        "Nếu máy đã bị chập chết: Mang ra trung tâm kỹ thuật để đo đạc cứu chip (tỉ lệ sống sót thường rất thấp).",
        "⚠️ CẢNH BÁO: Keo kim loại lỏng dẫn điện cực tốt. Người dùng phổ thông chỉ nên dùng keo gốc gốm/silicon (như MX-4) không dẫn điện để đảm bảo an toàn.",
        "Ghi chú: Việc tra keo kim loại lỏng yêu cầu phải có băng keo cách điện (Kapton tape) và sơn lót cách ly, nếu không rất dễ gây phá hủy dàn máy vĩnh viễn."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Thiếu thư viện .DLL (VCRUNTIME140.dll)",
        "missing vcruntime140.dll fix",
        "msvcp140.dll không tìm thấy",
        "cài visual c++ redistributable all",
        "lỗi dll khi mở game pc",
        "directx end user runtime download",
        "tải dll từ trang lạ nguy hiểm",
        "install_all.bat cài c++ tự động"
    ],
    "name": "Thiếu thư viện .DLL (VCRUNTIME140.dll, MSVCP140.dll)",
    "category": "Hệ điều hành | Phần mềm",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Mở phần mềm hoặc game thì hiện thông báo lỗi System Error: 'The program can't start because [Tên_file].dll is missing from your computer'."
    ],
    "diagnosisSteps": [
        "Khẳng định hệ điều hành Windows đang thiếu bộ thư viện nền tảng C++ hoặc DirectX mà phần mềm yêu cầu."
    ],
    "fix": [
        "Tải bộ 'Visual C++ Redistributable Runtimes All-in-One' trên Google.",
        "Giải nén, chạy file install_all.bat bằng quyền Admin để cài đặt toàn bộ các phiên bản C++ từ 2005 đến nay.",
        "Tải và cài đặt 'DirectX End-User Runtime Web Installer' từ trang chủ Microsoft, sau đó khởi động lại máy.",
        "⚠️ CẢNH BÁO: TUYỆT ĐỐI không tải từng file .dll lẻ từ các trang web lạ để tránh bị nhiễm mã độc (Trojan) chiếm quyền điều khiển máy tính."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Cắm nhầm cổng xuất hình (Mainboard thay VGA)",
        "cắm màn hình sai cổng pc",
        "có vga rời nhưng cắm onboard",
        "pc chơi game lag do cắm sai",
        "cổng hdmi mainboard vs vga rời",
        "no signal pc có card rời",
        "cắm lại dây màn hình đúng cổng",
        "kiểm tra cổng xuất hình pc"
    ],
    "name": "Cắm nhầm cổng xuất hình (Cắm vào Mainboard thay vì Card rời)",
    "category": "Phần cứng (Lắp ráp)",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "PC có Card đồ họa rời nhưng chơi game bị giật lag (FPS thấp) hoặc bật máy quạt quay nhưng màn hình báo 'No Signal'."
    ],
    "diagnosisSteps": [
        "Nhìn ra mặt sau thùng máy và quan sát sợi dây tín hiệu màn hình (HDMI/DisplayPort) đang được cắm vào khu vực nào."
    ],
    "fix": [
        "Nếu dây màn hình đang cắm ở cụm cổng dọc phía trên (chung với USB, LAN) thì bạn đã cắm sai vào Card Onboard của CPU.",
        "Tắt máy, rút dây màn hình ra và cắm thẳng vào cụm cổng nằm ngang ở phía dưới (cổng của Card đồ họa rời). Khởi động lại máy.",
        "Ghi chú: Đây là lỗi sai kinh điển của người dùng khi lần đầu lắp máy hoặc cắm lại dây sau khi vệ sinh, khiến máy không tận dụng được sức mạnh của VGA rời."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Máy tính báo lỗi bằng Tiếng bíp (Beep Codes)",
        "mainboard kêu tít tít không lên hình",
        "beep code ram lỗi liên tục",
        "1 dài 2 ngắn lỗi vga bios",
        "loa buzzer mainboard lắp ở đâu",
        "đèn debug cpu dram vga boot",
        "tra mã beep code asus gigabyte",
        "vệ sinh chân ram vga hết bíp"
    ],
    "name": "Máy tính báo lỗi bằng Tiếng bíp (Beep Codes)",
    "category": "Phần cứng",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Bật nguồn máy không lên hình nhưng thùng máy phát ra tiếng kêu 'tít... tít' theo nhịp điệu lặp lại liên tục."
    ],
    "diagnosisSteps": [
        "Đếm số lượng và độ dài tiếng bíp để đối chiếu với chuẩn BIOS (Ví dụ: Bíp liên tục là lỗi RAM; 1 dài 2 ngắn là lỗi VGA).",
        "Kiểm tra xem Mainboard có cắm loa Buzzer Speaker hoặc có đèn LED Debug (CPU-DRAM-VGA-BOOT) để bắt bệnh không."
    ],
    "fix": [
        "Tắt máy rút điện để đảm bảo an toàn.",
        "Tháo RAM hoặc VGA ra, dùng tẩy cao su chà sạch chân đồng tiếp xúc và dùng bóng thổi bụi xịt sạch khe cắm trên Mainboard.",
        "Cắm lại linh kiện thật chặt tay cho đến khi nghe tiếng 'Tách' của lẫy khóa.",
        "Ghi chú: Mỗi hãng Mainboard có chuẩn mã bíp khác nhau. Các dòng Main đời cao hiện nay thường dùng đèn LED Debug thay cho loa bíp truyền thống."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Lỗi \"DNS_PROBE_FINISHED_NXDOMAIN\"",
        "dns probe finished nxdomain fix",
        "vào được zalo không vào web",
        "đổi dns 8.8.8.8 1.1.1.1",
        "ipconfig flushdns sửa lỗi dns",
        "wifi vào mạng được nhưng không load web",
        "reset winsock dns windows 10",
        "lỗi phân giải tên miền trình duyệt"
    ],
    "name": "Lỗi \"DNS_PROBE_FINISHED_NXDOMAIN\"",
    "category": "Hệ điều hành | Mạng",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Biểu tượng mạng vẫn bình thường, Zalo vẫn nhắn tin được nhưng trình duyệt không vào được website và báo lỗi DNS_PROBE_FINISHED_NXDOMAIN."
    ],
    "diagnosisSteps": [
        "Thử lấy điện thoại kết nối cùng Wi-Fi; nếu điện thoại vào được web thì lỗi nằm ở bộ phân giải tên miền (DNS) trên máy tính."
    ],
    "fix": [
        "Mở CMD (Quyền Admin), gõ lệnh làm mới DNS: 'ipconfig /flushdns' và nhấn Enter.",
        "Mở Network Connections -> Card mạng -> Properties -> Chọn Internet Protocol Version 4 (TCP/IPv4) -> Properties.",
        "Chọn 'Use the following DNS server addresses' và nhập: Preferred DNS (8.8.8.8) và Alternate DNS (1.1.1.1).",
        "Bấm OK và tải lại trang web.",
        "Ghi chú: Lỗi này xảy ra khi máy tính không thể biên dịch tên miền (như google.com) thành địa chỉ IP để truy cập."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Cong/gãy chân kim Socket CPU (Chuẩn LGA)",
        "socket cpu gãy chân kim",
        "intel lga cong chân socket",
        "nắn chân kim cpu bằng kim tiêm",
        "amd am5 socket lỗi chân",
        "mainboard không nhận cpu do socket",
        "đóng lại socket cpu bằng máy khò",
        "cẩn thận khi lắp cpu lga"
    ],
    "name": "Cong/gãy chân kim Socket CPU (Chuẩn LGA)",
    "category": "Vật lý (Phần cứng)",
    "difficulty": "Khó",
    "estimatedCost": "def",
    "symptoms": [
        "Máy không lên nguồn, hoặc lên nhưng không nhận đủ khe RAM, liên tục sập nguồn và báo lỗi đèn CPU sau khi tháo lắp vệ sinh."
    ],
    "diagnosisSteps": [
        "Nhấc CPU ra khỏi Mainboard, dùng đèn Flash soi nghiêng hàng ngàn chân kim dưới rãnh Socket để tìm chân bị nằm rạp, lệch hàng hoặc đổi màu phản quang."
    ],
    "fix": [
        "Tự cứu (Chỉ khi cong nhẹ 1-2 chân): Dùng kính lúp và kim tiêm hoặc nhíp siêu mảnh để nhẹ nhàng nắn chân kim thẳng lại theo đúng hàng lối.",
        "Gãy rời chân: Bắt buộc mang Mainboard ra trung tâm bảo hành để đóng lại đế Socket mới bằng máy khò nhiệt chuyên dụng.",
        "⚠️ CẢNH BÁO: Chân kim rất giòn, nếu nắn sai lực sẽ gãy rụng hoàn toàn hoặc gây chập điện nổ CPU. Nếu không tự tin, tuyệt đối đừng thử nắn.",
        "Ghi chú: Lỗi này thường gặp ở các dòng CPU Intel hoặc AMD đời mới (AM5) sử dụng chuẩn socket LGA với chân kim nằm trên Mainboard."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Cắm ổ M.2 NVMe làm vô hiệu hóa cổng HDD",
        "lắp ssd m.2 mất ổ hdd",
        "sata port bị vô hiệu hóa do nvme",
        "mainboard chia sẻ băng thông m.2 sata",
        "cắm lại cáp sata sang cổng khác",
        "user manual mainboard kiểm tra sata",
        "pcie lanes chia sẻ ổ cứng",
        "bios nhận đủ ổ nhưng windows thiếu"
    ],
    "name": "Cắm ổ M.2 NVMe làm vô hiệu hóa cổng cứng HDD (Chia sẻ băng thông)",
    "category": "Phần cứng (Lắp ráp / Băng thông)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Sau khi gắn thêm SSD M.2, ổ cứng HDD cũ đang dùng bỗng nhiên 'bốc hơi' khỏi Windows và BIOS dù vẫn cắm dây SATA."
    ],
    "diagnosisSteps": [
        "Kiểm tra sách hướng dẫn (User Manual) của Mainboard phần sơ đồ Storage/SATA để xem khe M.2 có chia sẻ băng thông với các cổng SATA cụ thể nào không."
    ],
    "fix": [
        "Rút cáp dữ liệu SATA của ổ HDD cũ ra khỏi cổng đang bị chia sẻ băng thông (thường là cổng số 1 hoặc số 2).",
        "Chuyển cáp đó sang cắm vào các cổng SATA có số thứ tự cao hơn (như SATA_3, SATA_4, SATA_5).",
        "Khởi động lại máy để hệ thống nhận diện lại cả hai ổ cứng.",
        "Ghi chú: Đây là hiện tượng chiếm dụng băng thông (PCIe Lanes). Khi khe M.2 hoạt động, Mainboard sẽ ngắt các cổng SATA dùng chung đường truyền để ưu tiên tốc độ cho SSD M.2."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Điểm ảnh chết (Dead Pixel) và kẹt (Stuck Pixel)",
        "màn hình laptop có chấm đen",
        "dead pixel không sửa được",
        "stuck pixel jscreenfix youtube",
        "kiểm tra điểm chết màn hình",
        "chấm xanh đỏ cố định màn hình",
        "chính sách bảo hành dead pixel",
        "panel màn hình thay mới dead pixel"
    ],
    "name": "Điểm ảnh chết (Dead Pixel) và Điểm ảnh kẹt (Stuck Pixel)",
    "category": "Phần cứng (Hiển thị)",
    "difficulty": "Khó (Với Dead Pixel) / Dễ (Với Stuck Pixel)",
    "estimatedCost": "def",
    "symptoms": [
        "Màn hình xuất hiện chấm đen cố định (Dead) hoặc một chấm nhỏ luôn sáng rực màu đỏ/xanh dù đang ở nền tối (Stuck)."
    ],
    "diagnosisSteps": [
        "Truy cập deadpixelcheck.com, chuyển màn hình qua các dải màu cơ bản (Trắng, Đen, Đỏ, Xanh) để xác định vị trí và loại điểm lỗi."
    ],
    "fix": [
        "Điểm chết (Chấm Đen): Bóng LED đã cháy hoàn toàn, KHÔNG THỂ SỬA. Chỉ có thể sống chung hoặc thay Panel màn hình mới.",
        "Điểm kẹt (Sáng màu R/G/B): Mở video 'JScreenFix' trên YouTube cho chạy toàn màn hình tại khu vực lỗi trong 1-2 tiếng để kích thích tinh thể lỏng.",
        "Ghi chú: Các hãng sản xuất thường có chính sách dung sai; nếu số lượng điểm chết dưới mức quy định (ví dụ dưới 5 điểm) sẽ không được bảo hành."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Thông báo \"Activate Windows\" góc màn hình",
        "activate windows watermark góc màn hình",
        "windows chưa kích hoạt đổi hình nền",
        "wmic lấy key bản quyền gốc bios",
        "digital license windows 10 kích hoạt",
        "thay mainboard mất bản quyền windows",
        "nhập key product id windows",
        "activation settings kiểm tra trạng thái"
    ],
    "name": "Thông báo \"Activate Windows\" góc màn hình",
    "category": "Hệ điều hành (Bản quyền)",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Dòng chữ 'Activate Windows' hiện mờ ở góc màn hình và các tính năng cá nhân hóa như đổi hình nền, màu sắc bị khóa."
    ],
    "diagnosisSteps": [
        "Vào Settings -> System -> Activation để kiểm tra xem lỗi do chưa nhập Key hay do thay đổi phần cứng (Mainboard) làm mất bản quyền số."
    ],
    "fix": [
        "Nhập Key bản quyền hợp lệ mua từ Microsoft.",
        "Mẹo cho Laptop/Máy bộ: Mở CMD (Admin), gõ lệnh 'wmic path softwarelicensingservice get OA3xOriginalProductKey' để lấy Key gốc nhúng trong BIOS.",
        "Copy chuỗi mã 25 ký tự vừa tìm được dán vào mục Activation để kích hoạt lại Windows vĩnh viễn.",
        "Ghi chú: Bản quyền số (Digital License) thường đi kèm với ID của Mainboard, do đó khi thay Mainboard mới, hệ thống sẽ coi đó là một máy tính khác và yêu cầu kích hoạt lại."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Ổ cứng di động không hiện trong My Computer",
        "usb nhận nhưng không hiện ổ đĩa",
        "disk management gán drive letter",
        "ổ cứng ngoài không có chữ cái",
        "change drive letter and paths",
        "mountvol xung đột ký tự ổ đĩa",
        "this pc không hiển thị usb",
        "healthy partition không có tên ổ"
    ],
    "name": "Ổ cứng di động không hiện trong My Computer (Mất Drive Letter)",
    "category": "Hệ điều hành",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Máy có báo âm thanh nhận thiết bị và hiện icon USB ở Taskbar nhưng mở This PC không thấy phân vùng ổ đĩa đâu."
    ],
    "diagnosisSteps": [
        "Chuột phải vào nút Start -> Disk Management để liệt kê các ổ cứng vật lý.",
        "Tìm phân vùng báo 'Healthy (Primary Partition)' nhưng không có tên ký tự đi kèm (như C:, D:, E:...)."
    ],
    "fix": [
        "Trong Disk Management, chuột phải vào phân vùng không có chữ cái đó.",
        "Chọn 'Change Drive Letter and Paths...'.",
        "Bấm nút 'Add...' -> Chọn một chữ cái bất kỳ (ví dụ: F hoặc G) do Windows gợi ý -> Bấm OK.",
        "Ngay lập tức ổ đĩa sẽ xuất hiện trong This PC.",
        "Ghi chú: Lỗi này do Windows xung đột bộ nhớ đệm MountVol, nhận được phần cứng nhưng 'quên' gán ký tự ổ đĩa để hiển thị lên giao diện người dùng."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Kẹt nút gạt \"Chế độ máy bay\" (Greyed Out)",
        "airplane mode bị mờ không tắt được",
        "radio management service không chạy",
        "laptop mất wifi bluetooth không bật lại",
        "fn + phím máy bay không hoạt động",
        "device manager enable disable wifi",
        "services.msc bật radio service",
        "greyed out airplane mode fix"
    ],
    "name": "Kẹt nút gạt \"Chế độ máy bay\" (Airplane Mode Greyed Out)",
    "category": "Hệ điều hành | Trình điều khiển",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Laptop mất Wi-Fi/Bluetooth, nút Airplane Mode bị sáng xanh nhưng bị mờ (greyed out) không thể click chuột để tắt."
    ],
    "diagnosisSteps": [
        "Kiểm tra xem trên bàn phím có công tắc gạt vật lý nào đang khóa Wi-Fi không.",
        "Thử nhấn tổ hợp phím Fn + phím có hình máy bay để xem có ép tắt được chế độ này không."
    ],
    "fix": [
        "Mở Services (services.msc), tìm 'Radio Management Service', chuyển Startup type sang 'Automatic' và bấm Start.",
        "Mở Device Manager -> Network adapters -> Chuột phải vào Card Wi-Fi chọn Disable, chờ 5 giây rồi chọn Enable lại.",
        "Kiểm tra lại Action Center, lúc này nút Chế độ máy bay sẽ hết bị mờ để bạn có thể tắt đi.",
        "Ghi chú: Lỗi này thường do dịch vụ quản lý sóng vô tuyến của Windows bị treo hoặc chưa khởi động cùng hệ thống, khiến nút gạt bị kẹt ở trạng thái bật."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Gập màn hình laptop nhưng máy vẫn chạy, nóng",
        "laptop gập không sleep nóng ran",
        "hall sensor laptop hỏng không ngủ",
        "modern standby laptop không tắt",
        "power options gập nắp làm gì",
        "kiểm tra đèn nguồn trước khi cho balo",
        "nam châm test cảm biến gập màn hình",
        "laptop nóng trong balo do không sleep"
    ],
    "name": "Gập màn hình laptop nhưng máy vẫn chạy, nóng ran",
    "category": "Phần cứng (Cảm biến) | Hệ điều hành",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Gập nắp máy cất vào balo nhưng máy không ngủ, dẫn đến tình trạng nóng ran, quạt kêu to và cạn kiệt pin."
    ],
    "diagnosisSteps": [
        "Vào Power Options -> 'Choose what closing the lid does' để đảm bảo mục 'When I close the lid' đang đặt là Sleep.",
        "Nếu thiết lập đúng mà máy không ngủ, kiểm tra cảm biến nam châm (Hall Sensor) hoặc xung đột tính năng Modern Standby."
    ],
    "fix": [
        "Tắt kết nối mạng khi ngủ: Vào Power & battery -> Đặt 'Network connection in standby' thành Never hoặc Managed by Windows.",
        "Kiểm tra vật lý: Dùng thanh nam châm nhỏ lướt dọc chiếu nghỉ tay xem màn hình có tự tắt không; nếu không thì do đứt cáp cảm biến Hall.",
        "Ghi chú: Máy chạy liên tục trong balo kín có thể gây nóng chảy vỏ nhựa, hỏng màn hình và phồng pin. Hãy tập thói quen bấm Sleep/Shut down thủ công trước khi gập.",
        "Mẹo: Luôn kiểm tra đèn báo nguồn hoặc tiếng quạt đã tắt hẳn chưa trước khi cho máy vào túi chống sốc."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Thay pin CMOS mới nhưng vẫn sai ngày giờ",
        "thay pin cmos vẫn lỗi checksum",
        "pin cr2032 mới vẫn sai giờ",
        "thạch anh 32.768khz hỏng mainboard",
        "đế cắm pin cmos gỉ sét tiếp xúc",
        "diode nạp xả pin cmos cháy",
        "chipset nam hỏng mất thời gian thực",
        "sửa mạch rtc mainboard chuyên nghiệp"
    ],
    "name": "Thay pin CMOS mới nhưng vẫn liên tục sai ngày giờ",
    "category": "Phần cứng (Điện tử trên Mainboard)",
    "difficulty": "Khó",
    "estimatedCost": "def",
    "symptoms": [
        "Máy liên tục báo lỗi 'CMOS Checksum Error' và quay về năm 2008 mỗi khi rút điện, dù đã thay pin CR2032 mới tinh."
    ],
    "diagnosisSteps": [
        "Dùng đồng hồ VOM đo viên pin mới xem có đủ 3.0V - 3.3V không để loại trừ pin giả.",
        "Quan sát đế cắm pin trên Mainboard xem các lẫy đồng tiếp xúc có bị gỉ sét xanh hoặc bẹp gãy không."
    ],
    "fix": [
        "Dùng giấy nhám mịn đánh nhẹ hai tiếp điểm trên khay đựng pin và dùng nhíp nẩy nhẹ lẫy đồng dưới đáy lên để tăng độ tiếp xúc.",
        "Nếu tiếp xúc tốt vẫn lỗi: Khả năng cao do chết thạch anh dao động 32.768kHz (linh kiện hình trụ nhỏ màu bạc cạnh khe pin) hoặc hỏng diode nạp xả, hỏng Chipset Nam.",
        "Bắt buộc mang Mainboard ra thợ chuyên sửa mạch điện tử để khò hàn thay thế thạch anh hoặc diode mới.",
        "Ghi chú: Thạch anh 32.768kHz là linh kiện chịu trách nhiệm giữ nhịp thời gian thực cho máy tính khi không có nguồn điện chính."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Lỗi \"Ethernet doesn't have a valid IP configuration\"",
        "ethernet valid ip configuration fix",
        "cắm dây mạng chấm than vàng",
        "dhcp không cấp ip cho pc",
        "netsh winsock reset ethernet",
        "router restart cấp lại ip",
        "đặt ip tĩnh khi dhcp lỗi",
        "tcp/ip reset sửa lỗi mạng có dây"
    ],
    "name": "Lỗi \"Ethernet doesn't have a valid IP configuration\"",
    "category": "Mạng | OS",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Máy tính cắm dây mạng LAN báo chấm than vàng và tính năng Troubleshoot hiện thông báo 'Ethernet doesn't have a valid IP configuration'."
    ],
    "diagnosisSteps": [
        "Xác định Card mạng vẫn giao tiếp tốt với Router nhưng không nhận được địa chỉ IP hợp lệ từ dịch vụ DHCP."
    ],
    "fix": [
        "Rút điện Router/Modem, chờ 30 giây rồi cắm lại để khởi động lại dịch vụ cấp phát IP (DHCP server).",
        "Reset giao thức TCP/IP: Mở CMD (Admin), gõ lệnh 'netsh winsock reset' rồi 'netsh int ip reset'. Khởi động lại máy tính.",
        "Nếu vẫn lỗi: Thử đặt IP tĩnh (Static IP) thủ công cho máy tính phù hợp với dải mạng của Router.",
        "Ghi chú: Lỗi này thường do sự xung đột giữa dịch vụ DHCP của Router và Windows, khiến quá trình cấp phát địa chỉ IP bị gián đoạn."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": ["def", "def"],
    "name": "Máy bật lên 1 giây rồi tắt, lặp lại liên tục (Short Circuit)",
    "category": "Phần cứng (Nguồn / Chạm chập)",
    "difficulty": "Khó",
    "estimatedCost": "def",
    "symptoms": [
        "Máy kích nguồn quạt quay 1-2 giây rồi tắt phụp, sau đó tự động lặp lại chu kỳ này liên tục cho đến khi rút điện."
    ],
    "diagnosisSteps": [
        "Xác định đây là tính năng bảo vệ ngắn mạch (Short Circuit Protection) của bộ nguồn khi phát hiện chạm Mass trên linh kiện.",
        "Sử dụng phương pháp loại trừ: Rút lần lượt VGA, ổ cứng và đặc biệt là dây cấp nguồn CPU (4-pin/8-pin) để test.",
        "Kiểm tra xem các ốc đồng kê Mainboard (Standoff) có bị bắt sai vị trí gây chạm mạch vào vỏ case không bằng cách bỏ main ra ngoài hộp giấy để kích nguồn."
    ],
    "fix": [
        "Nếu rút dây nguồn CPU mà máy chạy không tắt: Mainboard đã bị chập cháy dàn tụ/Mosfet cấp nguồn CPU, cần mang đi sửa mạch.",
        "Nếu do chạm Mass vỏ case: Bắt lại các ốc kê Mainboard đúng vị trí lỗ định vị trên bo mạch.",
        "⚠️ CẢNH BÁO: TUYỆT ĐỐI không dùng dây đồng ép nguồn chạy khi đang đoản mạch (vô hiệu hóa chip bảo vệ), vì có thể gây cháy nổ tụ điện và bốc hỏa.",
        "Ghi chú: Lỗi này thường do linh kiện bị ẩm, côn trùng chui vào gây chập hoặc do lắp ráp sai kỹ thuật khiến mạch in tiếp xúc trực tiếp với kim loại của vỏ máy."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": ["def", "def"],
    "name": "Màn hình chớp đen báo \"Display driver stopped responding\"",
    "category": "Trình điều khiển | Phần cứng (VGA)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Màn hình chớp tắt đen khoảng 2-3 giây rồi hiện lại kèm thông báo 'Display driver stopped responding and has recovered' hoặc 'TDR failure'."
    ],
    "diagnosisSteps": [
        "Xác định đây là hiện tượng Card đồ họa bị quá tải hoặc treo tạm thời, khiến Windows phải tự động reset lại driver.",
        "Kiểm tra xem nguyên nhân do driver bị lỗi, VGA quá nóng hay bộ nguồn cung cấp thiếu điện cho khe PCIe."
    ],
    "fix": [
        "Dùng phần mềm DDU (Display Driver Uninstaller) trong chế độ Safe Mode để gỡ sạch driver cũ, sau đó cài lại bản mới nhất hoặc bản cũ ổn định.",
        "Vào Power Options trong Control Panel, chuyển sang chế độ 'High Performance' để đảm bảo nguồn điện ổn định cho khe PCIe.",
        "Nếu vẫn bị: Sử dụng MSI Afterburner để giảm xung nhịp (Underclock) lõi GPU khoảng 50-100MHz nhằm bù đắp cho sự lão hóa linh kiện.",
        "Ghi chú: Lỗi TDR (Timeout Detection and Recovery) là cơ chế của Windows giúp máy không bị xanh màn hình (BSOD) khi xử lý đồ họa gặp sự cố."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": ["def", "def"],
    "name": "Xé hình (Screen Tearing) khi chơi game / xem video",
    "category": "Cài đặt đồ họa",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Hình ảnh bị cắt làm đôi hoặc làm ba khúc trượt ngang, không khớp nhau khi nhân vật di chuyển nhanh hoặc máy quay lia ngang."
    ],
    "diagnosisSteps": [
        "Xác định đây không phải lỗi vật lý mà là do Card màn hình render khung hình (FPS) không đồng bộ với Tần số quét (Hz) của màn hình."
    ],
    "fix": [
        "Khắc phục phần mềm: Vào Settings đồ họa của Game, tìm và BẬT tính năng V-Sync (Đồng bộ dọc) để khóa FPS khớp với tần số quét màn hình.",
        "Khắc phục phần cứng: Nếu V-Sync gây độ trễ chuột (Input lag), hãy sử dụng màn hình tích hợp công nghệ G-Sync (Nvidia) hoặc FreeSync (AMD).",
        "Ghi chú: V-Sync là giải pháp tiết kiệm nhất để chấm dứt xé hình nhưng có thể làm giảm phản xạ trong các tựa game bắn súng tốc độ cao."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": ["def", "def"],
    "name": "Thay pin CMOS mới nhưng cạn kiệt chỉ trong vài ngày",
    "category": "Phần cứng (Điện tử trên Mainboard)",
    "difficulty": "Khó",
    "estimatedCost": "def",
    "symptoms": [
        "Máy quên ngày giờ chỉ sau 2-3 ngày thay pin mới, đo điện áp pin CR2032 thấy tụt nhanh xuống mức 0.5V."
    ],
    "diagnosisSteps": [
        "Xác định bo mạch chủ bị lỗi rò rỉ dòng điện (chạm mát) ở khu vực mạch RTC (Real Time Clock).",
        "Máy tính đang tiêu thụ điện trực tiếp từ pin CMOS liên tục ngay cả khi có điện nguồn, thay vì sử dụng dòng 5VSB chờ từ bộ nguồn."
    ],
    "fix": [
        "Kiểm tra và thay thế con Diode kép (loại 3 chân) làm nhiệm vụ phân luồng điện trên Mainboard.",
        "Xử lý lỗi rò rỉ tại khu vực mạch RTC để tránh việc dòng điện từ pin chạy thẳng ra tiếp mass.",
        "Bắt buộc mang Mainboard ra thợ chuyên sửa mạch điện tử để dò mạch và thay thế linh kiện vì lỗi này đòi hỏi kỹ thuật hàn khò chuyên nghiệp.",
        "Ghi chú: Lỗi này thường do linh kiện bán dẫn xuống cấp hoặc mạch in bị ẩm gây ra hiện tượng 'ăn pin' bất thường."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Quên bóc miếng dán cách nhiệt VRM/M.2",
        "quên dán thermal pad vrm",
        "m.2 ssd quá nhiệt do thiếu pad",
        "thermal pad dày quá ép khe hổng",
        "mainboard vrm nóng đỏ không tản",
        "dán lại thermal pad đúng độ dày",
        "thermal pad 0.5mm 1.0mm 1.5mm",
        "ssd nvme giảm tốc do quá nhiệt"
    ],
    "name": "Máy quá nhiệt 100°C do quên bóc nilon tản nhiệt",
    "category": "Phần cứng (Lỗi lắp ráp sơ đẳng)",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Máy mới lắp ráp nhưng vừa bật lên nhiệt độ CPU đã vọt lên 90°C - 100°C, quạt rú to và máy tự sập nguồn bảo vệ."
    ],
    "diagnosisSteps": [
        "Xác định lỗi nằm ở bề mặt tiếp xúc giữa CPU và tản nhiệt nếu nhiệt độ chạm ngưỡng tối đa ngay từ khi ở trong BIOS.",
        "Kiểm tra xem bơm tản nhiệt nước (nếu có) đã hoạt động chưa hoặc tản nhiệt đã được bắt chặt chưa."
    ],
    "fix": [
        "Tháo khối tản nhiệt CPU ra và kiểm tra mặt đế đồng tiếp xúc.",
        "Bóc bỏ miếng seal nilon trong suốt (thường có dòng chữ 'Warning: Please remove before installation') vẫn còn dính trên mặt đế.",
        "Lau sạch lớp keo cũ bị dính nilon, tra lớp keo tản nhiệt mới và lắp lại tản nhiệt thật chặt.",
        "Ghi chú: Lớp nilon này là chất cách nhiệt, khiến nhiệt không thể truyền từ CPU sang khối tản nhiệt, dẫn đến việc CPU bị 'nướng chín' dù quạt vẫn quay."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Màn hình PC chớp tắt khi bật/tắt đèn, quạt",
        "màn hình chớp khi bật đèn",
        "nhiễu điện từ emi cáp hdmi",
        "cáp displayport chống nhiễu ferrite",
        "thiết bị điện gây chớp màn hình",
        "thay cáp hdmi chất lượng cao",
        "lưới chống nhiễu cáp tín hiệu",
        "nhạy cảm tín hiệu số với nhiễu"
    ],
    "name": "Màn hình PC chớp tắt khi bật/tắt bóng đèn, quạt trần",
    "category": "Phần cứng (Nhiễu điện từ - EMI)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Màn hình máy tính nháy đen khoảng 2 giây rồi lên lại mỗi khi có người bật/tắt đèn tuýp, quạt trần hoặc các thiết bị điện có cuộn cảm trong nhà."
    ],
    "diagnosisSteps": [
        "Xác định sự trùng hợp giữa thời điểm chớp màn hình và việc đóng ngắt các thiết bị điện công suất lớn trong cùng hệ thống điện.",
        "Kiểm tra chất lượng cáp tín hiệu (HDMI/DisplayPort) đang dùng có mỏng hoặc không có thương hiệu (hàng tặng kèm giá rẻ) hay không."
    ],
    "fix": [
        "Nguyên nhân do xung nhiễu điện từ (EMI) phóng ra từ thiết bị điện truyền vào sợi cáp không có lớp chống nhiễu, làm gián đoạn tín hiệu kỹ thuật số.",
        "Khắc phục triệt để bằng cách thay thế sợi cáp DisplayPort hoặc HDMI loại chất lượng cao (thân dây to, bọc lưới chống nhiễu nhiều lớp).",
        "Ưu tiên chọn loại cáp có tích hợp cục chống nhiễu Ferrite Bead (hình trụ tròn) ở hai đầu dây.",
        "Ghi chú: Lỗi này thường gây hiểu lầm là hỏng màn hình hoặc VGA, nhưng thực tế chỉ là do sự nhạy cảm của tín hiệu kỹ thuật số với nhiễu điện môi trường."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Báo lỗi No Bootable Device sau BIOS update",
        "bios update xong không vào win",
        "no bootable device sau firmware",
        "legacy vs uefi boot sai chuẩn",
        "sata operation raid vs ahci",
        "f2 vào bios đổi boot mode",
        "dell asus bios update lỗi boot",
        "inaccessible boot device win 10"
    ],
    "name": "Báo lỗi \"No Bootable Device\" sau khi BIOS tự động cập nhật",
    "category": "Hệ điều hành | BIOS Cấu hình",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Sau khi máy tự động chạy 'Updating BIOS firmware', khởi động lại không vào được Win và báo lỗi 'No Bootable Device' hoặc 'Inaccessible Boot Device'."
    ],
    "diagnosisSteps": [
        "Xác định việc cập nhật BIOS đã reset các tùy chỉnh về trạng thái xuất xưởng, làm sai lệch giao thức Boot hoặc chuẩn giao tiếp ổ cứng giữa BIOS và hệ điều hành."
    ],
    "fix": [
        "Nhấn liên tục phím F2/F10/Del khi khởi động để vào giao diện BIOS.",
        "Kiểm tra chuẩn Boot: Nếu Windows cũ cài theo chuẩn Legacy/CSM mà BIOS mới bật UEFI thì hãy đổi lại cho khớp (và ngược lại).",
        "Kiểm tra mục SATA Operation: Chuyển đổi giữa 'RAID On' và 'AHCI' (tùy thuộc vào chuẩn lúc cài Windows) để hệ thống nhận diện đúng cấu trúc ổ cứng.",
        "Lưu thiết lập (F10) và khởi động lại máy.",
        "Ghi chú: Lỗi này thường gặp trên các dòng laptop Dell, Asus khi Windows Update tự động đẩy bản cập nhật Firmware cho bo mạch chủ."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Cổng USB Type-C mặt trước case cắm không nhận",
        "usb type-c front panel không nhận",
        "cáp type-e mainboard không có",
        "pcie to usb type-e card",
        "chân cắm type-e gãy do cắm ngược",
        "mainboard hỗ trợ usb 3.2 gen2",
        "case có type-c main không có",
        "kiểm tra header type-e trước khi mua case"
    ],
    "name": "Cổng USB Type-C mặt trước vỏ case cắm không nhận",
    "category": "Phần cứng (Lắp ráp / Chân cắm Mainboard)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Dàn PC mới ráp có cổng USB Type-C mặt trước nhưng khi cắm điện thoại hoặc ổ cứng ngoài vào thì máy im lìm, không nhận sạc hay dữ liệu."
    ],
    "diagnosisSteps": [
        "Tháo nắp hông thùng máy, lần theo sợi cáp từ cổng Type-C mặt trước (cáp dẹt, đầu cắm Type-E hình chữ nhật) để xem đã cắm vào Mainboard chưa.",
        "Kiểm tra xem Mainboard có hỗ trợ chân cắm USB 3.2 Gen 2 Header (Type-E) hay không."
    ],
    "fix": [
        "Nếu Mainboard không có chân hỗ trợ: Mua thêm Card chuyển đổi PCIe to USB Type-E để có chỗ cắm dây từ vỏ case.",
        "Nếu đã cắm nhưng không nhận: Soi kỹ chân cắm trên Mainboard xem có bị gãy vỡ do cắm ngược đầu hoặc dùng lực quá mạnh hay không.",
        "Đảm bảo đầu cáp Type-E được cắm đúng ngàm định vị và tiếp xúc hoàn toàn với Header trên Mainboard.",
        "Ghi chú: Nhiều dòng Mainboard phân khúc phổ thông (dòng H hoặc B bản rút gọn) thường lược bỏ cổng này dù vỏ case cao cấp có trang bị dây dẫn."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Pin sạc chỉ lên 60% hoặc 80% (Bảo vệ pin)",
        "pin laptop sạc dừng 80%",
        "plugged in not charging bảo vệ",
        "asus battery health charging full",
        "lenovo conservation mode tắt",
        "dell power manager standard mode",
        "sạc 100% khi mang laptop ra ngoài",
        "kéo dài tuổi thọ pin không sạc đầy"
    ],
    "name": "Pin sạc chỉ lên 60% hoặc 80% là báo \"Plugged in, not charging\"",
    "category": "Phần mềm (Tính năng bảo vệ pin)",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Cắm sạc laptop nhưng pin dừng lại ở mức 60% hoặc 80% và báo 'Plugged in, not charging' thay vì sạc đầy 100%."
    ],
    "diagnosisSteps": [
        "Xác định đây là tính năng bảo vệ pin (Battery Health) nhằm kéo dài tuổi thọ cell pin, tránh tình trạng điện áp cao liên tục.",
        "Phân biệt với lỗi phần cứng: Nếu pin vẫn sạc ổn định đến mức giới hạn này thì cell pin và IC sạc vẫn hoạt động tốt."
    ],
    "fix": [
        "Với Asus: Mở MyAsus -> Customization -> Battery Health Charging -> Chuyển sang 'Full Capacity Mode'.",
        "Với Lenovo: Mở Lenovo Vantage -> Power -> Tắt tính năng 'Conservation Mode'.",
        "Với Dell: Mở Dell Power Manager -> Battery Setting -> Đổi từ 'Custom' hoặc 'Primarily AC Use' sang 'Standard'.",
        "Ghi chú: Việc khóa pin ở mức 60-80% giúp pin không bị phồng hay chai sau nhiều năm nếu bạn thường xuyên cắm điện sử dụng như máy bàn.",
        "Mẹo: Chỉ nên chuyển sang chế độ sạc 100% khi bạn chuẩn bị mang máy ra ngoài và không có nguồn điện sạc trong thời gian dài."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Kẹt phím Shift/Ctrl ngầm gây loạn thao tác",
        "phím ctrl bị kẹt ngầm laptop",
        "click chuột bôi đen nhiều file",
        "on-screen keyboard kiểm tra phím kẹt",
        "gõ mạnh phím bị liệt gỡ lò xo",
        "phím shift kẹt gây zoom màn hình",
        "uninstall driver bàn phím laptop",
        "mạch carbon ẩm gây kẹt phím"
    ],
    "name": "Kẹt phím Shift/Ctrl ngầm gây loạn thao tác chuột",
    "category": "Phần cứng (Bàn phím) | OS",
    "difficulty": "Dễ",
    "estimatedCost": "def",
    "symptoms": [
        "Click chuột bị bôi đen hàng loạt file hoặc lăn chuột giữa gây phóng to/thu nhỏ màn hình thay vì cuộn trang."
    ],
    "diagnosisSteps": [
        "Mở bàn phím ảo (On-Screen Keyboard) để kiểm tra xem phím Ctrl hoặc Shift có đang bị sáng viền xanh (trạng thái đang nhấn) hay không."
    ],
    "fix": [
        "Với bàn phím cơ/Desktop: Gõ mạnh vài lần vào phím bị kẹt để gỡ lò xo hoặc tháo keycap vệ sinh bụi bẩn.",
        "Với Laptop: Nếu kẹt do mạch màng carbon (ẩm/nước), cần Uninstall driver trong Device Manager để dùng phím rời hoặc mang đi thay cụm phím mới.",
        "Ghi chú: Lỗi này thường khiến người dùng lầm tưởng do chuột hỏng hoặc máy bị nhiễm virus điều khiển."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
},
{
    "keywords": [
        "Máy nháy lỗi USB Device Not Recognized liên tục",
        "usb device not recognized loop",
        "tinh tùng usb liên tục 3 giây",
        "webcam laptop chập cáp usb",
        "bluetooth module lỗi nhận usb",
        "rút cáp hub rgb usb trong case",
        "device manager refresh liên tục usb",
        "tắt thiết bị usb lỗi trong bios"
    ],
    "name": "Máy nháy lỗi \"USB Device Not Recognized\" liên tục mỗi 3 giây",
    "category": "Phần cứng (Mô-đun mở rộng)",
    "difficulty": "Trung bình",
    "estimatedCost": "def",
    "symptoms": [
        "Thông báo lỗi nhận USB và tiếng chuông 'tinh tùng' xuất hiện liên tục dù đã rút sạch mọi thiết bị USB bên ngoài."
    ],
    "diagnosisSteps": [
        "Mở Device Manager quan sát danh sách thiết bị có tự động Refresh (nhấp nháy) theo nhịp âm thanh báo lỗi hay không.",
        "Xác định linh kiện gắn ngầm bên trong máy (Webcam, Bluetooth, Đầu đọc thẻ) đang bị lỏng cáp hoặc chập mạch."
    ],
    "fix": [
        "Laptop: Kiểm tra và ngắt kết nối cáp của module Webcam (trên viền màn hình), Card Bluetooth hoặc cảm biến vân tay nếu xác định chúng bị lỗi.",
        "Máy bàn (PC): Mở nắp case, rút dây cắm của 'Đầu đọc thẻ nhớ' hoặc cáp USB 2.0 nối từ Mainboard ra các Hub chia RGB/Bluetooth.",
        "Ghi chú: Tiếng kêu liên tục này cực kỳ gây ức chế và có thể làm máy bị khựng (lag) nhẹ mỗi khi hệ thống cố gắng nhận diện lại thiết bị lỗi."
    ],
    "image": "def", 
    "audio": "def", 
    "video": "def"
}
    

];