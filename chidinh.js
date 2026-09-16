// File: chidinh.js
// Dữ liệu tổng hợp chỉ định phù hợp MRI & CT Scanner theo quy định BHYT

const chiDinhData = [
    // =========================================================================
    // I. DANH MỤC CỘNG HƯỞNG TỪ (MRI) - QĐ 978/QĐ-BIH
    // =========================================================================
    {
        maDV: "MRI_01",
        tenDV: "Chụp cộng hưởng từ cột sống cổ (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "G54.2", tenBenh: "Bệnh rễ thần kinh cổ, không phân loại nơi khác" },
            { maICD: "G81", tenBenh: "Liệt nửa người" },
            { maICD: "G95", tenBenh: "Bệnh khác của tủy sống" },
            { maICD: "M50.2", tenBenh: "Các Thoát vị đĩa đệm cột sống cổ khác" },
            { maICD: "M54.2", tenBenh: "Đau vùng cổ gáy" },
            { maICD: "M87.8", tenBenh: "Hoại tử xương khác" },
            { maICD: "S14.1", tenBenh: "Tổn thương không đặc hiệu và khác của tủy sống cổ" }
        ]
    },
    {
        maDV: "MRI_02",
        tenDV: "Chụp cộng hưởng từ cột sống cổ có tiêm tương phản (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "S14.2", tenBenh: "Tổn thương rễ thần kinh của gai sống cổ" },
            { maICD: "G54", tenBenh: "Bệnh rễ và đám rối thần kinh" }
        ]
    },
    {
        maDV: "MRI_03",
        tenDV: "Chụp cộng hưởng từ cột sống ngực (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "M54.1", tenBenh: "Bệnh rễ thần kinh tủy sống" }
        ]
    },
    {
        maDV: "MRI_04",
        tenDV: "Chụp cộng hưởng từ cột sống thắt lưng – cùng (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "G54.9", tenBenh: "Bệnh rễ và đám rối thần kinh, không đặc hiệu" },
            { maICD: "M43.0", tenBenh: "Trượt đốt sống" },
            { maICD: "M47", tenBenh: "Thoái hóa cột sống" },
            { maICD: "M48.0", tenBenh: "Hẹp ống sống" },
            { maICD: "G54", tenBenh: "Bệnh rễ và đám rối thần kinh" },
            { maICD: "G55", tenBenh: "Chèn ép rễ thần kinh và đám rối trong bệnh phân loại nơi khác" },
            { maICD: "M54", tenBenh: "Đau lưng" },
            { maICD: "G72", tenBenh: "Bệnh cơ khác" },
            { maICD: "G62", tenBenh: "Bệnh đa dây thần kinh khác" },
            { maICD: "R52", tenBenh: "Đau không phân loại nơi khác" },
            { maICD: "M51", tenBenh: "Các bệnh đĩa đệm gian đốt sống khác" },
            { maICD: "M51.2", tenBenh: "Thoát vị đĩa đệm đốt sống đặc hiệu khác" },
            { maICD: "M54.4", tenBenh: "Đau lưng kèm đau dây thần kinh tọa" },
            { maICD: "S32.0", tenBenh: "Gãy đốt sống thắt lưng" },
            { maICD: "T08", tenBenh: "Gãy cột sống, mức độ không xác định" }
        ]
    },
    {
        maDV: "MRI_05",
        tenDV: "Chụp cộng hưởng từ khớp (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "M17", tenBenh: "Thoái hóa khớp gối" },
            { maICD: "M23", tenBenh: "Tổn thương bên trong khớp gối" },
            { maICD: "M23.3", tenBenh: "Các tổn thương sụn chêm khác" },
            { maICD: "M65.9", tenBenh: "Viêm màng hoạt dịch và viêm bao gân, không đặc hiệu" },
            { maICD: "M76", tenBenh: "Bệnh điểm bám gân-dây chằng ở chi dưới, không kể bàn chân" },
            { maICD: "M87", tenBenh: "Hoại tử xương" },
            { maICD: "S63", tenBenh: "Sai khớp, bong gân và căng cơ của khớp và dây chằng tầm cổ tay và bàn tay" },
            { maICD: "S83.5", tenBenh: "Bong gân và căng cơ (phía trước) (phía sau) tổn thương dây chằng chéo khớp gối" },
            { maICD: "S83.6", tenBenh: "Bong gân và căng cơ phần khác và không xác định khớp gối" },
            { maICD: "S93.4", tenBenh: "Bong gân và căng cơ cổ chân" }
        ]
    },
    {
        maDV: "MRI_06",
        tenDV: "Chụp cộng hưởng từ não - mạch não không tiêm chất tương phản (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "I63", tenBenh: "Nhồi máu não" }
        ]
    },
    {
        maDV: "MRI_07",
        tenDV: "Chụp cộng hưởng từ sọ não (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "A87", tenBenh: "Viêm màng não do virus" },
            { maICD: "G40", tenBenh: "Động kinh" },
            { maICD: "G40.3", tenBenh: "Hội chứng động kinh và động kinh toàn thể nguyên phát" },
            { maICD: "G45.8", tenBenh: "Cơn thiếu máu não thoáng qua khác và hội chứng liên quan" },
            { maICD: "G45.9", tenBenh: "Cơn thiếu máu não thoáng qua không đặc hiệu" },
            { maICD: "I63.9", tenBenh: "Nhồi máu não, không đặc hiệu" },
            { maICD: "I64", tenBenh: "Đột quị, không xác định do xuất huyết hay nhồi máu (Tai biến mạch máu não)" },
            { maICD: "G45", tenBenh: "Cơn thiếu máu não cục bộ thoáng qua và hội chứng liên quan" },
            { maICD: "H53", tenBenh: "Rối loạn thị giác" },
            { maICD: "H81", tenBenh: "Rối loạn chức năng tiền đình" },
            { maICD: "H82", tenBenh: "Hội chứng chóng mặt trong bệnh phân loại nơi khác" },
            { maICD: "H93", tenBenh: "Bệnh khác của tai, không phân loại nơi khác" },
            { maICD: "G44", tenBenh: "Hội chứng đau đầu khác" },
            { maICD: "F01.9", tenBenh: "Sa sút trí tuệ, không biệt định" },
            { maICD: "F03", tenBenh: "Sa sút trí tuệ không biệt định" },
            { maICD: "G30", tenBenh: "Bệnh Alzheimer" },
            { maICD: "F44", tenBenh: "Các rối loạn phân ly [chuyển di]" },
            { maICD: "G20", tenBenh: "Bệnh Parkinson" },
            { maICD: "R42", tenBenh: "Hoa mắt và chóng mặt" },
            { maICD: "G43", tenBenh: "Migraine" },
            { maICD: "I61", tenBenh: "Xuất huyết nội sọ" },
            { maICD: "I63", tenBenh: "Nhồi máu não" },
            { maICD: "I69", tenBenh: "Di chứng bệnh mạch máu não" },
            { maICD: "R41", tenBenh: "Triệu chứng và dấu hiệu khác liên quan đến chức năng nhận thức và tri giác" },
            { maICD: "R51", tenBenh: "Đau đầu" },
            { maICD: "R56", tenBenh: "Co giật, chưa phân loại ở nơi khác" },
            { maICD: "S06", tenBenh: "Tổn thương nội sọ" },
            { maICD: "G51.0", tenBenh: "Liệt Bell" },
            { maICD: "G00", tenBenh: "Viêm màng não vi khuẩn, không phân loại nơi khác" },
            { maICD: "T90.5", tenBenh: "Di chứng tổn thương nội sọ" }
        ]
    },
    {
        maDV: "MRI_08_09",
        tenDV: "Chụp cộng hưởng từ tầng bụng / vùng chậu (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "C25.0", tenBenh: "U ác của đầu tụy" },
            { maICD: "K80.3", tenBenh: "Sỏi ống mật có viêm đường mật" },
            { maICD: "K80", tenBenh: "Sỏi mật" },
            { maICD: "C20", tenBenh: "U ác trực tràng" },
            { maICD: "N83.2", tenBenh: "Các u nang buồng trứng khác và không đặc hiệu" },
            { maICD: "D39.1", tenBenh: "U tân sinh không chắc chắn hoặc không biết tính chất của buồng trứng" }
        ]
    },
    {
        maDV: "MRI_10",
        tenDV: "Chụp cộng hưởng từ vùng chậu dò hậu môn (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "K60.3", tenBenh: "Rò hậu môn" },
            { maICD: "K61.0", tenBenh: "Áp xe hậu môn" }
        ]
    },
    {
        maDV: "MRI_11",
        tenDV: "Chụp cộng hưởng từ tuyến vú (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "C50", tenBenh: "U ác của vú" },
            { maICD: "D05", tenBenh: "Ung thư biểu mô tại chỗ của vú" }
        ]
    },
    {
        maDV: "MRI_12",
        tenDV: "Chụp cộng hưởng từ phần mềm chi (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "S86.0", tenBenh: "Tổn thương gân gót (Achilles)" },
            { maICD: "M79.1", tenBenh: "Đau cơ" }
        ]
    },
    {
        maDV: "MRI_13",
        tenDV: "Chụp cộng hưởng từ tuyến tiền liệt có tiêm tương phản (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "C61", tenBenh: "U ác của tuyến tiền liệt" }
        ]
    },
    {
        maDV: "MRI_14",
        tenDV: "Chụp cộng hưởng từ sọ não có tiêm chất tương phản (≥ 3T)",
        nhom: "Cộng hưởng từ (MRI)",
        danhSachICD: [
            { maICD: "D33.3", tenBenh: "U lành thần kinh sọ não" },
            { maICD: "D43", tenBenh: "U tân sinh không chắc chắn hoặc không biết tính chất của não và hệ thần kinh trung ương" },
            { maICD: "I63", tenBenh: "Nhồi máu não" },
            { maICD: "G04", tenBenh: "Viêm não, viêm tủy và viêm não-tủy" },
            { maICD: "G44", tenBenh: "Hội chứng đau đầu khác" },
            { maICD: "H93", tenBenh: "Bệnh khác của tai, không phân loại nơi khác" },
            { maICD: "I64", tenBenh: "Đột quị, không xác định do xuất huyết hay nhồi máu (Tai biến mạch máu não)" }
        ]
    },

    // =========================================================================
    // II. DANH MỤC CẮT LỚP VI TÍNH (CT SCANNER) - TỪ 1 ĐẾN 32 DÃY
    // =========================================================================
    {
        maDV: "CT_01",
        tenDV: "Chụp CT sọ não không tiêm thuốc cản quang (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "S06.5", tenBenh: "Chảy máu dưới màng cứng" },
            { maICD: "S02", tenBenh: "Vỡ xương sọ và xương mặt" },
            { maICD: "F07.2", tenBenh: "Hội chứng sau chấn động não" },
            { maICD: "S06.8", tenBenh: "Tổn thương nội sọ khác" },
            { maICD: "I64", tenBenh: "Đột quị, không xác định do xuất huyết hay nhồi máu (Tai biến mạch máu não)" },
            { maICD: "I63", tenBenh: "Nhồi máu não" },
            { maICD: "R41", tenBenh: "Triệu chứng và dấu hiệu khác liên quan đến chức năng nhận thức và tri giác" },
            { maICD: "G40", tenBenh: "Động kinh" },
            { maICD: "I61", tenBenh: "Xuất huyết nội sọ" }
        ]
    },
    {
        maDV: "CT_02",
        tenDV: "Chụp CT sọ não có tiêm thuốc cản quang (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "G04", tenBenh: "Viêm não, viêm tủy và viêm não-tủy" },
            { maICD: "I62", tenBenh: "Xuất huyết dưới màng cứng (cấp) (không do chấn thương)" },
            { maICD: "G00", tenBenh: "Viêm màng não vi khuẩn, không phân loại nơi khác" },
            { maICD: "A87", tenBenh: "Viêm màng não do virus" },
            { maICD: "D32", tenBenh: "U lành màng não" },
            { maICD: "C70", tenBenh: "U ác màng não" },
            { maICD: "D42", tenBenh: "U không rõ/không chắc tính chất của màng não" }
        ]
    },
    {
        maDV: "CT_03_04",
        tenDV: "Chụp CT lồng ngực (có hoặc không tiêm thuốc cản quang) (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "M48.3", tenBenh: "Chấn thương cột sống" },
            { maICD: "D41.2", tenBenh: "U ác của cột sống" },
            { maICD: "J18.9", tenBenh: "Viêm phổi, không đặc hiệu" },
            { maICD: "J90", tenBenh: "Tràn dịch màng phổi, không phân loại nơi khác" },
            { maICD: "J91", tenBenh: "Tràn dịch màng phổi trong bệnh phân loại nơi khác" },
            { maICD: "J92", tenBenh: "Mảng màng phổi" },
            { maICD: "J93", tenBenh: "Tràn khí màng phổi" },
            { maICD: "J94", tenBenh: "Các bệnh màng phổi khác" },
            { maICD: "S20", tenBenh: "Tổn thương của lồng ngực" },
            { maICD: "S21", tenBenh: "Vết thương hở của ngực" },
            { maICD: "S22", tenBenh: "Gãy xương sườn, xương ức và gai sống ngực" },
            { maICD: "S23", tenBenh: "Sai khớp, bong gân và căng cơ quá mức của khớp và dây chằng của ngực" },
            { maICD: "S24", tenBenh: "Tổn thương dây thần kinh và tủy sống vùng ngực" },
            { maICD: "S27", tenBenh: "Tổn thương của các cơ quan không đặc hiệu và khác trong lồng ngực" },
            { maICD: "S28", tenBenh: "Tổn thương dập nát ngực và chấn thương đứt lìa phần của ngực" },
            { maICD: "S29", tenBenh: "Tổn thương không đặc hiệu và khác của ngực" },
            { maICD: "T18.1", tenBenh: "Dị vật trong thực quản" },
            { maICD: "R09.1", tenBenh: "Viêm màng phổi" },
            { maICD: "D37.1", tenBenh: "U tân sinh chưa rõ tính chất của dạ dày" },
            { maICD: "D37.2", tenBenh: "U tân sinh chưa rõ tính chất của ruột non" },
            { maICD: "D37.3", tenBenh: "U tân sinh chưa rõ tính chất của ruột thừa" },
            { maICD: "D37.4", tenBenh: "U tân sinh chưa rõ tính chất của đại tràng" },
            { maICD: "D37.5", tenBenh: "U tân sinh chưa rõ tính chất của trực tràng" },
            { maICD: "D37.6", tenBenh: "U tân sinh chưa rõ tính chất của gan, túi mật và ống dẫn mật" },
            { maICD: "D37.7", tenBenh: "U tân sinh chưa rõ tính chất của cơ quan tiêu hóa khác" },
            { maICD: "D37.9", tenBenh: "U tân sinh chưa rõ tính chất của cơ quan tiêu hóa không đặc hiệu" },
            { maICD: "C15", tenBenh: "U ác thực quản" },
            { maICD: "C16", tenBenh: "U ác của dạ dày" },
            { maICD: "C17", tenBenh: "U ác ruột non" },
            { maICD: "C18", tenBenh: "U ác đại tràng" },
            { maICD: "C19", tenBenh: "U ác của nơi nối trực tràng - sigma" },
            { maICD: "C20", tenBenh: "U ác trực tràng" },
            { maICD: "C21", tenBenh: "U ác của hậu môn và ống hậu môn" },
            { maICD: "C22", tenBenh: "U ác của gan và đường mật trong gan" },
            { maICD: "C23", tenBenh: "U ác túi mật" },
            { maICD: "C24", tenBenh: "U ác của phần khác và không xác định của đường mật" },
            { maICD: "C25", tenBenh: "U ác của tụy" },
            { maICD: "C26", tenBenh: "U ác của cơ quan tiêu hóa khác và không rõ ràng" },
            { maICD: "C34", tenBenh: "U ác của phế quản và phổi" },
            { maICD: "C34.0", tenBenh: "U ác của phế quản chính" },
            { maICD: "C34.1", tenBenh: "U ác của thùy trên, phế quản hoặc phổi" },
            { maICD: "C34.2", tenBenh: "U ác của thùy giữa, phế quản hoặc phổi" },
            { maICD: "C34.3", tenBenh: "U ác của thùy dưới, phế quản hoặc phổi" },
            { maICD: "D02.2", tenBenh: "Ung thư biểu mô tại chỗ của phế quản và phổi" },
            { maICD: "D38.1", tenBenh: "U tân sinh chưa rõ tính chất của khí quản, phế quản và phổi" },
            { maICD: "C38.4", tenBenh: "U ác của màng phổi" },
            { maICD: "D38.2", tenBenh: "U tân sinh chưa rõ tính chất màng phổi" },
            { maICD: "C78.2", tenBenh: "U ác thứ phát của màng phổi" },
            { maICD: "J94.2", tenBenh: "Tràn máu màng phổi" },
            { maICD: "S27.6", tenBenh: "Tổn thương màng phổi" }
        ]
    },
    {
        maDV: "CT_05_06",
        tenDV: "Chụp CT bụng - tiểu khung thường quy (có/không tiêm thuốc cản quang) (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "N20", tenBenh: "Sỏi thận và niệu quản" },
            { maICD: "N20.0", tenBenh: "Sỏi thận" },
            { maICD: "N20.1", tenBenh: "Sỏi niệu quản" },
            { maICD: "N20.2", tenBenh: "Sỏi thận và sỏi niệu quản" },
            { maICD: "N20.9", tenBenh: "Sỏi tiết niệu không đặc hiệu" },
            { maICD: "N21.0", tenBenh: "Sỏi bàng quang" },
            { maICD: "N13", tenBenh: "Bệnh tiết niệu trào ngược và tắc nghẽn" },
            { maICD: "N13.0", tenBenh: "Thận ứ nước do chít hẹp khúc nối bể thận niệu quản" },
            { maICD: "N13.1", tenBenh: "Thận ứ nước do chít hẹp khúc nối bể thận niệu quản không phân loại nơi khác" },
            { maICD: "N13.2", tenBenh: "Thận ứ nước do sỏi thận và niệu quản gây tắc nghẽn" },
            { maICD: "N13.3", tenBenh: "Thận ứ nước khác và không đặc hiệu" },
            { maICD: "N13.4", tenBenh: "Niệu quản ứ nước" },
            { maICD: "N13.5", tenBenh: "Niệu quản gấp khúc và chít hẹp không gây ứ nước thận" },
            { maICD: "N13.6", tenBenh: "Thận ứ mủ" },
            { maICD: "N39.0", tenBenh: "Nhiễm khuẩn hệ tiết niệu, vị trí không xác định" },
            { maICD: "N05.8", tenBenh: "Hội chứng viêm thận không đặc hiệu" },
            { maICD: "N23", tenBenh: "Cơn đau quặn thận không xác định" },
            { maICD: "Z98.8", tenBenh: "Các tình trạng hậu phẫu xác định khác" },
            { maICD: "R33", tenBenh: "Bí đái" },
            { maICD: "K31", tenBenh: "Bệnh khác của dạ dày và tá tràng" },
            { maICD: "K31.1", tenBenh: "Hẹp môn vị do phì đại ở người lớn" },
            { maICD: "K31.4", tenBenh: "Túi thừa dạ dày" },
            { maICD: "K31.5", tenBenh: "Tắc tá tràng" },
            { maICD: "K31.6", tenBenh: "Rò dạ dày và tá tràng" },
            { maICD: "K35.0", tenBenh: "Viêm ruột thừa với viêm phúc mạc toàn bộ" },
            { maICD: "K35.1", tenBenh: "Viêm ruột thừa cấp với áp xe phúc mạc" },
            { maICD: "K35.2", tenBenh: "Viêm ruột thừa cấp kèm viêm phúc mạc toàn bộ" },
            { maICD: "K35.3", tenBenh: "Viêm ruột thừa cấp kèm viêm phúc mạc khu trú" },
            { maICD: "K35.8", tenBenh: "Viêm ruột thừa cấp tính, khác và không đặc hiệu" },
            { maICD: "K35.9", tenBenh: "Viêm ruột thừa cấp - Không đặc hiệu" },
            { maICD: "K36", tenBenh: "Viêm ruột thừa khác" },
            { maICD: "K37", tenBenh: "Viêm ruột thừa không đặc hiệu" },
            { maICD: "K43", tenBenh: "Thoát vị bụng" },
            { maICD: "K44", tenBenh: "Thoát vị hoành" },
            { maICD: "K55", tenBenh: "Rối loạn mạch máu ruột" },
            { maICD: "K56.0", tenBenh: "Liệt ruột" },
            { maICD: "K56.1", tenBenh: "Lồng ruột" },
            { maICD: "K56.2", tenBenh: "Xoắn ruột" },
            { maICD: "K56.3", tenBenh: "Liệt ruột do sỏi" },
            { maICD: "K56.4", tenBenh: "Nghẹt ruột khác" },
            { maICD: "K56.5", tenBenh: "Dính ruột [thành dải] có tắc nghẽn" },
            { maICD: "K56.6", tenBenh: "Tắc ruột khác và không xác định" },
            { maICD: "K56.7", tenBenh: "Liệt ruột, không đặc hiệu" },
            { maICD: "K57", tenBenh: "Bệnh túi thừa của ruột" },
            { maICD: "K63", tenBenh: "Bệnh khác của ruột" },
            { maICD: "K63.0", tenBenh: "Áp xe ruột" },
            { maICD: "K63.1", tenBenh: "Thủng ruột (không có chấn thương)" },
            { maICD: "K63.2", tenBenh: "Rò ruột" },
            { maICD: "K63.3", tenBenh: "Loét ruột" },
            { maICD: "K63.4", tenBenh: "Sa ruột" },
            { maICD: "K65", tenBenh: "Viêm phúc mạc" },
            { maICD: "K75.0", tenBenh: "Áp xe gan" },
            { maICD: "K80", tenBenh: "Sỏi mật" },
            { maICD: "K80.0", tenBenh: "Sỏi túi mật có viêm túi mật cấp" },
            { maICD: "K80.1", tenBenh: "Sỏi túi mật có viêm túi mật khác" },
            { maICD: "K80.3", tenBenh: "Sỏi ống mật có viêm đường mật" },
            { maICD: "K80.4", tenBenh: "Sỏi đường mật có viêm túi mật" },
            { maICD: "K80.5", tenBenh: "Sỏi mật không có viêm đường mật hay viêm túi mật" },
            { maICD: "K80.8", tenBenh: "Sỏi mật khác" },
            { maICD: "K81", tenBenh: "Viêm túi mật" },
            { maICD: "K82", tenBenh: "Bệnh túi mật khác" },
            { maICD: "K83", tenBenh: "Bệnh khác của đường mật" },
            { maICD: "K83.0", tenBenh: "Viêm đường mật" },
            { maICD: "K83.1", tenBenh: "Tắc ống mật" },
            { maICD: "K83.2", tenBenh: "Thủng đường mật" },
            { maICD: "K83.3", tenBenh: "Rò đường mật" },
            { maICD: "K83.5", tenBenh: "Nang đường mật" },
            { maICD: "K85", tenBenh: "Viêm tụy cấp" },
            { maICD: "K86", tenBenh: "Bệnh tụy khác" },
            { maICD: "K86.0", tenBenh: "Viêm tụy mạn do rượu" },
            { maICD: "K86.1", tenBenh: "Viêm tụy mạn thể khác" },
            { maICD: "K86.2", tenBenh: "Nang tụy" },
            { maICD: "K86.3", tenBenh: "Nang giả tụy" },
            { maICD: "K86.8", tenBenh: "Bệnh đặc hiệu khác của tụy" },
            { maICD: "K86.9", tenBenh: "Bệnh tụy, không đặc hiệu" },
            { maICD: "R10", tenBenh: "Đau bụng và vùng chậu" },
            { maICD: "R10.0", tenBenh: "Bụng cấp" },
            { maICD: "R10.4", tenBenh: "Đau bụng không xác định và đau bụng khác" }
        ]
    },
    {
        maDV: "CT_07",
        tenDV: "Chụp CT mạch máu não (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "I64", tenBenh: "Đột quị, không xác định do xuất huyết hay nhồi máu (Tai biến mạch máu não)" },
            { maICD: "I63", tenBenh: "Nhồi máu não" },
            { maICD: "I61", tenBenh: "Xuất huyết nội sọ" },
            { maICD: "I63.6", tenBenh: "Nhồi máu não do huyết khối tĩnh mạch não, không sinh mủ" },
            { maICD: "I60", tenBenh: "Xuất huyết dưới nhện không do chấn thương" },
            { maICD: "G45.9", tenBenh: "Cơn thiếu máu não thoáng qua" },
            { maICD: "I67.9", tenBenh: "Bệnh mạch máu não không xác định" }
        ]
    },
    {
        maDV: "CT_08",
        tenDV: "Chụp CT mạch máu chi dưới (từ 1 - 32 dãy) có tiêm thuốc cản quang",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "I73.9", tenBenh: "Bệnh mạch máu ngoại biên, không đặc hiệu" },
            { maICD: "I70.2", tenBenh: "Xơ vữa động mạch ngoại biên" },
            { maICD: "I74.3", tenBenh: "Thuyên tắc và huyết khối động mạch chi dưới" },
            { maICD: "I72.4", tenBenh: "Phình và tách động mạch chi dưới" },
            { maICD: "I80.2", tenBenh: "Viêm tĩnh mạch và viêm tắc tĩnh mạch của các tĩnh mạch sâu khác ở chi dưới" }
        ]
    },
    {
        maDV: "CT_09_10",
        tenDV: "Chụp CT xương chi / Khớp thường quy (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "S72.1", tenBenh: "Gãy mấu chuyển" },
            { maICD: "S82.6", tenBenh: "Gãy xương bên mắt cá chân" },
            { maICD: "S92.1", tenBenh: "Gãy xương mắt cá" },
            { maICD: "S52.0", tenBenh: "Gãy xương đầu trên của xương trụ" },
            { maICD: "S42.1", tenBenh: "Gãy xương vai" },
            { maICD: "S42.2", tenBenh: "Gãy phần trên xương cánh tay" },
            { maICD: "S32.3", tenBenh: "Gãy xương chậu" },
            { maICD: "Z96.6", tenBenh: "Cơ thể có dụng cụ chỉnh hình khớp" },
            { maICD: "C79.5", tenBenh: "U ác thứ phát của xương và tủy xương" },
            { maICD: "S72.0", tenBenh: "Gãy cổ xương đùi" },
            { maICD: "S92.0", tenBenh: "Gãy xương gót" },
            { maICD: "S72.3", tenBenh: "Gãy thân xương đùi" },
            { maICD: "Y79", tenBenh: "Dụng cụ chỉnh hình kết hợp với tai biến" },
            { maICD: "M86", tenBenh: "Viêm xương tủy" },
            { maICD: "S82.1", tenBenh: "Gãy đầu trên của xương chày" },
            { maICD: "S82.7", tenBenh: "Gãy xương khác của cẳng chân" },
            { maICD: "S52.1", tenBenh: "Gãy xương đầu trên của xương quay" },
            { maICD: "S42.4", tenBenh: "Gãy phần dưới xương cánh tay" },
            { maICD: "S62.5", tenBenh: "Gãy xương ở đầu thấp và xương quay" },
            { maICD: "S52.4", tenBenh: "Gãy thân cả xương trụ và xương quay" },
            { maICD: "S52.6", tenBenh: "Gãy xương đầu dưới cả xương trụ và xương quay" },
            { maICD: "S62.0", tenBenh: "Gãy xương của xương thuyền bàn tay" },
            { maICD: "S62.1", tenBenh: "Gãy xương khớp cổ tay khác" },
            { maICD: "S62.2", tenBenh: "Gãy xương đốt đầu bàn tay" },
            { maICD: "S62.3", tenBenh: "Gãy xương đốt khác bàn tay" },
            { maICD: "S62.6", tenBenh: "Gãy xương các ngón tay khác" },
            { maICD: "S72.4", tenBenh: "Gãy xương đầu dưới xương đùi" },
            { maICD: "S82.0", tenBenh: "Gãy xương bánh chè" },
            { maICD: "S82.2", tenBenh: "Gãy thân xương chày" },
            { maICD: "S82.5", tenBenh: "Gãy xương giữa mắt cá chân" },
            { maICD: "S92.2", tenBenh: "Gãy xương cổ chân khác" },
            { maICD: "S92.3", tenBenh: "Gãy xương đốt bàn chân" },
            { maICD: "S92.4", tenBenh: "Gãy xương ngón chân cái" },
            { maICD: "S92.5", tenBenh: "Gãy xương ngón chân khác" },
            { maICD: "S32.4", tenBenh: "Gãy xương ổ cối" },
            { maICD: "S32.1", tenBenh: "Gãy xương cùng" },
            { maICD: "S32.5", tenBenh: "Gãy xương mu" },
            { maICD: "S32.2", tenBenh: "Gãy xương cụt" },
            { maICD: "S72.8", tenBenh: "Gãy phần khác xương đùi" }
        ]
    },
    {
        maDV: "CT_11_12",
        tenDV: "Chụp CT cột sống cổ (có/không tiêm thuốc cản quang) (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "M48.0", tenBenh: "Hẹp ống sống" },
            { maICD: "M43.1", tenBenh: "Bệnh trượt đốt sống" },
            { maICD: "M48.3", tenBenh: "Chấn thương cột sống" },
            { maICD: "M41", tenBenh: "Vẹo cột sống" },
            { maICD: "M46.2", tenBenh: "Viêm xương tủy thân đốt sống" },
            { maICD: "M47", tenBenh: "Thoái hóa cột sống" },
            { maICD: "T08", tenBenh: "Gãy cột sống, mức độ không xác định" },
            { maICD: "M43.0", tenBenh: "Trượt đốt sống" },
            { maICD: "S12.0", tenBenh: "Gãy đốt sống cổ thứ nhất" },
            { maICD: "S12.1", tenBenh: "Gãy đốt sống cổ thứ hai" },
            { maICD: "S12.2", tenBenh: "Gãy đốt sống cổ đặc hiệu khác" },
            { maICD: "S12.8", tenBenh: "Gãy các phần khác của cổ" },
            { maICD: "C41.2", tenBenh: "U ác của cột sống" },
            { maICD: "C79.5", tenBenh: "U ác thứ phát của xương và tủy xương" },
            { maICD: "S19", tenBenh: "Tổn thương không xác định khác ở cổ" },
            { maICD: "S17", tenBenh: "Tổn thương giập nát của cổ" },
            { maICD: "J38.6", tenBenh: "Hẹp thanh quản" },
            { maICD: "J38.0", tenBenh: "Liệt dây thanh âm và thanh quản" },
            { maICD: "R22.1", tenBenh: "Sưng khu trú, khối và cục ở cổ" },
            { maICD: "S11", tenBenh: "Vết thương hở của cổ" },
            { maICD: "C02", tenBenh: "U ác của phần khác và không xác định của lưỡi" },
            { maICD: "J39.0", tenBenh: "Áp xe sau họng và áp xe cận họng" },
            { maICD: "K12.2", tenBenh: "Viêm mô tế bào và áp xe của miệng" },
            { maICD: "L02.1", tenBenh: "Áp xe da, nhọt, cụm nhọt ở cổ" },
            { maICD: "J36", tenBenh: "Áp xe quanh amidan" },
            { maICD: "C10", tenBenh: "U ác của hầu miệng" },
            { maICD: "C12", tenBenh: "U ác của xoang lê" },
            { maICD: "C13", tenBenh: "U ác của hạ hầu" },
            { maICD: "C32", tenBenh: "U ác thanh quản" },
            { maICD: "C77.0", tenBenh: "U ác của hạch của vùng đầu mặt cổ" }
        ]
    },
    {
        maDV: "CT_13_14",
        tenDV: "Chụp CT cột sống ngực / thắt lưng không tiêm thuốc (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "M48.0", tenBenh: "Hẹp ống sống" },
            { maICD: "M43.1", tenBenh: "Bệnh trượt đốt sống" },
            { maICD: "M48.3", tenBenh: "Chấn thương cột sống" },
            { maICD: "M41", tenBenh: "Vẹo cột sống" },
            { maICD: "M46.2", tenBenh: "Viêm xương tủy thân đốt sống" },
            { maICD: "M47", tenBenh: "Thoái hóa cột sống" },
            { maICD: "T08", tenBenh: "Gãy cột sống, mức độ không xác định" },
            { maICD: "M43.0", tenBenh: "Trượt đốt sống" },
            { maICD: "S22.0", tenBenh: "Gãy đốt sống ngực" },
            { maICD: "S32.0", tenBenh: "Gãy đốt sống thắt lưng" },
            { maICD: "C41.2", tenBenh: "U ác của cột sống" },
            { maICD: "C79.5", tenBenh: "U ác thứ phát của xương và tủy xương" }
        ]
    },
    {
        maDV: "CT_15_16",
        tenDV: "Chụp CT hàm - mặt (có/không tiêm thuốc cản quang) (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "J32", tenBenh: "Viêm xoang mạn tính" },
            { maICD: "J32.0", tenBenh: "Viêm xoang hàm mạn tính" },
            { maICD: "J32.1", tenBenh: "Viêm xoang trán mạn tính" },
            { maICD: "J32.2", tenBenh: "Viêm xoang sàng mạn tính" },
            { maICD: "J32.3", tenBenh: "Viêm xoang bướm mạn tính" },
            { maICD: "J32.4", tenBenh: "Viêm toàn bộ xoang mạn" },
            { maICD: "D10.6", tenBenh: "U lành của hầu-mũi" },
            { maICD: "D16.4", tenBenh: "U lành tính xương sọ và xương mặt" },
            { maICD: "J33", tenBenh: "Polyp mũi" },
            { maICD: "J01", tenBenh: "Viêm xoang cấp" },
            { maICD: "C31", tenBenh: "U ác của các xoang phụ" },
            { maICD: "D11", tenBenh: "U lành của các tuyến nước bọt chính" },
            { maICD: "C07", tenBenh: "U ác tuyến mang tai" },
            { maICD: "C08", tenBenh: "U ác của các tuyến nước bọt chính khác và không xác định" },
            { maICD: "C11", tenBenh: "U ác của hầu-mũi" },
            { maICD: "S02", tenBenh: "Vỡ xương sọ và xương mặt" },
            { maICD: "S02.2", tenBenh: "Vỡ xương mũi" },
            { maICD: "S02.4", tenBenh: "Vỡ xương má và xương hàm" },
            { maICD: "S02.6", tenBenh: "Vỡ xương hàm" },
            { maICD: "S02.7", tenBenh: "Vỡ nhiều mảnh của xương sọ và xương mặt" }
        ]
    },
    {
        maDV: "CT_17",
        tenDV: "Chụp CT tai - xương đá không tiêm thuốc (từ 1 - 32 dãy)",
        nhom: "Cắt lớp vi tính (CT)",
        danhSachICD: [
            { maICD: "H65.3", tenBenh: "Viêm tai giữa tiết nhày mạn" },
            { maICD: "H66.1", tenBenh: "Viêm tai giữa vòi nhĩ mủ mạn" },
            { maICD: "H66.2", tenBenh: "Viêm tai giữa thượng nhĩ sào bào mủ mạn" },
            { maICD: "H66.3", tenBenh: "Viêm tai giữa nung mủ mạn khác" },
            { maICD: "H66.4", tenBenh: "Viêm tai giữa nung mủ không đặc hiệu" },
            { maICD: "H81.0", tenBenh: "Bệnh Ménière" },
            { maICD: "H71", tenBenh: "Cholesteatoma của tai giữa" },
            { maICD: "H95.0", tenBenh: "Cholesteatoma tái phát ở hố mổ khoét chũm" },
            { maICD: "H80", tenBenh: "Xốp xơ tai" },
            { maICD: "H70.0", tenBenh: "Viêm xương chũm cấp" }
        ]
    }
];