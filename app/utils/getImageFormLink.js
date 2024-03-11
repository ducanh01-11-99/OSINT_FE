import React from 'react';
import { Image } from 'antd';
import PropTypes from 'prop-types';
import danTri from '../images/avatar/dân trí.png';
import defaultImg from '../images/avatar/default.png';
import congAnNhanDan from '../images/avatar/công an nhân dân.png';
import anNinhTheGioiGiuaVaCuoiThang from '../images/avatar/an ninh thế giới giữa và cuối tháng.png';
import anNinhTG from '../images/avatar/an ninh thế giới online.png';
import anNinhThuDo from '../images/avatar/an ninh thủ đô.png';
import antv from '../images/avatar/antv.png';
import atgt from '../images/avatar/atgt.png';
import bnews from '../images/avatar/bnews.png';
import anGiang from '../images/avatar/báo an giang.png';
import BRVT from '../images/avatar/báo bà rịa-vũng tàu.png';
import binhDuong from '../images/avatar/báo bình dương.png';
import binhPhuoc from '../images/avatar/báo bình phước.png';
import bacLieu from '../images/avatar/báo bạc liêu.png';
import bacNinh from '../images/avatar/báo bắc ninh.png';
import chinhPhu from '../images/avatar/báo chính phủ.png';
import danSinh from '../images/avatar/báo dân sinh.png';
import giaoThong from '../images/avatar/báo giao thông.png';
import giaoDucHCM from '../images/avatar/báo giáo dục thành phố hồ chí minh.png';
import haTinh from '../images/avatar/báo hà tĩnh.png';
import haiDuong from '../images/avatar/báo hải dương.png';
import khanhHoa from '../images/avatar/báo khánh hòa.png';
import ngheAn from '../images/avatar/báo nghệ an.png';
import phapLuat from '../images/avatar/báo pháp luật.png';
import quangNinh from '../images/avatar/báo quảng ninh.png';
import quocTe from '../images/avatar/báo quốc tế.png';
import tinTucMienTay from '../images/avatar/báo tin tức miền tây.png';
import toQuoc from '../images/avatar/báo tổ quốc.png';
import xayDung from '../images/avatar/báo xây dựng.png';
import yenBai from '../images/avatar/báo yên bái.png';
import dienTuCongLy from '../images/avatar/báo điện tử công lý.png';
import daiDoanKet from '../images/avatar/báo đại đoàn kết.png';
import datViet from '../images/avatar/báo đất việt.png';
import dauTu from '../images/avatar/báo đầu tư.png';
import dongNai from '../images/avatar/báo đồng nai.png';
import bao24h from '../images/avatar/báo 24h.png';
import bongDaPlus from '../images/avatar/bóng đá plus.png';
import cafebiz from '../images/avatar/cafebiz.png';
import cafef from '../images/avatar/cafef.png';
import congThuong from '../images/avatar/công thương.png';
import canhSatToanCau from '../images/avatar/cảnh sát toàn cầu online.png';
import doanhNghiep from '../images/avatar/doanh nghiệp.png';
import doanhNhanVaPL from '../images/avatar/doanh nhân và pháp luật.png';
import danViet from '../images/avatar/dân việt.png';
import eva from '../images/avatar/eva.png';
import genk from '../images/avatar/genk.png';
import giaDinhVaXaHoi from '../images/avatar/gia đình và xã hội.png';
import giaoDuc from '../images/avatar/giáo dục.png';
import giaoDucVaThoiDai from '../images/avatar/giáo dục và thời đại.png';
import haNoiMoi from '../images/avatar/hà nội mới.png';
import ictNew from '../images/avatar/ictnews.png';
import infoNet from '../images/avatar/infonet.png';
import ione from '../images/avatar/ione.png';
import khoaHocVaPhatTrien from '../images/avatar/khoa học và phát triển.png';
import khoaHocVaDoiSong from '../images/avatar/khoa học và đời sống.png';
import kinhTeMoiTruong from '../images/avatar/kinh tế môi trường.png';
import kinhTeDoThi from '../images/avatar/kinh tế đô thị.png';
import kienThuc from '../images/avatar/kiến thức.png';
import kenh14 from '../images/avatar/kênh 14.png';
import laoDong from '../images/avatar/lao động.png';
import netNews from '../images/avatar/net news.png';
import ngoiSao from '../images/avatar/ngôi sao.png';
import NguoiLaoDong from '../images/avatar/người lao động.png';
import nguoiDuaTin from '../images/avatar/người đưa tin.png';
import nguoiDongHanh from '../images/avatar/người đồng hành.png';
import nhanDanDienTu from '../images/avatar/nhân dân điện tử.png';
import nhipCauDauTu from '../images/avatar/nhịp cầu đầu tư.png';
import nhipSongDoanhNghiep from '../images/avatar/nhịp sống doanh nghiệp.png';
import nongNghiep from '../images/avatar/nông nghiệp.png';
import phapLuatPlus from '../images/avatar/pháp luật plus.png';
import phapLuatHCM from '../images/avatar/pháp luật tp.hcm.png';
import phuNuOnline from '../images/avatar/phụ nữ online.png';
import phuNuToday from '../images/avatar/phụ nữ today.png';
import quanDoiNhanDan from '../images/avatar/quân đội nhân dân.png';
import saoStar from '../images/avatar/saostar.png';
import soha from '../images/avatar/soha.png';
import saigonGiaiPhong from '../images/avatar/sài gòn giải phóng.png';
import saigonDauTu from '../images/avatar/sài gòn đầu tư.png';
import sucKhoeDoiSong from '../images/avatar/sức khỏe và đời sống.png';
import techz from '../images/avatar/techz.png';
import thanhNien from '../images/avatar/thanh niên.png';
import TTXVN from '../images/avatar/thông tấn xã việt nam.png';
import thuonghieuVaCongLuan from '../images/avatar/thương hiệu và công luận.png';
import theThaoVaVanHoa from '../images/avatar/thể thao và văn hóa.png';
import theThao247 from '../images/avatar/thể thao 247.png';
import thoiBaoKinhTeSG from '../images/avatar/thời báo kinh tế sài gòn.png';
import tiin from '../images/avatar/tiin.png';
import tinMoi from '../images/avatar/tin mới.png';
import tinMoi24 from '../images/avatar/tin mới 24.png';
import tinTayNguyen from '../images/avatar/tin tây nguyên.png';
import tintucOnline from '../images/avatar/tin tức online.png';
import tintuc from '../images/avatar/tintuc.vn.png';
import tienphong from '../images/avatar/tiền phong.png';
import tuyengiao from '../images/avatar/tuyên giáo.png';
import tuoiTre from '../images/avatar/tuổi trẻ.png';
import tapChiThoiDai from '../images/avatar/tạp chí thời đại.png';
import vietnameBiz from '../images/avatar/vietnambiz.png';
import vietnamNet from '../images/avatar/vietnamnet.png';
import viettimes from '../images/avatar/viettimes.png';
import vnPlus from '../images/avatar/việt nam +.png';
import vietnamMoi from '../images/avatar/việt nam mới.png';
import vneconomy from '../images/avatar/vneconomy.png';
import vnexpress from '../images/avatar/vnexpress.png';
import vnreview from '../images/avatar/vnreview.png';
import vohRadio from '../images/avatar/voh radio.png';
import vov from '../images/avatar/vov.png';
import vtcNews from '../images/avatar/vtc news.png';
import vtvOnline from '../images/avatar/vtv online.png';
import vanNgheCA from '../images/avatar/văn nghệ công an online.png';
import webTheThao from '../images/avatar/web thể thao.png';
import webTinTuc from '../images/avatar/web tin tức.png';
import yan from '../images/avatar/yan.png';
import zing from '../images/avatar/zing.png';
import daiBieuNhanDan from '../images/avatar/đại biểu nhân dân.png';
import dangCongSan from '../images/avatar/đảng cộng sản việt nam.png';
import dauTuChungKhoan from '../images/avatar/đầu tư chứng khoán.png';
import docBao from '../images/avatar/đọc báo.png';
import doiSongPhapLuat from '../images/avatar/đời sống pháp luật.png';
import doiSongVietNam from '../images/avatar/đời sống việt nam.png';
import adelaidetu from '../images/avatar/adelaidetuanbao.png';
import aedanchu from '../images/avatar/anhemdanchu.org.png';
import baocalitoday from '../images/avatar/baocalitoday.png';
import baothethaovanhoa from '../images/avatar/báo thể thao văn hóa.png';
import baotiengdan from '../images/avatar/báo tiếng dân.png';

