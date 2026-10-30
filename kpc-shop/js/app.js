'use strict';

const PRODUCTS = [
  {id:1,name:'iPhone 16 128GB',category:'Điện thoại',price:18490000,oldPrice:21990000,badge:'Giảm 16%',icon:'📱',image:'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=85',specs:['128GB','OLED','5G'],short:'Thiết kế tinh tế, hiệu năng mạnh mẽ, camera chụp ảnh sắc nét.',description:'iPhone 16 mang đến trải nghiệm mượt mà với hiệu năng cao, màn hình sắc nét và hệ thống camera linh hoạt. Đây là lựa chọn phù hợp cho nhu cầu học tập, làm việc và giải trí hằng ngày.',parameters:{'Màn hình':'6.1 inch OLED','Bộ nhớ':'128GB','Kết nối':'5G, Wi-Fi, Bluetooth','Bảo hành':'12 tháng'}},
  {id:2,name:'Samsung Galaxy S25 FE 256GB',category:'Điện thoại',price:16990000,oldPrice:18990000,badge:'Bán chạy',icon:'📱',image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85',specs:['256GB','AMOLED','5G'],short:'Màn hình sống động, camera đa dụng, thiết kế hiện đại.',description:'Samsung Galaxy S25 FE cân bằng giữa hiệu năng, màn hình và camera cho trải nghiệm sử dụng hằng ngày. Bộ nhớ rộng rãi giúp lưu ảnh, video và ứng dụng thoải mái.',parameters:{'Màn hình':'Dynamic AMOLED','Bộ nhớ':'256GB','Kết nối':'5G, Wi-Fi 6','Bảo hành':'12 tháng'}},
  {id:3,name:'Xiaomi Redmi Note 14 8GB/256GB',category:'Điện thoại',price:5490000,oldPrice:6290000,badge:'Giá tốt',icon:'📱',image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85',specs:['256GB','AMOLED','Pin lớn'],short:'Màn hình đẹp, pin bền bỉ và bộ nhớ rộng trong tầm giá.',description:'Redmi Note 14 là lựa chọn hợp lý cho người dùng cần smartphone có màn hình đẹp, bộ nhớ lớn và thời lượng pin dài để phục vụ học tập, liên lạc và giải trí.',parameters:{'Màn hình':'AMOLED 6.67 inch','Bộ nhớ':'8GB RAM / 256GB','Pin':'Pin dung lượng lớn','Bảo hành':'12 tháng'}},
  {id:4,name:'OPPO Reno 13F 5G 256GB',category:'Điện thoại',price:8990000,oldPrice:9990000,badge:'Ưu đãi',icon:'📱',image:'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=85',specs:['256GB','5G','Camera AI'],short:'Phong cách trẻ trung, camera linh hoạt, kết nối 5G.',description:'OPPO Reno 13F hướng đến người dùng yêu thích thiết kế trẻ trung và chụp ảnh thường ngày. Máy có bộ nhớ rộng rãi, đáp ứng tốt nhu cầu đa nhiệm cơ bản.',parameters:{'Màn hình':'AMOLED','Bộ nhớ':'256GB','Kết nối':'5G','Bảo hành':'12 tháng'}},
  {id:5,name:'MacBook Air 13 inch M4',category:'Laptop',price:25990000,oldPrice:27990000,badge:'Mỏng nhẹ',icon:'💻',image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85',specs:['Apple M4','16GB RAM','SSD 256GB'],short:'Mỏng nhẹ, pin lâu, phù hợp học tập và công việc di động.',description:'MacBook Air 13 inch phù hợp với người cần máy tính xách tay gọn nhẹ để học tập, thiết kế nội dung, lập trình và xử lý công việc mỗi ngày.',parameters:{'Màn hình':'13.6 inch','Chip':'Apple M4','Bộ nhớ':'16GB RAM / 256GB SSD','Hệ điều hành':'macOS'}},
  {id:6,name:'ASUS Vivobook 15 Core i5',category:'Laptop',price:14990000,oldPrice:16990000,badge:'Văn phòng',icon:'💻',image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85',specs:['Core i5','16GB RAM','SSD 512GB'],short:'Máy tính đa dụng cho học tập, văn phòng và làm việc từ xa.',description:'ASUS Vivobook 15 có thiết kế hiện đại, bàn phím thoải mái và cấu hình phù hợp cho học tập, ứng dụng văn phòng, làm bài tập lập trình và giải trí nhẹ.',parameters:{'Màn hình':'15.6 inch Full HD','CPU':'Intel Core i5','Bộ nhớ':'16GB RAM / 512GB SSD','Hệ điều hành':'Windows 11'}},
  {id:7,name:'Acer Nitro V 15 Gaming',category:'Laptop',price:22990000,oldPrice:24990000,badge:'Gaming',icon:'💻',image:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=85',specs:['Core i5','RTX series','144Hz'],short:'Hiệu năng đồ họa mạnh, màn hình tần số quét cao.',description:'Acer Nitro V 15 hướng đến game thủ và người dùng cần sức mạnh đồ họa. Cấu hình minh họa phù hợp để chơi game, dựng nội dung và chạy các ứng dụng cần hiệu năng cao.',parameters:{'Màn hình':'15.6 inch 144Hz','CPU':'Intel Core i5','Đồ họa':'GPU rời dòng RTX','Bảo hành':'12 tháng'}},
  {id:8,name:'Lenovo IdeaPad Slim 3',category:'Laptop',price:13490000,oldPrice:14990000,badge:'Tiết kiệm',icon:'💻',image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85',specs:['Core 5','16GB RAM','SSD 512GB'],short:'Thiết kế tối giản, cấu hình cân bằng cho sinh viên.',description:'IdeaPad Slim 3 là mẫu laptop thân thiện với sinh viên, có thiết kế gọn gàng và cấu hình phục vụ tốt học trực tuyến, bài tập, lập trình cơ bản cùng công việc văn phòng.',parameters:{'Màn hình':'15.6 inch','CPU':'Intel Core 5','Bộ nhớ':'16GB RAM / 512GB SSD','Hệ điều hành':'Windows 11'}},
  {id:9,name:'iPad Air 11 inch Wi‑Fi',category:'Máy tính bảng',price:16990000,oldPrice:18490000,badge:'Màn hình đẹp',icon:'▣',image:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=85',specs:['11 inch','Wi‑Fi','128GB'],short:'Màn hình lớn, thuận tiện ghi chú, học tập và sáng tạo.',description:'iPad Air có thiết kế mỏng nhẹ, màn hình rộng và khả năng kết hợp với phụ kiện hỗ trợ ghi chú, vẽ, đọc tài liệu và giải trí.',parameters:{'Màn hình':'11 inch','Kết nối':'Wi‑Fi','Bộ nhớ':'128GB','Phụ kiện':'Hỗ trợ bút cảm ứng tương thích'}},
  {id:10,name:'Samsung Galaxy Tab S10 FE',category:'Máy tính bảng',price:11990000,oldPrice:13490000,badge:'Học tập',icon:'▣',image:'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=85',specs:['10.9 inch','128GB','Bút cảm ứng'],short:'Phù hợp học online, đọc tài liệu và ghi chú bằng bút.',description:'Galaxy Tab S10 FE giúp người dùng xử lý tài liệu, tham gia lớp học trực tuyến và ghi chú nhanh. Màn hình lớn hỗ trợ đa nhiệm tiện lợi.',parameters:{'Màn hình':'10.9 inch','Bộ nhớ':'128GB','Kết nối':'Wi-Fi','Phụ kiện':'Bút cảm ứng tùy phiên bản'}},
  {id:11,name:'Xiaomi Pad 7 8GB/128GB',category:'Máy tính bảng',price:9490000,oldPrice:10490000,badge:'Giải trí',icon:'▣',image:'https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?auto=format&fit=crop&w=800&q=85',specs:['11.2 inch','128GB','Tần số quét cao'],short:'Màn hình rộng, phù hợp xem phim và làm việc đa nhiệm.',description:'Xiaomi Pad 7 đem lại không gian hiển thị rộng cho nội dung số, học trực tuyến và các tác vụ giải trí. Thiết kế gọn giúp dễ mang theo.',parameters:{'Màn hình':'11.2 inch','Bộ nhớ':'8GB RAM / 128GB','Kết nối':'Wi-Fi','Bảo hành':'12 tháng'}},
  {id:12,name:'Lenovo Tab M11 128GB',category:'Máy tính bảng',price:4990000,oldPrice:5690000,badge:'Dễ tiếp cận',icon:'▣',image:'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=85',specs:['11 inch','128GB','Pin lâu'],short:'Máy tính bảng cho nhu cầu cơ bản và giải trí gia đình.',description:'Lenovo Tab M11 là lựa chọn tham khảo trong phân khúc dễ tiếp cận, phục vụ xem video, đọc sách, học online và các ứng dụng cơ bản.',parameters:{'Màn hình':'11 inch','Bộ nhớ':'128GB','Kết nối':'Wi-Fi','Bảo hành':'12 tháng'}},
  {id:13,name:'Apple AirPods Pro 2',category:'Âm thanh',price:5990000,oldPrice:6490000,badge:'Chống ồn',icon:'🎧',image:'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=85',specs:['ANC','Bluetooth','Hộp sạc'],short:'Tai nghe gọn nhẹ, chống ồn chủ động và âm thanh rõ nét.',description:'AirPods Pro 2 là tai nghe không dây nhỏ gọn hỗ trợ chống ồn chủ động và chế độ xuyên âm, thuận tiện khi nghe nhạc, gọi điện và di chuyển.',parameters:{'Kết nối':'Bluetooth','Tính năng':'Chống ồn chủ động','Sạc':'Hộp sạc không dây','Tương thích':'Thiết bị Apple và Bluetooth'}},
  {id:14,name:'Sony WH‑1000XM5',category:'Âm thanh',price:7490000,oldPrice:8490000,badge:'Cao cấp',icon:'🎧',image:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=85',specs:['Over-ear','ANC','Pin dài'],short:'Tai nghe chụp tai với chống ồn và đệm tai êm ái.',description:'Sony WH‑1000XM5 được thiết kế cho trải nghiệm nghe nhạc tập trung với kiểu đeo chụp tai, khả năng chống ồn và kết nối không dây tiện lợi.',parameters:{'Kiểu tai nghe':'Chụp tai','Kết nối':'Bluetooth','Tính năng':'Chống ồn','Sạc':'USB-C'}},
  {id:15,name:'JBL Flip 7 Bluetooth',category:'Âm thanh',price:3290000,oldPrice:3690000,badge:'Mang đi dễ dàng',icon:'🔊',image:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=85',specs:['Bluetooth','Di động','Âm thanh mạnh'],short:'Loa di động cho những buổi tụ tập và chuyến đi.',description:'JBL Flip 7 là mẫu loa di động hướng đến trải nghiệm nghe nhạc linh hoạt trong phòng, ngoài trời và những chuyến đi cùng bạn bè.',parameters:{'Loại loa':'Loa Bluetooth di động','Kết nối':'Bluetooth','Nguồn':'Pin sạc','Tính năng':'Thiết kế gọn nhẹ'}},
  {id:16,name:'Soundcore Liberty 4 NC',category:'Âm thanh',price:1990000,oldPrice:2490000,badge:'Giá tốt',icon:'🎧',image:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=85',specs:['True Wireless','ANC','Bluetooth'],short:'Tai nghe true wireless có chống ồn và hộp sạc tiện lợi.',description:'Soundcore Liberty 4 NC là lựa chọn tai nghe không dây có tính năng chống ồn, thiết kế nhỏ gọn và thời lượng sử dụng linh hoạt cho mỗi ngày.',parameters:{'Kiểu tai nghe':'True Wireless','Kết nối':'Bluetooth','Tính năng':'Chống ồn chủ động','Sạc':'Hộp sạc USB-C'}},
  {id:17,name:'Sạc nhanh KPC GaN 65W',category:'Phụ kiện',price:790000,oldPrice:990000,badge:'Phụ kiện hot',icon:'🔌',image:'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=85',specs:['65W','USB-C','GaN'],short:'Củ sạc nhỏ gọn, hỗ trợ sạc nhanh cho thiết bị tương thích.',description:'Bộ sạc GaN 65W là phụ kiện minh họa dành cho người thường xuyên di chuyển. Hãy kiểm tra chuẩn sạc và công suất hỗ trợ của thiết bị trước khi sử dụng.',parameters:{'Công suất':'Tối đa 65W','Cổng':'USB-C','Công nghệ':'GaN','Lưu ý':'Cáp có thể bán riêng'}},
  {id:18,name:'Logitech MX Master 3S',category:'Phụ kiện',price:2490000,oldPrice:2790000,badge:'Làm việc',icon:'🖱️',image:'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=85',specs:['Không dây','Ergonomic','USB-C'],short:'Chuột công thái học dành cho người làm việc nhiều giờ.',description:'MX Master 3S có kiểu dáng công thái học, nhiều tùy chọn điều khiển và kết nối không dây phù hợp cho không gian làm việc đa thiết bị.',parameters:{'Kết nối':'Bluetooth / đầu thu USB','Sạc':'USB-C','Thiết kế':'Công thái học','Tương thích':'Windows, macOS'}},
  {id:19,name:'Adapter Samsung 25W USB-C',category:'Phụ kiện',price:390000,oldPrice:490000,badge:'Thiết yếu',icon:'🔌',image:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=85',specs:['25W','USB-C','Nhỏ gọn'],short:'Củ sạc nhỏ gọn cho thiết bị hỗ trợ sạc USB-C.',description:'Adapter USB-C 25W phù hợp cho các thiết bị tương thích công suất sạc tương ứng. Vui lòng sử dụng cáp đạt chuẩn để đảm bảo hiệu quả và an toàn.',parameters:{'Công suất':'Tối đa 25W','Cổng':'USB-C','Màu sắc':'Trắng','Lưu ý':'Thiết bị tương thích có thể khác nhau'}},
  {id:20,name:'SanDisk Ultra microSD 128GB',category:'Phụ kiện',price:329000,oldPrice:399000,badge:'Bộ nhớ',icon:'💾',image:'https://images.unsplash.com/photo-1597138804456-e7dca7f59d93?auto=format&fit=crop&w=800&q=85',specs:['128GB','microSD','Di động'],short:'Mở rộng bộ nhớ cho các thiết bị hỗ trợ thẻ microSD.',description:'Thẻ nhớ microSD 128GB giúp bổ sung không gian lưu trữ cho thiết bị tương thích như camera, máy tính bảng hoặc một số dòng điện thoại.',parameters:{'Dung lượng':'128GB','Chuẩn thẻ':'microSD','Ứng dụng':'Lưu ảnh, video và dữ liệu','Lưu ý':'Kiểm tra thiết bị hỗ trợ trước khi mua'}}
];

const ARTICLES = [
  {id:1,title:'5 điều nên kiểm tra trước khi chọn mua laptop cho sinh viên',date:'20/10/2026',icon:'💻',category:'Hướng dẫn mua sắm',excerpt:'Chọn cấu hình phù hợp, cân nhắc trọng lượng, pin và chính sách bảo hành để dùng máy hiệu quả trong nhiều năm.',slug:'chon-laptop-cho-sinh-vien'},
  {id:2,title:'Tai nghe chống ồn: Khi nào bạn nên đầu tư?',date:'17/10/2026',icon:'🎧',category:'Tư vấn công nghệ',excerpt:'Tìm hiểu khác biệt giữa chống ồn chủ động và cách âm thụ động để chọn tai nghe đúng nhu cầu.',slug:'tai-nghe-chong-on'},
  {id:3,title:'Mẹo bảo vệ pin điện thoại trong quá trình sử dụng',date:'12/10/2026',icon:'🔋',category:'Thủ thuật',excerpt:'Một số thói quen đơn giản giúp pin hoạt động ổn định và giữ trải nghiệm sử dụng điện thoại dễ chịu hơn.',slug:'meo-bao-ve-pin-dien-thoai'}
];

const CATEGORIES = [
  {name:'Điện thoại',icon:'📱',desc:'4 sản phẩm'},
  {name:'Laptop',icon:'💻',desc:'4 sản phẩm'},
  {name:'Máy tính bảng',icon:'▣',desc:'4 sản phẩm'},
  {name:'Âm thanh',icon:'🎧',desc:'4 sản phẩm'},
  {name:'Phụ kiện',icon:'🔌',desc:'4 sản phẩm'}
];

const MEGA_CATEGORY_INFO = {
  'Điện thoại': {
    subtitle:'Chọn smartphone phù hợp với phong cách và nhu cầu mỗi ngày.',
    brands:['Apple','Samsung','Xiaomi','OPPO','HONOR','Khác'],
    highlights:[['📱','Điện thoại 5G'],['✨','Camera & AI'],['📲','Điện thoại gập'],['🎮','Gaming phone'],['🔋','Pin bền bỉ']],
    columns:[
      {title:'Thương hiệu nổi bật',items:['Apple iPhone','Samsung Galaxy','Xiaomi Redmi','OPPO Reno','HONOR Series']},
      {title:'Dòng sản phẩm',items:['iPhone 16 Series','Galaxy S Series','Galaxy A Series','Redmi Note Series','Reno Series']},
      {title:'Chọn theo nhu cầu',items:['Điện thoại 5G','Chụp ảnh đẹp','Chơi game','Pin dung lượng lớn','Điện thoại phổ thông']}
    ]
  },
  'Laptop': {
    subtitle:'Máy tính cho học tập, công việc sáng tạo và giải trí.',
    brands:['MacBook','ASUS','Acer','Lenovo','HP','Dell'],
    highlights:[['🎓','Laptop sinh viên'],['💼','Văn phòng'],['🎮','Laptop gaming'],['🎨','Đồ họa & sáng tạo'],['⚡','Mỏng nhẹ']],
    columns:[
      {title:'Thương hiệu',items:['Apple MacBook','ASUS Vivobook','Acer Aspire','Lenovo IdeaPad','HP Pavilion']},
      {title:'Cấu hình',items:['Intel Core i5','Intel Core i7','AMD Ryzen','RAM 16GB','SSD 512GB trở lên']},
      {title:'Nhu cầu sử dụng',items:['Học tập – văn phòng','Lập trình','Đồ họa – thiết kế','Gaming','Di chuyển thường xuyên']}
    ]
  },
  'Máy tính bảng': {
    subtitle:'Không gian màn hình rộng cho học tập, ghi chú và giải trí.',
    brands:['Apple iPad','Samsung','Xiaomi','Lenovo','Khác'],
    highlights:[['✍️','Hỗ trợ bút'],['🎬','Giải trí'],['📚','Học tập'],['⌨️','Kết hợp bàn phím'],['📶','Wi-Fi & 5G']],
    columns:[
      {title:'Thương hiệu',items:['iPad Air','iPad Pro','Samsung Galaxy Tab','Xiaomi Pad','Lenovo Tab']},
      {title:'Theo kích thước',items:['Dưới 9 inch','10 – 11 inch','Trên 11 inch','Màn hình lớn']},
      {title:'Phụ kiện đi kèm',items:['Bút cảm ứng','Bao da bảo vệ','Bàn phím rời','Miếng dán màn hình']}
    ]
  },
  'Âm thanh': {
    subtitle:'Âm thanh sống động cho làm việc, học tập và thư giãn.',
    brands:['Apple','Sony','JBL','Soundcore','Marshall'],
    highlights:[['🎧','Tai nghe không dây'],['🔇','Chống ồn ANC'],['🔊','Loa Bluetooth'],['🎙️','Micro'],['🎵','Âm thanh Hi-Fi']],
    columns:[
      {title:'Thiết bị âm thanh',items:['Tai nghe True Wireless','Tai nghe chụp tai','Tai nghe gaming','Loa Bluetooth','Loa vi tính']},
      {title:'Thương hiệu',items:['Apple AirPods','Sony','JBL','Soundcore','Marshall']},
      {title:'Theo nhu cầu',items:['Học online & họp','Tập luyện thể thao','Chơi game','Du lịch & dã ngoại']}
    ]
  },
  'Phụ kiện': {
    subtitle:'Hoàn thiện trải nghiệm công nghệ với phụ kiện thiết thực.',
    brands:['Anker','Baseus','Belkin','Logitech','KPC'],
    highlights:[['🔌','Củ sạc nhanh'],['🔋','Pin dự phòng'],['🧵','Cáp sạc'],['🖱️','Chuột & bàn phím'],['🛡️','Ốp & bảo vệ']],
    columns:[
      {title:'Phụ kiện điện thoại',items:['Củ sạc nhanh','Cáp sạc','Pin dự phòng','Ốp lưng','Miếng dán màn hình']},
      {title:'Phụ kiện máy tính',items:['Chuột không dây','Bàn phím','Hub chuyển đổi','Túi chống sốc','Giá đỡ laptop']},
      {title:'Theo thương hiệu',items:['Anker','Baseus','Belkin','Logitech','Phụ kiện KPC']}
    ]
  }
};

const DEFAULT_SYSTEM_SEO = {siteTitle:'KPC Shop - Công nghệ trong tầm tay',siteDescription:'KPC Shop - Điện thoại, laptop, máy tính bảng, âm thanh và phụ kiện công nghệ chính hãng.',canonical:'https://kpcshop.vn/',robots:'index,follow',sitemap:true,organizationSchema:true,lazyLoad:true,minify:false};
const DEFAULT_FACEBOOK = {pagePlugin:true,messenger:true,pixel:false,openGraph:true,comments:false,pageUrl:'https://www.facebook.com/',pixelId:'',appId:''};
let currentView='home';
let activeCategory='Tất cả';
let searchQuery='';
let sortBy='featured';
let currentProductId=1;
let adminTab='overview';
let seoProductId=1;
let seoArticleId=1;
let toastTimer;
let cart = loadJSON('kpc_cart', []);

function loadJSON(key, fallback){try{const value=localStorage.getItem(key);return value?JSON.parse(value):fallback}catch{return fallback}}
function saveJSON(key,value){localStorage.setItem(key,JSON.stringify(value))}
function money(number){return new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND',maximumFractionDigits:0}).format(number)}
function esc(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function getProduct(id){return PRODUCTS.find(p=>p.id===Number(id))}
function getCartCount(){return cart.reduce((sum,item)=>sum+item.qty,0)}
function getCartTotal(){return cart.reduce((sum,item)=>sum+(getProduct(item.id)?.price||0)*item.qty,0)}
function toast(message){const node=document.getElementById('toast');node.textContent=message;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),2700)}
function setPageMeta(title,description,robots='index,follow'){
  document.title=title;
  let desc=document.querySelector('meta[name="description"]');if(desc)desc.setAttribute('content',description);
  let robot=document.querySelector('meta[name="robots"]');if(robot)robot.setAttribute('content',robots);
}
function renderMegaCategoryContent(categoryName){
  const category=MEGA_CATEGORY_INFO[categoryName]||MEGA_CATEGORY_INFO['Điện thoại'];
  const productCount=PRODUCTS.filter(p=>p.category===categoryName).length;
  const brandMarkup=category.brands.map((brand,index)=>`<button type="button" class="mega-brand-chip brand-tone-${index%6}" data-action="mega-select" data-category="${esc(categoryName)}">${esc(brand)}</button>`).join('');
  const highlightMarkup=category.highlights.map(([icon,label])=>`<button class="mega-highlight" type="button" data-action="mega-select" data-category="${esc(categoryName)}"><span>${icon}</span><strong>${esc(label)}</strong></button>`).join('');
  const columnsMarkup=category.columns.map(column=>`<div class="mega-link-column"><h3>${esc(column.title)}</h3>${column.items.map(item=>`<button type="button" data-action="mega-select" data-category="${esc(categoryName)}">${esc(item)} <span>›</span></button>`).join('')}</div>`).join('');
  return `<div class="mega-main-top"><div><span class="mega-overline">GỢI Ý CHO BẠN</span><h2>${esc(categoryName)} <span class="mega-product-count">${productCount} sản phẩm</span></h2><p>${esc(category.subtitle)}</p></div><button class="mega-view-all" type="button" data-action="mega-select" data-category="${esc(categoryName)}">Xem danh mục <span>→</span></button></div>
    <div class="mega-brand-row">${brandMarkup}</div>
    <div class="mega-highlights">${highlightMarkup}</div>
    <div class="mega-link-columns">${columnsMarkup}</div>`;
}
function renderMegaCategoryList(selected='Điện thoại'){
  const list=document.getElementById('megaCategoryList');if(!list)return;
  list.innerHTML=CATEGORIES.map(category=>{
    const count=PRODUCTS.filter(p=>p.category===category.name).length;
    return `<button class="mega-category-item ${category.name===selected?'active':''}" type="button" data-action="mega-select" data-category="${esc(category.name)}" aria-current="${category.name===selected?'true':'false'}"><span class="mega-category-icon">${category.icon}</span><span class="mega-category-copy"><strong>${esc(category.name)}</strong><small>${count} sản phẩm</small></span><span class="mega-category-arrow">›</span></button>`;
  }).join('');
}
function setMegaCategory(categoryName){
  if(!MEGA_CATEGORY_INFO[categoryName])return;
  const activeItem=document.querySelector('.mega-category-item.active');
  if(activeItem?.dataset.category===categoryName)return;
  renderMegaCategoryList(categoryName);
  const content=document.getElementById('megaCategoryContent');if(content)content.innerHTML=renderMegaCategoryContent(categoryName);
}
function openCategoryMenu(){
  const menu=document.getElementById('categoryMegaMenu');const backdrop=document.getElementById('categoryBackdrop');const toggle=document.getElementById('categoryToggle');
  if(!menu||!backdrop||!toggle)return;
  const selected=CATEGORIES.some(c=>c.name===activeCategory)?activeCategory:'Điện thoại';
  setMegaCategory(selected);menu.classList.remove('hidden');backdrop.classList.remove('hidden');toggle.setAttribute('aria-expanded','true');toggle.classList.add('is-open');document.body.classList.add('category-menu-open');
}
function closeCategoryMenu(){
  const menu=document.getElementById('categoryMegaMenu');const backdrop=document.getElementById('categoryBackdrop');const toggle=document.getElementById('categoryToggle');
  if(menu)menu.classList.add('hidden');if(backdrop)backdrop.classList.add('hidden');if(toggle){toggle.setAttribute('aria-expanded','false');toggle.classList.remove('is-open')}document.body.classList.remove('category-menu-open');
}
function updateHeader(){
  document.getElementById('cartCount').textContent=getCartCount();
  document.getElementById('yearNow').textContent=new Date().getFullYear();
  document.querySelectorAll('.nav-link').forEach(link=>{
    const view=link.dataset.view;
    link.classList.toggle('active',view===currentView && (!link.dataset.category || link.dataset.category===activeCategory));
  });
}
function goView(view,category){
  currentView=view;
  if(category){activeCategory=category;currentView='products'}
  if(view==='products'&&!category&&activeCategory==='Tất cả')searchQuery=searchQuery.trim();
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}
function render(){
  updateHeader();
  const app=document.getElementById('app');
  if(currentView==='home')app.innerHTML=renderHome();
  else if(currentView==='products')app.innerHTML=renderProducts();
  else if(currentView==='detail')app.innerHTML=renderDetail(getProduct(currentProductId));
  else if(currentView==='news')app.innerHTML=renderNews();
  else if(currentView==='stores')app.innerHTML=renderStores();
  else if(currentView==='admin')app.innerHTML=renderAdmin();
  const systemSeo=getSystemSeo();
  if(currentView==='home')setPageMeta(systemSeo.siteTitle,systemSeo.siteDescription,systemSeo.robots);
  if(currentView==='products')setPageMeta(`${activeCategory==='Tất cả'?'Sản phẩm':activeCategory} | ${systemSeo.siteTitle}`,systemSeo.siteDescription,systemSeo.robots);
  if(currentView==='detail'){
    const p=getProduct(currentProductId);if(p){const cfg=getProductSeo()[p.id]||{};setPageMeta(cfg.title||`${p.name} | KPC Shop`,cfg.description||p.short,systemSeo.robots)}
  }
  if(currentView==='news')setPageMeta('Tin công nghệ | KPC Shop','Tin công nghệ, hướng dẫn mua sắm và mẹo sử dụng thiết bị từ KPC Shop.',systemSeo.robots);
  if(currentView==='stores')setPageMeta('Hệ thống cửa hàng | KPC Shop','Thông tin cửa hàng và kênh liên hệ KPC Shop.',systemSeo.robots);
  if(currentView==='admin')setPageMeta('Quản trị hệ thống | KPC Shop','Bảng quản trị website mẫu KPC Shop.','noindex,nofollow');
}
function productCard(p){
  const off=Math.max(0,Math.round((1-p.price/p.oldPrice)*100));
  return `<article class="product-card">
    <div class="product-badges"><span class="product-badge ${p.badge==='Giảm 16%'?'sale':''}">${esc(p.badge)}</span></div>
    <div class="product-image" data-action="detail" data-id="${p.id}" role="button" tabindex="0" aria-label="Xem ${esc(p.name)}">
      <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="product-fallback">${p.icon}</span>
    </div>
    <div class="product-category">${esc(p.category)}</div>
    <button class="product-name name-button" data-action="detail" data-id="${p.id}">${esc(p.name)}</button>
    <div class="product-specs">${p.specs.map(s=>`<span>${esc(s)}</span>`).join('')}</div>
    <div class="product-price-row"><strong class="product-price">${money(p.price)}</strong><span class="old-price">${money(p.oldPrice)}</span></div>
    <div class="product-rating"><b>★★★★★</b> &nbsp; 4.8 · Ưu đãi ${off}%</div>
    <div class="product-card-actions"><button class="small-btn" data-action="detail" data-id="${p.id}">Xem chi tiết</button><button class="add-cart-btn" data-action="add-cart" data-id="${p.id}" aria-label="Thêm ${esc(p.name)} vào giỏ">＋</button></div>
  </article>`;
}
function renderHome(){
  const featured=PRODUCTS.filter(p=>[1,5,9,13,17,2,6,14].includes(p.id));
  return `
  <section class="hero">
    <div class="hero-copy"><span class="eyebrow">KPC TECH DAYS · ƯU ĐÃI MỖI NGÀY</span><h1>Nâng cấp trải nghiệm.<br><em>Chạm tới tương lai.</em></h1><p>Khám phá điện thoại, laptop và phụ kiện công nghệ được chọn lọc cho học tập, công việc và giải trí.</p><div class="hero-buttons"><button class="btn btn-primary" data-action="go-view" data-view="products">Khám phá sản phẩm <span>→</span></button><button class="btn btn-secondary" data-action="go-view" data-view="news">Mẹo chọn thiết bị</button></div></div>
    <div class="hero-visual"><div class="hero-product"></div><div class="floating-chip chip-top">Deal nổi bật<strong>Tiết kiệm đến 20%</strong></div><div class="floating-chip chip-bottom">✓ Hỗ trợ tận tâm<strong>Chọn đúng nhu cầu</strong></div></div><div class="hero-dots"><i></i><i></i><i></i></div>
  </section>
  <div class="trust-row">
    <div class="trust-item"><div class="trust-icon">✓</div><div><strong>Chính sách rõ ràng</strong><span>Thông tin minh bạch</span></div></div>
    <div class="trust-item"><div class="trust-icon">↻</div><div><strong>Hỗ trợ sau mua</strong><span>Đồng hành cùng bạn</span></div></div>
    <div class="trust-item"><div class="trust-icon">♧</div><div><strong>Thanh toán linh hoạt</strong><span>Tham khảo nhiều lựa chọn</span></div></div>
    <div class="trust-item"><div class="trust-icon">☏</div><div><strong>Tư vấn tận tâm</strong><span>Hotline 1800 6868</span></div></div>
  </div>
  <section class="section"><div class="section-heading"><div><span class="section-kicker">Mua sắm theo nhu cầu</span><h2>Danh mục nổi bật</h2><p class="section-subtitle">Tìm nhanh nhóm sản phẩm bạn đang quan tâm.</p></div><button class="text-link" data-action="go-view" data-view="products">Xem tất cả sản phẩm →</button></div><div class="category-grid">${CATEGORIES.map(c=>`<button class="category-card" data-action="go-view" data-view="products" data-category="${esc(c.name)}"><span class="category-art">${c.icon}</span><span><strong>${esc(c.name)}</strong><small>${c.desc} mẫu</small></span></button>`).join('')}</div></section>
  <div class="promo-strip"><div class="promo-panel"><div><span class="section-kicker">KPC student</span><h3>Thiết bị tốt cho<br>hành trình học tập</h3><p>Chọn cấu hình phù hợp, chi tiêu thông minh.</p><button class="btn btn-primary" data-action="go-view" data-view="products" data-category="Laptop">Xem laptop →</button></div><div class="promo-symbol">💻</div></div><div class="promo-panel dark"><div><span class="section-kicker">Smart living</span><h3>Âm thanh hay.<br>Khoảnh khắc trọn vẹn.</h3><p>Gọn nhẹ cho mọi hành trình mỗi ngày.</p><button class="btn btn-secondary" data-action="go-view" data-view="products" data-category="Âm thanh">Khám phá âm thanh →</button></div><div class="promo-symbol">🎧</div></div></div>
  <section class="section"><div class="section-heading"><div><span class="section-kicker">Được quan tâm</span><h2>Sản phẩm nổi bật</h2><p class="section-subtitle">Một số gợi ý để bạn bắt đầu khám phá KPC Shop.</p></div><button class="text-link" data-action="go-view" data-view="products">Tất cả sản phẩm →</button></div><div class="product-grid">${featured.map(productCard).join('')}</div></section>
  <section class="section"><div class="section-heading"><div><span class="section-kicker">Kiến thức hữu ích</span><h2>Tin công nghệ mới</h2><p class="section-subtitle">Gợi ý nhanh giúp bạn chọn và sử dụng thiết bị hiệu quả.</p></div><button class="text-link" data-action="go-view" data-view="news">Đọc tất cả →</button></div><div class="news-grid">${ARTICLES.map(articleCard).join('')}</div></section>
  <section class="newsletter-strip"><div><h3>Nhận tin mới từ KPC</h3><p>Cập nhật sản phẩm, hướng dẫn và chương trình ưu đãi.</p></div><form class="newsletter-form" id="homeNewsletterForm"><input type="email" placeholder="Nhập địa chỉ email" required aria-label="Email đăng ký"><button type="submit">Đăng ký nhận tin</button></form></section>`;
}
function renderProducts(){
  let rows=PRODUCTS.filter(p=>(activeCategory==='Tất cả'||p.category===activeCategory)&&(`${p.name} ${p.category} ${p.specs.join(' ')}`).toLowerCase().includes(searchQuery.toLowerCase()));
  if(sortBy==='price-asc')rows.sort((a,b)=>a.price-b.price);else if(sortBy==='price-desc')rows.sort((a,b)=>b.price-a.price);else if(sortBy==='name')rows.sort((a,b)=>a.name.localeCompare(b.name,'vi'));
  const cats=['Tất cả',...CATEGORIES.map(c=>c.name)];
  return `<div class="page-title-bar"><div><div class="breadcrumb">Trang chủ / Sản phẩm${activeCategory!=='Tất cả'?' / '+esc(activeCategory):''}</div><h1>${activeCategory==='Tất cả'?'Tất cả sản phẩm':esc(activeCategory)}</h1><p>Tìm thấy ${rows.length} sản phẩm trong danh mục KPC Shop.</p></div><button class="btn btn-outline" data-action="go-view" data-view="home">← Về trang chủ</button></div>
    <div class="filters-bar"><div class="filter-chips">${cats.map(c=>`<button class="filter-chip ${activeCategory===c?'active':''}" data-action="filter-category" data-category="${esc(c)}">${esc(c)}</button>`).join('')}</div><select class="sort-select" id="sortSelect" aria-label="Sắp xếp sản phẩm"><option value="featured" ${sortBy==='featured'?'selected':''}>Sắp xếp: Nổi bật</option><option value="price-asc" ${sortBy==='price-asc'?'selected':''}>Giá: Thấp đến cao</option><option value="price-desc" ${sortBy==='price-desc'?'selected':''}>Giá: Cao đến thấp</option><option value="name" ${sortBy==='name'?'selected':''}>Tên sản phẩm</option></select></div>
    ${rows.length?`<div class="product-grid">${rows.map(productCard).join('')}</div>`:`<div class="empty-state"><strong>Không tìm thấy sản phẩm</strong>Hãy thử từ khóa khác hoặc chọn một danh mục khác.<br><button class="btn btn-primary" style="margin-top:14px" data-action="clear-search">Xem tất cả sản phẩm</button></div>`}`;
}
function renderDetail(p){
  if(!p)return `<div class="empty-state"><strong>Không tìm thấy sản phẩm</strong><button class="btn btn-primary" data-action="go-view" data-view="products">Quay lại sản phẩm</button></div>`;
  const off=Math.round((1-p.price/p.oldPrice)*100);
  return `<div class="breadcrumb">Trang chủ / ${esc(p.category)} / ${esc(p.name)}</div><section class="detail-layout"><div class="detail-image-wrap"><img src="${esc(p.image)}" alt="${esc(p.name)}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="product-fallback">${p.icon}</span></div><div class="detail-info"><span class="product-badge sale">${esc(p.badge)}</span><h1>${esc(p.name)}</h1><div class="detail-subtitle">Mã sản phẩm: KPC-${String(p.id).padStart(4,'0')} &nbsp; · &nbsp; <b style="color:#e7a325">★★★★★</b> 4.8/5 (đánh giá minh họa)</div><div class="detail-price">${money(p.price)}</div><span class="detail-old-price">Giá tham khảo: ${money(p.oldPrice)} · Tiết kiệm ${off}%</span><p>${esc(p.description)}</p><div class="stock-note">✓ Sản phẩm mẫu · Sẵn sàng thêm vào giỏ hàng</div><div class="detail-benefits"><div>✓ Thông tin và thông số được trình bày rõ ràng</div><div>✓ Có thể lưu giỏ hàng trong trình duyệt này</div><div>✓ Giá và ưu đãi là dữ liệu minh họa cho bài tập</div></div><div class="detail-actions"><button class="btn btn-primary" data-action="add-cart" data-id="${p.id}">🛒 Thêm vào giỏ hàng</button><button class="btn btn-outline" data-action="buy-now" data-id="${p.id}">Mua ngay</button><button class="btn btn-outline" data-action="go-view" data-view="products">← Quay lại</button></div><table class="spec-table"><tbody>${Object.entries(p.parameters).map(([key,value])=>`<tr><td>${esc(key)}</td><td><strong>${esc(value)}</strong></td></tr>`).join('')}</tbody></table></div></section><section class="section"><div class="section-heading"><div><span class="section-kicker">Có thể bạn quan tâm</span><h2>Sản phẩm cùng danh mục</h2></div></div><div class="product-grid">${PRODUCTS.filter(item=>item.category===p.category&&item.id!==p.id).slice(0,4).map(productCard).join('')}</div></section>`;
}
function articleCard(article){return `<article class="news-card"><div class="news-art">${article.icon}</div><div class="news-copy"><span class="news-date">${esc(article.date)} · ${esc(article.category)}</span><h3>${esc(article.title)}</h3><p>${esc(article.excerpt)}</p><button class="text-link" data-action="read-article" data-id="${article.id}">Đọc bài viết →</button></div></article>`}
function renderNews(){return `<div class="page-title-bar"><div><div class="breadcrumb">Trang chủ / Tin công nghệ</div><h1>Tin công nghệ</h1><p>Hướng dẫn mua sắm và mẹo sử dụng thiết bị từ KPC Shop.</p></div><button class="btn btn-outline" data-action="go-view" data-view="home">← Về trang chủ</button></div><div class="page-article-grid">${ARTICLES.map(articleCard).join('')}</div>`}
function renderStores(){return `<div class="page-title-bar"><div><div class="breadcrumb">Trang chủ / Hệ thống cửa hàng</div><h1>Hệ thống cửa hàng KPC</h1><p>Thông tin liên hệ minh họa cho website mẫu. Chưa phải địa chỉ cửa hàng đang hoạt động.</p></div><button class="btn btn-outline" data-action="go-view" data-view="home">← Về trang chủ</button></div><div class="notice">Lưu ý: các thông tin cửa hàng dưới đây chỉ là dữ liệu mẫu phục vụ trình diễn giao diện, không đại diện cho địa chỉ kinh doanh thực tế.</div><div class="store-grid"><article class="store-card"><div class="store-icon">📍</div><h3>KPC Đà Nẵng</h3><p>Địa chỉ: 123 Nguyễn Văn Linh, Đà Nẵng (địa chỉ minh họa)</p><p>Thời gian: 08:00 – 22:00</p><p>Hotline: 1800 6868</p><button class="btn btn-outline" data-action="contact">Liên hệ cửa hàng</button></article><article class="store-card"><div class="store-icon">📍</div><h3>KPC Hà Nội</h3><p>Địa chỉ: 88 Cầu Giấy, Hà Nội (địa chỉ minh họa)</p><p>Thời gian: 08:00 – 22:00</p><p>Hotline: 1800 6868</p><button class="btn btn-outline" data-action="contact">Liên hệ cửa hàng</button></article><article class="store-card"><div class="store-icon">📍</div><h3>KPC TP. Hồ Chí Minh</h3><p>Địa chỉ: 56 Nguyễn Thị Minh Khai (địa chỉ minh họa)</p><p>Thời gian: 08:00 – 22:00</p><p>Hotline: 1800 6868</p><button class="btn btn-outline" data-action="contact">Liên hệ cửa hàng</button></article></div>`}

function getProductSeo(){return loadJSON('kpc_product_seo',{})}
function getArticleSeo(){return loadJSON('kpc_article_seo',{})}
function getSystemSeo(){return {...DEFAULT_SYSTEM_SEO,...loadJSON('kpc_system_seo',{})}}
function getFacebookConfig(){return {...DEFAULT_FACEBOOK,...loadJSON('kpc_facebook_config',{})}}
function renderAdmin(){
  const tabs=[['overview','▦','Tổng quan'],['product-seo','⌕','SEO sản phẩm'],['article-seo','▤','SEO bài viết'],['system-seo','⚙','Tối ưu SEO hệ thống'],['facebook','f','Cấu hình Facebook']];
  return `<div class="page-title-bar"><div><div class="breadcrumb">KPC Shop / Quản trị hệ thống</div><h1>Trung tâm quản trị</h1><p>Quản lý SEO và tích hợp mạng xã hội cho website KPC.</p></div><span class="status-pill">● Chế độ demo</span></div>
  <div class="admin-shell"><aside class="admin-sidebar"><div class="admin-identity"><div class="admin-avatar">K</div><div><strong>KPC Administrator</strong><small>Quản trị viên · Bản thử nghiệm</small></div></div><div class="admin-side-nav"><div class="admin-side-label">Bảng điều khiển</div>${tabs.map(([id,icon,label])=>`<button class="admin-side-btn ${adminTab===id?'active':''}" data-action="admin-tab" data-tab="${id}"><span>${icon}</span>${label}</button>`).join('')}</div></aside><section class="admin-content">${adminTab==='overview'?renderAdminOverview():adminTab==='product-seo'?renderProductSeo():adminTab==='article-seo'?renderArticleSeo():adminTab==='system-seo'?renderSystemSeo():renderFacebookConfig()}</section></div>`;
}
function renderAdminOverview(){
  const productSeo=getProductSeo(),articleSeo=getArticleSeo(),sys=getSystemSeo(),fb=getFacebookConfig();
  return `<div class="admin-heading"><div><span class="admin-label">Dashboard</span><h1>Tổng quan hệ thống</h1><p>Xem nhanh trạng thái cấu hình và truy cập các chức năng quản trị.</p></div></div><div class="admin-stats"><div class="stat-card"><small>Sản phẩm mẫu</small><strong>20</strong><span>✓ 5 danh mục</span></div><div class="stat-card"><small>Bài viết mẫu</small><strong>03</strong><span>✓ Có thể cấu hình SEO</span></div><div class="stat-card"><small>Cấu hình đã lưu</small><strong>${Object.keys(productSeo).length+Object.keys(articleSeo).length+(localStorage.getItem('kpc_system_seo')?'1':'0')+(localStorage.getItem('kpc_facebook_config')?'1':'0')}</strong><span>✓ Lưu trong trình duyệt</span></div></div><div class="admin-panel"><div class="panel-heading"><div><h2>Truy cập nhanh</h2><p>Chọn chức năng cần cấu hình trong phần quản trị.</p></div></div><div class="article-admin-list"><div class="article-admin-item"><div><strong>SEO sản phẩm</strong><small>Tùy chỉnh tiêu đề SEO, meta description, URL và từ khóa từng sản phẩm.</small></div><button data-action="admin-tab" data-tab="product-seo">Mở cấu hình →</button></div><div class="article-admin-item"><div><strong>SEO bài viết</strong><small>Thiết lập metadata cho các bài tin công nghệ.</small></div><button data-action="admin-tab" data-tab="article-seo">Mở cấu hình →</button></div><div class="article-admin-item"><div><strong>Tối ưu SEO hệ thống</strong><small>Quản lý mô tả trang, robots, sitemap, schema và lazy loading.</small></div><button data-action="admin-tab" data-tab="system-seo">Mở cấu hình →</button></div><div class="article-admin-item"><div><strong>Facebook & mạng xã hội</strong><small>Bật tắt mô phỏng Page Plugin, Messenger, Pixel và Open Graph.</small></div><button data-action="admin-tab" data-tab="facebook">Mở cấu hình →</button></div></div></div><div class="notice">Đây là khu vực quản trị phía giao diện. Dữ liệu lưu bằng localStorage trên trình duyệt hiện tại; khi triển khai thật cần backend, phân quyền quản trị và cấu hình API/SDK tương ứng.</div><div class="admin-panel"><div class="panel-heading"><div><h2>Trạng thái một số cấu hình</h2><p>Trạng thái đang dùng trên trình duyệt này.</p></div></div><div class="switch-list"><div class="switch-row"><div><strong>Robots</strong><p>${esc(sys.robots)}</p></div><span class="status-pill">Đã cấu hình</span></div><div class="switch-row"><div><strong>Facebook Page Plugin</strong><p>Hiện ${fb.pagePlugin?'đang bật':'đang tắt'} trong thiết lập.</p></div><span class="status-pill">${fb.pagePlugin?'Bật':'Tắt'}</span></div><div class="switch-row"><div><strong>Sitemap XML</strong><p>Trạng thái tạo sitemap trong cấu hình demo.</p></div><span class="status-pill">${sys.sitemap?'Bật':'Tắt'}</span></div></div></div>`;
}
function renderProductSeo(){
  const product=getProduct(seoProductId)||PRODUCTS[0],all=getProductSeo(),cfg=all[product.id]||{};
  const title=cfg.title??`${product.name} chính hãng, giá tốt | KPC Shop`,description=cfg.description??product.short,slug=cfg.slug??`/${product.category.toLowerCase().replaceAll(' ','-')}/${product.name.toLowerCase().replaceAll(' ','-').replace(/[^a-z0-9-]/g,'')}`,keywords=cfg.keywords??`${product.name}, ${product.category}, KPC Shop`;
  return `<div class="admin-heading"><div><span class="admin-label">SEO / Product</span><h1>Cấu hình SEO sản phẩm</h1><p>Tối ưu thông tin tìm kiếm cho từng sản phẩm trong danh mục.</p></div></div><div class="admin-panel"><form id="productSeoForm"><div class="field full"><label for="seoProductSelect">Chọn sản phẩm cần cấu hình</label><select id="seoProductSelect" name="productId">${PRODUCTS.map(p=>`<option value="${p.id}" ${p.id===product.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select></div><div class="admin-form-grid" style="margin-top:15px"><div class="field full"><label for="productSeoTitle">SEO Title <span class="char-count" id="productTitleCount">${title.length}/60</span></label><input id="productSeoTitle" name="title" maxlength="100" value="${esc(title)}" required><span class="field-hint">Nên khoảng 50–60 ký tự, có tên sản phẩm và thương hiệu.</span></div><div class="field full"><label for="productSeoDesc">Meta description <span class="char-count" id="productDescCount">${description.length}/160</span></label><textarea id="productSeoDesc" name="description" maxlength="250" required>${esc(description)}</textarea><span class="field-hint">Mô tả ngắn gọn, hữu ích, khoảng 140–160 ký tự.</span></div><div class="field"><label for="productSeoSlug">Đường dẫn (slug)</label><input id="productSeoSlug" name="slug" value="${esc(slug)}" required><span class="field-hint">Đường dẫn dễ đọc, không dấu và có dấu gạch ngang.</span></div><div class="field"><label for="productSeoKeywords">Từ khóa mục tiêu</label><input id="productSeoKeywords" name="keywords" value="${esc(keywords)}"><span class="field-hint">Dùng để ghi nhận nội bộ; không thay thế nội dung hữu ích.</span></div></div><div class="seo-score" style="margin-top:18px"><div class="score-number" id="productSeoScore">${seoScore(title,description,slug)}</div><div><strong>Điểm kiểm tra cơ bản</strong><span>Điểm tham khảo theo độ dài title, description và slug; không phải điểm Google.</span></div></div><div class="google-preview"><div class="preview-url">kpcshop.vn<span id="previewSlug">${esc(slug)}</span></div><h3 id="previewTitle">${esc(title)}</h3><p id="previewDesc">${esc(description)}</p></div><div class="seo-checks"><div class="seo-check"><b>✓</b> Title có thể chỉnh sửa</div><div class="seo-check"><b>✓</b> Meta description đã có</div><div class="seo-check"><b>✓</b> Slug thân thiện</div><div class="seo-check"><b>i</b> Kết quả tìm kiếm có thể khác bản xem trước</div></div><div class="form-actions"><button class="btn btn-outline" type="button" data-action="reset-product-seo" data-id="${product.id}">Khôi phục mặc định</button><button class="btn btn-primary" type="submit">Lưu SEO sản phẩm</button></div></form></div>`;
}
function seoScore(title,description,slug){let score=0;if(title.length>=30&&title.length<=60)score+=35;else if(title.length>0)score+=20;if(description.length>=100&&description.length<=160)score+=35;else if(description.length>0)score+=20;if(slug.startsWith('/')&&!/[A-ZÀ-Ỹ\s]/.test(slug))score+=20;if(title.toLowerCase().includes('kpc'))score+=10;return score}
function renderArticleSeo(){
  const article=ARTICLES.find(a=>a.id===Number(seoArticleId))||ARTICLES[0],all=getArticleSeo(),cfg=all[article.id]||{};
  const title=cfg.title??`${article.title} | KPC Shop`,description=cfg.description??article.excerpt,slug=cfg.slug??`/tin-cong-nghe/${article.slug}`,keywords=cfg.keywords??`${article.category}, KPC Shop, ${article.title}`;
  return `<div class="admin-heading"><div><span class="admin-label">SEO / Content</span><h1>Cấu hình SEO bài viết</h1><p>Thiết lập metadata cho nội dung tin tức và hướng dẫn.</p></div></div><div class="admin-panel"><form id="articleSeoForm"><div class="field full"><label for="seoArticleSelect">Chọn bài viết</label><select id="seoArticleSelect" name="articleId">${ARTICLES.map(a=>`<option value="${a.id}" ${a.id===article.id?'selected':''}>${esc(a.title)}</option>`).join('')}</select></div><div class="admin-form-grid" style="margin-top:15px"><div class="field full"><label for="articleSeoTitle">SEO Title <span class="char-count" id="articleTitleCount">${title.length}/60</span></label><input id="articleSeoTitle" name="title" maxlength="100" value="${esc(title)}" required></div><div class="field full"><label for="articleSeoDesc">Meta description <span class="char-count" id="articleDescCount">${description.length}/160</span></label><textarea id="articleSeoDesc" name="description" maxlength="250" required>${esc(description)}</textarea></div><div class="field"><label for="articleSeoSlug">Đường dẫn bài viết</label><input id="articleSeoSlug" name="slug" value="${esc(slug)}" required></div><div class="field"><label for="articleSeoKeywords">Từ khóa nội bộ</label><input id="articleSeoKeywords" name="keywords" value="${esc(keywords)}"></div></div><div class="google-preview" style="margin-top:20px"><div class="preview-url">kpcshop.vn<span id="articlePreviewSlug">${esc(slug)}</span></div><h3 id="articlePreviewTitle">${esc(title)}</h3><p id="articlePreviewDesc">${esc(description)}</p></div><div class="form-actions"><button class="btn btn-outline" type="button" data-action="reset-article-seo" data-id="${article.id}">Khôi phục mặc định</button><button class="btn btn-primary" type="submit">Lưu SEO bài viết</button></div></form></div><div class="admin-panel"><div class="panel-heading"><div><h2>Danh sách bài viết</h2><p>Chọn một bài để mở cấu hình SEO riêng.</p></div></div><div class="article-admin-list">${ARTICLES.map(a=>`<div class="article-admin-item"><div><strong>${esc(a.title)}</strong><small>${esc(a.date)} · ${esc(a.category)}</small></div><button data-action="select-article" data-id="${a.id}">Chỉnh SEO</button></div>`).join('')}</div></div>`;
}
function renderSystemSeo(){
  const s=getSystemSeo();
  return `<div class="admin-heading"><div><span class="admin-label">SEO / System</span><h1>Tối ưu SEO hệ thống</h1><p>Cấu hình thông tin chung, khả năng lập chỉ mục và các tối ưu kỹ thuật.</p></div></div><div class="admin-panel"><form id="systemSeoForm"><div class="admin-form-grid"><div class="field full"><label for="systemTitle">Tiêu đề website <span class="char-count" id="systemTitleCount">${s.siteTitle.length}/60</span></label><input id="systemTitle" name="siteTitle" maxlength="100" value="${esc(s.siteTitle)}" required></div><div class="field full"><label for="systemDescription">Mô tả website <span class="char-count" id="systemDescCount">${s.siteDescription.length}/160</span></label><textarea id="systemDescription" name="siteDescription" maxlength="250" required>${esc(s.siteDescription)}</textarea></div><div class="field full"><label for="canonicalUrl">Canonical URL</label><input id="canonicalUrl" name="canonical" type="url" value="${esc(s.canonical)}" required><span class="field-hint">Đặt URL chính thức khi website đã được triển khai trên hosting.</span></div><div class="field"><label for="robotsPolicy">Robots meta</label><select id="robotsPolicy" name="robots"><option value="index,follow" ${s.robots==='index,follow'?'selected':''}>index, follow</option><option value="noindex,nofollow" ${s.robots==='noindex,nofollow'?'selected':''}>noindex, nofollow</option><option value="noindex,follow" ${s.robots==='noindex,follow'?'selected':''}>noindex, follow</option></select></div><div class="field"><label>Thẻ meta hiện tại</label><input value="${esc(s.robots)}" disabled></div></div><div class="panel-heading" style="margin-top:25px;margin-bottom:7px"><div><h2>Các tính năng tối ưu</h2><p>Bật/tắt cờ cấu hình trong bản demo.</p></div></div><div class="switch-list">${switchRow('sitemap','Tạo sitemap XML','Đánh dấu cần có sitemap.xml khi triển khai.',s.sitemap)}${switchRow('organizationSchema','Schema doanh nghiệp','Bổ sung dữ liệu cấu trúc cho thông tin thương hiệu.',s.organizationSchema)}${switchRow('lazyLoad','Lazy loading hình ảnh','Tải hình ảnh khi gần tới vùng hiển thị.',s.lazyLoad)}${switchRow('minify','Nén CSS và JavaScript','Cờ cấu hình; cần build/hosting xử lý khi triển khai thật.',s.minify)}</div><div class="notice" style="margin-top:17px">Lưu ý kỹ thuật: website tĩnh có thể xem trước metadata ở trình duyệt, nhưng sitemap, canonical đồng bộ trên mọi trang, schema thực tế và nén tài nguyên cần được triển khai bổ sung khi đưa website lên hosting.</div><div class="form-actions"><button class="btn btn-outline" type="button" data-action="reset-system-seo">Khôi phục mặc định</button><button class="btn btn-primary" type="submit">Lưu cấu hình hệ thống</button></div></form></div><div class="admin-panel"><div class="panel-heading"><div><h2>Xem trước metadata</h2><p>Thông tin tham khảo cho trang chủ.</p></div></div><div class="google-preview"><div class="preview-url">${esc(s.canonical)}</div><h3>${esc(s.siteTitle)}</h3><p>${esc(s.siteDescription)}</p></div></div>`;
}
function switchRow(name,title,desc,checked){return `<div class="switch-row"><div><strong>${esc(title)}</strong><p>${esc(desc)}</p></div><label class="switch"><input type="checkbox" name="${esc(name)}" ${checked?'checked':''}><span></span></label></div>`}
function renderFacebookConfig(){
  const f=getFacebookConfig();
  return `<div class="admin-heading"><div><span class="admin-label">Integrations / Facebook</span><h1>Cấu hình Facebook</h1><p>Thiết lập các tính năng chia sẻ và kết nối mạng xã hội cho website.</p></div></div><div class="notice">Bản demo chỉ lưu tùy chọn và mã cấu hình trong trình duyệt. Muốn hiển thị plugin Facebook/Messenger hoặc gửi sự kiện Pixel thật, bạn cần Page ID, Pixel ID, SDK chính thức, tên miền hợp lệ và tuân thủ chính sách quyền riêng tư.</div><div class="admin-panel"><form id="facebookForm"><div class="panel-heading"><div><h2>Tính năng Facebook</h2><p>Bật hoặc tắt từng tích hợp theo nhu cầu.</p></div><span class="status-pill">Có thể cấu hình</span></div><div class="switch-list">${switchRow('pagePlugin','Facebook Page Plugin','Khu vực hiển thị trang Facebook của cửa hàng.',f.pagePlugin)}${switchRow('messenger','Facebook Messenger','Nút liên hệ nhanh qua Messenger.',f.messenger)}${switchRow('pixel','Meta Pixel','Theo dõi sự kiện sau khi tích hợp mã Pixel hợp lệ.',f.pixel)}${switchRow('openGraph','Open Graph / Chia sẻ liên kết','Thiết lập ảnh, tiêu đề và mô tả khi chia sẻ website.',f.openGraph)}${switchRow('comments','Facebook Comments','Cho phép khu vực bình luận qua Facebook khi triển khai SDK.',f.comments)}</div><div class="admin-form-grid" style="margin-top:20px"><div class="field full"><label for="facebookPageUrl">URL trang Facebook</label><input id="facebookPageUrl" type="url" name="pageUrl" value="${esc(f.pageUrl)}" placeholder="https://www.facebook.com/ten-trang"><span class="field-hint">Nhập đường dẫn trang Facebook chính thức của cửa hàng.</span></div><div class="field"><label for="facebookPixelId">Meta Pixel ID</label><input id="facebookPixelId" name="pixelId" value="${esc(f.pixelId)}" placeholder="Ví dụ: 123456789012345"></div><div class="field"><label for="facebookAppId">Facebook App ID</label><input id="facebookAppId" name="appId" value="${esc(f.appId)}" placeholder="App ID nếu sử dụng SDK"></div></div><div class="form-actions"><button class="btn btn-outline" type="button" data-action="reset-facebook">Khôi phục mặc định</button><button class="btn btn-primary" type="submit">Lưu cấu hình Facebook</button></div></form></div><div class="admin-panel"><div class="panel-heading"><div><h2>Trạng thái tích hợp</h2><p>Tóm tắt cờ cấu hình đang lưu.</p></div></div><div class="seo-checks">${[['Page Plugin',f.pagePlugin],['Messenger',f.messenger],['Meta Pixel',f.pixel],['Open Graph',f.openGraph],['Comments',f.comments]].map(([name,on])=>`<div class="seo-check"><b>${on?'✓':'–'}</b> ${name}: ${on?'đang bật':'đang tắt'}</div>`).join('')}</div></div>`;
}

function addToCart(id,open=false){
  const p=getProduct(id);if(!p)return;
  const existing=cart.find(item=>item.id===p.id);if(existing)existing.qty+=1;else cart.push({id:p.id,qty:1});
  saveJSON('kpc_cart',cart);updateHeader();toast(`Đã thêm “${p.name}” vào giỏ hàng`);if(open)showCart();
}
function showCart(){
  const modal=document.getElementById('modalRoot');
  if(!cart.length){modal.innerHTML=`<div class="modal-backdrop" data-action="cart-backdrop"><section class="cart-dialog"><div class="cart-header"><h2>Giỏ hàng của bạn</h2><button class="icon-btn" data-action="close-cart" aria-label="Đóng">×</button></div><div class="cart-items"><div class="cart-empty"><div class="empty-icon">🛒</div><strong>Giỏ hàng đang trống</strong><p>Thêm sản phẩm yêu thích để xem tại đây.</p><button class="btn btn-primary" data-action="close-cart">Tiếp tục mua sắm</button></div></div></section></div>`;return;}
  modal.innerHTML=`<div class="modal-backdrop" data-action="cart-backdrop"><section class="cart-dialog" role="dialog" aria-modal="true" aria-label="Giỏ hàng"><div class="cart-header"><div><h2>Giỏ hàng của bạn</h2><span style="font-size:10px;color:var(--muted)">${getCartCount()} sản phẩm</span></div><button class="icon-btn" data-action="close-cart" aria-label="Đóng">×</button></div><div class="cart-items">${cart.map(item=>{const p=getProduct(item.id);if(!p)return '';return `<div class="cart-item"><div class="cart-item-image"><img src="${esc(p.image)}" alt="" onerror="this.style.display='none';this.parentElement.innerHTML='${p.icon}'"></div><div><h3>${esc(p.name)}</h3><div class="cart-item-price">${money(p.price)}</div><div class="qty-controls"><button data-action="cart-qty" data-id="${p.id}" data-delta="-1" aria-label="Giảm số lượng">−</button><span>${item.qty}</span><button data-action="cart-qty" data-id="${p.id}" data-delta="1" aria-label="Tăng số lượng">+</button></div></div><button class="remove-item" data-action="remove-cart" data-id="${p.id}" aria-label="Xóa sản phẩm">×</button></div>`}).join('')}</div><div class="cart-footer"><div class="cart-total"><span>Tạm tính</span><strong>${money(getCartTotal())}</strong></div><button class="btn btn-primary" data-action="checkout">Tiến hành đặt hàng →</button><p style="font-size:9px;color:var(--muted);text-align:center;margin:10px 0 0">Đơn hàng chỉ mô phỏng, chưa có thanh toán thật.</p></div></section></div>`;
}
function closeCart(){document.getElementById('modalRoot').innerHTML='';if(currentView==='news'){setPageMeta('Tin công nghệ | KPC Shop','Tin công nghệ, hướng dẫn mua sắm và mẹo sử dụng thiết bị từ KPC Shop.',getSystemSeo().robots)}}
function changeCartQty(id,delta){const item=cart.find(row=>row.id===Number(id));if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(row=>row.id!==Number(id));saveJSON('kpc_cart',cart);updateHeader();showCart()}
function renderArticleDetail(id){const a=ARTICLES.find(item=>item.id===Number(id));if(!a)return;const seo=getArticleSeo()[a.id]||{};const systemSeo=getSystemSeo();setPageMeta(seo.title||`${a.title} | KPC Shop`,seo.description||a.excerpt,systemSeo.robots);const modal=document.getElementById('modalRoot');modal.innerHTML=`<div class="modal-backdrop" data-action="article-backdrop"><section class="cart-dialog" style="width:min(650px,100%)" role="dialog" aria-modal="true"><div class="cart-header"><h2>${esc(a.category)}</h2><button class="icon-btn" data-action="close-cart">×</button></div><div class="cart-items" style="padding:25px"><div style="font-size:48px">${a.icon}</div><span class="news-date">${esc(a.date)} · KPC Shop</span><h1 style="font-size:25px;line-height:1.4;margin:12px 0">${esc(a.title)}</h1><p style="color:#586274">${esc(a.excerpt)}</p><p>Để chọn thiết bị phù hợp, hãy xác định nhu cầu thực tế, ngân sách, khả năng nâng cấp và chính sách bảo hành trước khi quyết định. So sánh thông số quan trọng thay vì chỉ nhìn vào khuyến mãi.</p><p>Đây là bài viết mẫu để minh họa tính năng tin tức và cấu hình SEO trong trang quản trị KPC Shop.</p><button class="btn btn-primary" data-action="close-cart">Đã hiểu</button></div></section></div>`}

// Xử lý tương tác tập trung bằng event delegation để các phần được render động vẫn hoạt động.
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-action]');if(!button)return;
  const action=button.dataset.action;
  if(action==='toggle-category-menu'){event.preventDefault();const isOpen=button.getAttribute('aria-expanded')==='true';if(isOpen)closeCategoryMenu();else openCategoryMenu();return}
  if(action==='close-category-menu'){closeCategoryMenu();return}
  if(action==='mega-select'){event.preventDefault();closeCategoryMenu();activeCategory=button.dataset.category||'Tất cả';searchQuery='';if(document.getElementById('searchInput'))document.getElementById('searchInput').value='';currentView='products';render();window.scrollTo({top:0,behavior:'smooth'});return}
  if(action==='go-view'){closeCategoryMenu();event.preventDefault();activeCategory=button.dataset.category||'Tất cả';searchQuery='';if(document.getElementById('searchInput'))document.getElementById('searchInput').value='';goView(button.dataset.view||'home',button.dataset.category);return}
  if(action==='filter-category'){activeCategory=button.dataset.category;currentView='products';render();return}
  if(action==='detail'){currentProductId=Number(button.dataset.id);currentView='detail';render();window.scrollTo({top:0,behavior:'smooth'});return}
  if(action==='add-cart'){addToCart(button.dataset.id);return}
  if(action==='buy-now'){addToCart(button.dataset.id,true);return}
  if(action==='show-cart'){showCart();return}
  if(action==='close-cart'){closeCart();return}
  if(action==='cart-backdrop'||action==='article-backdrop'){if(event.target.classList.contains('modal-backdrop'))closeCart();return}
  if(action==='cart-qty'){changeCartQty(button.dataset.id,Number(button.dataset.delta));return}
  if(action==='remove-cart'){cart=cart.filter(item=>item.id!==Number(button.dataset.id));saveJSON('kpc_cart',cart);updateHeader();showCart();toast('Đã xóa sản phẩm khỏi giỏ hàng');return}
  if(action==='checkout'){cart=[];saveJSON('kpc_cart',cart);updateHeader();closeCart();toast('Đặt hàng demo thành công! Chưa có thanh toán thật.');return}
  if(action==='clear-search'){searchQuery='';activeCategory='Tất cả';render();return}
  if(action==='admin-tab'){adminTab=button.dataset.tab;currentView='admin';render();return}
  if(action==='read-article'){renderArticleDetail(button.dataset.id);return}
  if(action==='select-article'){seoArticleId=Number(button.dataset.id);adminTab='article-seo';currentView='admin';render();return}
  if(action==='reset-product-seo'){const all=getProductSeo();delete all[Number(button.dataset.id)];saveJSON('kpc_product_seo',all);seoProductId=Number(button.dataset.id);render();toast('Đã khôi phục SEO sản phẩm mặc định');return}
  if(action==='reset-article-seo'){const all=getArticleSeo();delete all[Number(button.dataset.id)];saveJSON('kpc_article_seo',all);seoArticleId=Number(button.dataset.id);render();toast('Đã khôi phục SEO bài viết mặc định');return}
  if(action==='reset-system-seo'){localStorage.removeItem('kpc_system_seo');render();toast('Đã khôi phục cấu hình SEO hệ thống');return}
  if(action==='reset-facebook'){localStorage.removeItem('kpc_facebook_config');render();toast('Đã khôi phục cấu hình Facebook mặc định');return}
  if(action==='contact'){toast('Đây là cửa hàng minh họa. Bạn có thể đổi thông tin trong mã nguồn.');return}
});

document.addEventListener('pointerover',event=>{
  const item=event.target.closest('.mega-category-item');
  if(item&&document.getElementById('categoryMegaMenu')&&!document.getElementById('categoryMegaMenu').classList.contains('hidden'))setMegaCategory(item.dataset.category);
});

document.addEventListener('change',event=>{
  if(event.target.id==='sortSelect'){sortBy=event.target.value;render();return}
  if(event.target.id==='seoProductSelect'){seoProductId=Number(event.target.value);render();return}
  if(event.target.id==='seoArticleSelect'){seoArticleId=Number(event.target.value);render();return}
});

document.addEventListener('submit',event=>{
  const form=event.target;
  if(form.id==='searchForm'){closeCategoryMenu();event.preventDefault();searchQuery=document.getElementById('searchInput').value.trim();activeCategory='Tất cả';currentView='products';render();return}
  if(form.id==='newsletterForm'||form.id==='homeNewsletterForm'){event.preventDefault();const input=form.querySelector('input[type="email"]');if(input&&input.value.trim()){toast('Đăng ký nhận tin thành công (mô phỏng).');form.reset()}return}
  if(form.id==='productSeoForm'){
    event.preventDefault();const data=new FormData(form),id=Number(data.get('productId'));const all=getProductSeo();all[id]={title:String(data.get('title')).trim(),description:String(data.get('description')).trim(),slug:String(data.get('slug')).trim(),keywords:String(data.get('keywords')).trim()};saveJSON('kpc_product_seo',all);seoProductId=id;render();toast('Đã lưu cấu hình SEO sản phẩm');return;
  }
  if(form.id==='articleSeoForm'){
    event.preventDefault();const data=new FormData(form),id=Number(data.get('articleId'));const all=getArticleSeo();all[id]={title:String(data.get('title')).trim(),description:String(data.get('description')).trim(),slug:String(data.get('slug')).trim(),keywords:String(data.get('keywords')).trim()};saveJSON('kpc_article_seo',all);seoArticleId=id;render();toast('Đã lưu cấu hình SEO bài viết');return;
  }
  if(form.id==='systemSeoForm'){
    event.preventDefault();const data=new FormData(form);const cfg={siteTitle:String(data.get('siteTitle')).trim(),siteDescription:String(data.get('siteDescription')).trim(),canonical:String(data.get('canonical')).trim(),robots:String(data.get('robots')),sitemap:data.has('sitemap'),organizationSchema:data.has('organizationSchema'),lazyLoad:data.has('lazyLoad'),minify:data.has('minify')};saveJSON('kpc_system_seo',cfg);const canonical=document.querySelector('link[rel="canonical"]');if(canonical)canonical.href=cfg.canonical;setPageMeta(cfg.siteTitle,cfg.siteDescription,cfg.robots);render();toast('Đã lưu cấu hình tối ưu SEO hệ thống');return;
  }
  if(form.id==='facebookForm'){
    event.preventDefault();const data=new FormData(form);const cfg={pagePlugin:data.has('pagePlugin'),messenger:data.has('messenger'),pixel:data.has('pixel'),openGraph:data.has('openGraph'),comments:data.has('comments'),pageUrl:String(data.get('pageUrl')).trim(),pixelId:String(data.get('pixelId')).trim(),appId:String(data.get('appId')).trim()};saveJSON('kpc_facebook_config',cfg);render();toast('Đã lưu cấu hình Facebook');return;
  }
});

document.addEventListener('input',event=>{
  const target=event.target;
  const updates=[['productSeoTitle','productTitleCount'],['productSeoDesc','productDescCount'],['articleSeoTitle','articleTitleCount'],['articleSeoDesc','articleDescCount'],['systemTitle','systemTitleCount'],['systemDescription','systemDescCount']];
  for(const [inputId,countId] of updates){if(target.id===inputId){const count=document.getElementById(countId);if(count){const max=inputId.toLowerCase().includes('desc')||inputId==='systemDescription'?160:60;count.textContent=`${target.value.length}/${max}`;if(inputId==='productSeoTitle'||inputId==='productSeoDesc'){const title=document.getElementById('productSeoTitle')?.value||'';const desc=document.getElementById('productSeoDesc')?.value||'';const slug=document.getElementById('productSeoSlug')?.value||'';const previewTitle=document.getElementById('previewTitle');const previewDesc=document.getElementById('previewDesc');if(previewTitle)previewTitle.textContent=title;if(previewDesc)previewDesc.textContent=desc;const score=document.getElementById('productSeoScore');if(score)score.textContent=seoScore(title,desc,slug)}if(inputId==='articleSeoTitle'||inputId==='articleSeoDesc'){const title=document.getElementById('articleSeoTitle')?.value||'';const desc=document.getElementById('articleSeoDesc')?.value||'';const previewTitle=document.getElementById('articlePreviewTitle');const previewDesc=document.getElementById('articlePreviewDesc');if(previewTitle)previewTitle.textContent=title;if(previewDesc)previewDesc.textContent=desc}}return}}
  if(target.id==='productSeoSlug'){const el=document.getElementById('previewSlug');if(el)el.textContent=target.value;const score=document.getElementById('productSeoScore');if(score)score.textContent=seoScore(document.getElementById('productSeoTitle')?.value||'',document.getElementById('productSeoDesc')?.value||'',target.value)}
  if(target.id==='articleSeoSlug'){const el=document.getElementById('articlePreviewSlug');if(el)el.textContent=target.value}
});

document.addEventListener('keydown',event=>{
  const target=event.target;
  if(target.matches('[data-action="detail"][role="button"]')&&(event.key==='Enter'||event.key===' ')){event.preventDefault();currentProductId=Number(target.dataset.id);currentView='detail';render();window.scrollTo({top:0,behavior:'smooth'})}
  if(event.key==='Escape'){closeCategoryMenu();closeCart();}
});

// Gắn canonical rỗng ban đầu; khi cấu hình hệ thống được lưu, URL sẽ được cập nhật trên trang hiện tại.
if(!document.querySelector('link[rel="canonical"]')){const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=getSystemSeo().canonical;document.head.appendChild(canonical)}
const initialSeo=getSystemSeo();setPageMeta(initialSeo.siteTitle,initialSeo.siteDescription,initialSeo.robots);
render();
