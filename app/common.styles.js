import styled from 'styled-components';

const IconLoading = styled.div`
  border: 4px solid #f3f3f3; /* Màu sắc đường viền */
  border-top: 4px solid #4f4d63; /* Màu sắc đường viền trên cùng */
  border-radius: 50%; /* Làm cho phần tử tròn */
  width: 20px; /* Chiều rộng của phần tử */
  height: 20px; /* Chiều cao của phần tử */
  animation: spin 2s linear infinite; /* Tạo hiệu ứng quay */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    /* Góc quay ban đầu */
    100% {
      transform: rotate(360deg);
    }
    /* Góc quay khi hoàn thành */
  }
`;

export { IconLoading };