import buctranhvancau from '../images/avatar/buctranhvancau.png';
import cdnvqglbhk from '../images/avatar/cdnvqglbhk.org.png';
import chinhnghiavietnamconghoa from '../images/avatar/chinhnghiavietnamconghoa.png';
import congthongtindientuchinhphu from '../images/avatar/cổng thông tin điện tử chính phủ.png';
import congthongdientubocongan from '../images/avatar/cổng thông tin điện tử bộ công an.png';
import cprvn from '../images/avatar/cprvn.png';
import danchimvietonline from '../images/avatar/đàn chim việt online.png';
import danlambaovn from '../images/avatar/danlambaovn.blogspot.com.png';
import dcvOnline from '../images/avatar/dcv online.png';
import defend from '../images/avatar/defend the defenders.png';
import diendantheki from '../images/avatar/diễn đàn thế kỷ.png';
import diendantraichieu from '../images/avatar/diendantraichieu.blogspot.com.png';
import doithoaionline from '../images/avatar/doithoaionline.wordpress.com.png';
import hungviet from '../images/avatar/hưng việt.png';
import khmerskampuchea from '../images/avatar/khmers kampuchea-krom federation.png';
import nghiencuuchienluoc from '../images/avatar/nghiên cứu chiến lược.png';
import nghiencuuquocte from '../images/avatar/nghiên cứu quốc tế.png';
import nguoiviet from '../images/avatar/người việt.png';
import rfa from '../images/avatar/rfa.png';
import sbtn from '../images/avatar/sbtn.png';
import thoibao from '../images/avatar/thời báo.png';
import tienglongta from '../images/avatar/tienglongta.com.png';
import vandoanviet from '../images/avatar/vandoanviet.blogspot.com.png';
import vanviet from '../images/avatar/văn việt.png';
import vietecology from '../images/avatar/vietecology.org.png';
import vietEurope from '../images/avatar/viet-europe.png';
import vietlist from '../images/avatar/vietlist.png';
import vietnam from '../images/avatar/vietnam.ca.png';
import vietnamthoibao from '../images/avatar/vietnamthoibao.png';
import vietsocal from '../images/avatar/vietsocal.org.png';
import viettan from '../images/avatar/việt tân.png';
import viettudomunich from '../images/avatar/viettudomunich.png';
import vietvungvinh from '../images/avatar/việt vùng vịnh.png';
import xuandienhannom from '../images/avatar/xuandienhannom.blogspot.com.png';

// import defaultAvatar from '../images/avatar/default.png';

import baoNhanDan from '../images/avatar/nhân dân.png';
import { AvatarCustom } from '../components/ListSourceTable/styled';

const GetImageFormLink = ({ link, type, size }) => {
  const imgName = link;
  // eslint-disable-next-line no-shadow
  const checkLink = link => {
    if (link) {
      return link.includes('http');
    }
    return false;
  };
  let sourceImg;
  switch (imgName) {
    case '/avatar/baocalitoday.png':
      sourceImg = baocalitoday;
      break;
    case '/avatar/nhân dân.png':
      sourceImg = baoNhanDan;
      break;
    case '/avatar/báo thể thao văn hóa.png':
      sourceImg = baothethaovanhoa;
      break;
    case '/avatar/anhemdanchu.org.png':
      sourceImg = aedanchu;
      break;
    case '/avatar/công an nhân dân.png':
      sourceImg = congAnNhanDan;
      break;
    case '/avatar/an ninh thế giới giữa và cuối tháng.png':
      sourceImg = anNinhTheGioiGiuaVaCuoiThang;
      break;
    case '/avatar/an ninh thế giới online.png':
      sourceImg = anNinhTG;
      break;
    case '/avatar/an ninh thủ đô.png':
      sourceImg = anNinhThuDo;
      break;
    case '/avatar/antv.png':
      sourceImg = antv;
      break;
    case '/avatar/atgt.png':
      sourceImg = atgt;
      break;
    case '/avatar/bnews.png':
      sourceImg = bnews;
      break;
    case '/avatar/báo an giang.png':
      sourceImg = anGiang;
      break;
    case '/avatar/báo bà rịa-vũng tàu.png':
      sourceImg = BRVT;
      break;
    case '/avatar/báo bình dương.png':
      sourceImg = binhDuong;
      break;
    case '/avatar/báo bình phước.png':
      sourceImg = binhPhuoc;
      break;
    case '/avatar/báo bạc liêu.png':
      sourceImg = bacLieu;
      break;
    case '/avatar/báo bắc ninh.png':
      sourceImg = bacNinh;
      break;
    case '/avatar/báo chính phủ.png':
      sourceImg = chinhPhu;
      break;
    case '/avatar/báo dân sinh.png':
      sourceImg = danSinh;
      break;
    case '/avatar/báo giao thông.png':
      sourceImg = giaoThong;
      break;
    case '/avatar/báo giáo dục thành phố hồ chí minh.png':
      sourceImg = giaoDucHCM;
      break;
    case '/avatar/báo hà tĩnh.png':
      sourceImg = haTinh;
      break;
    case '/avatar/báo hải dương.png':
      sourceImg = haiDuong;
      break;
    case '/avatar/báo khánh hòa.png':
      sourceImg = khanhHoa;
      break;
    case '/avatar/báo nghệ an.png':
      sourceImg = ngheAn;
      break;
    case '/avatar/báo pháp luật.png':
      sourceImg = phapLuat;
      break;
    case '/avatar/báo quảng ninh.png':
      sourceImg = quangNinh;
      break;
    case '/avatar/báo quốc tế.png':
      sourceImg = quocTe;
      break;
    case '/avatar/báo tin tức miền tây.png':
      sourceImg = tinTucMienTay;
      break;
    case '/avatar/báo tổ quốc.png':
      sourceImg = toQuoc;
      break;
    case '/avatar/báo xây dựng.png':
      sourceImg = xayDung;
      break;
    case '/avatar/báo yên bái.png':
      sourceImg = yenBai;
      break;
    case '/avatar/báo điện tử công lý.png':
      sourceImg = dienTuCongLy;
      break;
    case '/avatar/báo đại đoàn kết.png':
      sourceImg = daiDoanKet;
      break;
    case '/avatar/báo đất việt.png':
      sourceImg = datViet;
      break;
    case '/avatar/báo đầu tư.png':
      sourceImg = dauTu;
      break;
    case '/avatar/báo tiếng dân.png':
      sourceImg = baotiengdan;
      break;
    case '/avatar/báo đồng nai.png':
      sourceImg = dongNai;
      break;
    case '/avatar/báo 24h.png':
      sourceImg = bao24h;
      break;
    case '/avatar/bóng đá plus.png':
      sourceImg = bongDaPlus;
      break;
    case '/avatar/cafebiz.png':
      sourceImg = cafebiz;
      break;
    case '/avatar/cafef.png':
      sourceImg = cafef;
      break;
    case '/avatar/công thương.png':
      sourceImg = congThuong;
      break;
    case '/avatar/cảnh sát toàn cầu online.png':
      sourceImg = canhSatToanCau;
      break;
    case '/avatar/doanh nghiệp.png':
      sourceImg = doanhNghiep;
      break;
    case '/avatar/doanh nhân và pháp luật.png':
      sourceImg = doanhNhanVaPL;
      break;
    case '/avatar/dân việt.png':
      sourceImg = danViet;
      break;
    case '/avatar/eva.png':
      sourceImg = eva;
      break;
    case '/avatar/genk.png':
      sourceImg = genk;
      break;
    case '/avatar/adelaidetuanbao.png':
      sourceImg = adelaidetu;
      break;
    case '/avatar/gia đình và xã hội.png':
      sourceImg = giaDinhVaXaHoi;
      break;
    case '/avatar/giáo dục.png':
      sourceImg = giaoDuc;
      break;
    case '/avatar/giáo dục và thời đại.png':
      sourceImg = giaoDucVaThoiDai;
      break;
    case '/avatar/hà nội mới.png':
      sourceImg = haNoiMoi;
      break;
    case '/avatar/ictnews.png':
      sourceImg = ictNew;
      break;
    case '/avatar/infonet.png':
      sourceImg = infoNet;
      break;
    case '/avatar/ione.png':
      sourceImg = ione;
      break;
    case '/avatar/khoa học và phát triển.png':
      sourceImg = khoaHocVaPhatTrien;
      break;
    case '/avatar/khoa học và đời sống.png':
      sourceImg = khoaHocVaDoiSong;
      break;
    case '/avatar/kinh tế môi trường.png':
      sourceImg = kinhTeMoiTruong;
      break;
    case '/avatar/kinh tế đô thị.png':
      sourceImg = kinhTeDoThi;
      break;
    case '/avatar/kiến thức.png':
      sourceImg = kienThuc;
      break;
    case '/avatar/kênh 14.png':
      sourceImg = kenh14;
      break;
    case '/avatar/lao động.png':
      sourceImg = laoDong;
      break;
    case '/avatar/net news.png':
      sourceImg = netNews;
      break;
    case '/avatar/ngôi sao.png':
      sourceImg = ngoiSao;
      break;
    case '/avatar/người lao động.png':
      sourceImg = NguoiLaoDong;
      break;
    case '/avatar/người đưa tin.png':
      sourceImg = nguoiDuaTin;
      break;
    case '/avatar/người đồng hành.png':
      sourceImg = nguoiDongHanh;
      break;
    case '/avatar/nhân dân điện tử.png':
      sourceImg = nhanDanDienTu;
      break;
    case '/avatar/nhịp cầu đầu tư.png':
      sourceImg = nhipCauDauTu;
      break;
    case '/avatar/nhịp sống doanh nghiệp.png':
      sourceImg = nhipSongDoanhNghiep;
      break;
    case '/avatar/nông nghiệp.png':
      sourceImg = nongNghiep;
      break;
    case '/avatar/pháp luật plus.png':
      sourceImg = phapLuatPlus;
      break;
    case '/avatar/pháp luật tp.hcm.png':
      sourceImg = phapLuatHCM;
      break;
    case '/avatar/phụ nữ online.png':
      sourceImg = phuNuOnline;
      break;
    case '/avatar/phụ nữ today.png':
      sourceImg = phuNuToday;
      break;
    case '/avatar/quân đội nhân dân.png':
      sourceImg = quanDoiNhanDan;
      break;
    case '/avatar/saostar.png':
      sourceImg = saoStar;
      break;
    case '/avatar/soha.png':
      sourceImg = soha;
      break;
    case '/avatar/sài gòn giải phóng.png':
      sourceImg = saigonGiaiPhong;
      break;
    case '/avatar/sài gòn đầu tư.png':
      sourceImg = saigonDauTu;
      break;
    case '/avatar/sức khỏe và đời sống.png':
      sourceImg = sucKhoeDoiSong;
      break;
    case '/avatar/techz.png':
      sourceImg = techz;
      break;
    case '/avatar/thanh niên.png':
      sourceImg = thanhNien;
      break;
    case '/avatar/thông tấn xã việt nam.png':
      sourceImg = TTXVN;
      break;
    case '/avatar/thương hiệu và công luận.png':
      sourceImg = thuonghieuVaCongLuan;
      break;
    case '/avatar/thể thao và văn hóa.png':
      sourceImg = theThaoVaVanHoa;
      break;
    case '/avatar/thể thao 247.png':
      sourceImg = theThao247;
      break;
    case '/avatar/thời báo kinh tế sài gòn.png':
      sourceImg = thoiBaoKinhTeSG;
      break;
    case '/avatar/tiin.png':
      sourceImg = tiin;
      break;
    case '/avatar/tin mới.png':
      sourceImg = tinMoi;
      break;
    case '/avatar/tin mới 24.png':
      sourceImg = tinMoi24;
      break;
    case '/avatar/tin tây nguyên.png':
      sourceImg = tinTayNguyen;
      break;
    case '/avatar/tin tức online.png':
      sourceImg = tintucOnline;
      break;
    case '/avatar/tintuc.vn.png':
      sourceImg = tintuc;
      break;
    case '/avatar/tiền phong.png':
      sourceImg = tienphong;
      break;
    case '/avatar/tuyên giáo.png':
      sourceImg = tuyengiao;
      break;
    case '/avatar/tuổi trẻ.png':
      sourceImg = tuoiTre;
      break;
    case '/avatar/tạp chí thời đại.png':
      sourceImg = tapChiThoiDai;
      break;
    case '/avatar/vietnambiz.png':
      sourceImg = vietnameBiz;
      break;
    case '/avatar/vietnamnet.png':
      sourceImg = vietnamNet;
      break;
    case '/avatar/viettimes.png':
      sourceImg = viettimes;
      break;
    case '/avatar/việt nam +.png':
      sourceImg = vnPlus;
      break;
    case '/avatar/việt nam mới.png':
      sourceImg = vietnamMoi;
      break;
    case '/avatar/vneconomy.png':
      sourceImg = vneconomy;
      break;
    case '/avatar/vnexpress.png':
      sourceImg = vnexpress;
      break;
    case '/avatar/vnreview.png':
      sourceImg = vnreview;
      break;
    case '/avatar/voh radio.png':
      sourceImg = vohRadio;
      break;
    case '/avatar/vov.png':
      sourceImg = vov;
      break;
    case '/avatar/vtc news.png':
      sourceImg = vtcNews;
      break;
    case '/avatar/vtv online.png':
      sourceImg = vtvOnline;
      break;
    case '/avatar/văn nghệ công an online.png':
      sourceImg = vanNgheCA;
      break;
    case '/avatar/web thể thao.png':
      sourceImg = webTheThao;
      break;
    case '/avatar/web tin tức.png':
      sourceImg = webTinTuc;
      break;
    case '/avatar/yan.png':
      sourceImg = yan;
      break;
    case '/avatar/zing.png':
      sourceImg = zing;
      break;
    case '/avatar/đại biểu nhân dân.png':
      sourceImg = daiBieuNhanDan;
      break;
    case '/avatar/đảng cộng sản việt nam.png':
      sourceImg = dangCongSan;
      break;
    case '/avatar/đầu tư chứng khoán.png':
      sourceImg = dauTuChungKhoan;
      break;
    case '/avatar/đọc báo.png':
      sourceImg = docBao;
      break;
    case '/avatar/đời sống pháp luật.png':
      sourceImg = doiSongPhapLuat;
      break;
    case '/avatar/đời sống việt nam.png':
      sourceImg = doiSongVietNam;
      break;
    case '/avatar/dân trí.png':
      sourceImg = danTri;
      break;
    case '/avatar/buctranhvancau.png':
      sourceImg = buctranhvancau;
      break;
    case '/avatar/cdnvqglbhk.org.png':
      sourceImg = cdnvqglbhk;
      break;
    case '/avatar/chinhnghiavietnamconghoa.png':
      sourceImg = chinhnghiavietnamconghoa;
      break;
    case '/avatar/cổng thông tin điện tử chính phủ.png':
      sourceImg = congthongtindientuchinhphu;
      break;
    case '/avatar/cổng thông tin điện tử bộ công an.png':
      sourceImg = congthongdientubocongan;
      break;
    case '/avatar/đàn chim việt online.png':
      sourceImg = danchimvietonline;
      break;
    case '/avatar/danlambaovn.blogspot.com.png':
      sourceImg = danlambaovn;
      break;
    case '/avatar/dcv online.png':
      sourceImg = dcvOnline;
      break;
    case '/avatar/defend the defenders.png':
      sourceImg = defend;
      break;
    case '/avatar/diễn đàn thế kỷ.png':
      sourceImg = diendantheki;
      break;
    case '/avatar/diendantraichieu.blogspot.com.png':
      sourceImg = diendantraichieu;
      break;
    case '/avatar/doithoaionline.wordpress.com.png':
      sourceImg = doithoaionline;
      break;
    case '/avatar/hưng việt.png':
      sourceImg = hungviet;
      break;
    case '/avatar/khmers kampuchea-krom federation.png':
      sourceImg = khmerskampuchea;
      break;
    case '/avatar/nghiên cứu chiến lược.png':
      sourceImg = nghiencuuchienluoc;
      break;
    case '/avatar/nghiên cứu quốc tế.png':
      sourceImg = nghiencuuquocte;
      break;
    case '/avatar/người việt.png':
      sourceImg = nguoiviet;
      break;
    case '/avatar/rfa.png':
      sourceImg = rfa;
      break;
    case '/avatar/sbtn.png':
      sourceImg = sbtn;
      break;
    case '/avatar/thời báo.png':
      sourceImg = thoibao;
      break;
    case '/avatar/tienglongta.com.png':
      sourceImg = tienglongta;
      break;
    case '/avatar/vandoanviet.blogspot.com.png':
      sourceImg = vandoanviet;
      break;
    case '/avatar/văn việt.png':
      sourceImg = vanviet;
      break;
    case '/avatar/vietecology.org.png':
      sourceImg = vietecology;
      break;
    case '/avatar/viet-europe.png':
      sourceImg = vietEurope;
      break;
    case '/avatar/vietlist.png':
      sourceImg = vietlist;
      break;
    case '/avatar/vietnam.ca.png':
      sourceImg = vietnam;
      break;
    case '/avatar/vietnamthoibao.png':
      sourceImg = vietnamthoibao;
      break;
    case '/avatar/vietsocal.org.png':
      sourceImg = vietsocal;
      break;
    case '/avatar/việt tân.png':
      sourceImg = viettan;
      break;
    case '/avatar/viettudomunich.png':
      sourceImg = viettudomunich;
      break;
    case '/avatar/việt vùng vịnh.png':
      sourceImg = vietvungvinh;
      break;
    case '/avatar/xuandienhannom.blogspot.com.png':
      sourceImg = xuandienhannom;
      break;
    case '/avatar/cprvn.png':
      sourceImg = cprvn;
      break;
    default:
      sourceImg = defaultImg;
  }
  return checkLink(imgName) ? (
    <Image
      src={imgName}
      width={size}
      height={size}
      preview={false}
      fallback={defaultImg}
    />
  ) : (
    <div>
      {type === 1 ? (
        <AvatarCustom
          size={size}
          fallback={defaultImg}
          src={sourceImg}
          alt="avatar"
        />
      ) : (
        <Image
          src={sourceImg}
          width={size}
          height={size}
          preview={false}
          fallback={defaultImg}
        />
      )}
    </div>
  );
};

GetImageFormLink.propTypes = {
  link: PropTypes.string,
  type: PropTypes.number,
  size: PropTypes.number,
};

GetImageFormLink.defaultProps = {
  size: 40,
};

export default GetImageFormLink;
