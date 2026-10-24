(function () {
  'use strict';

  const STORAGE_KEY = 'sky-eye-rawai-demo-v1';
  const LANGUAGE_KEY = 'sky-eye-rawai-demo-language';
  const THAI_ZONE = 'Asia/Bangkok';
  const app = document.getElementById('app');
  const nav = document.getElementById('primary-nav');
  const dialog = document.getElementById('app-dialog');
  const toastRegion = document.getElementById('toast-region');
  const thaiTranslations = {
    'Browser-only sample data · Not shared or secure': 'ข้อมูลตัวอย่างในเบราว์เซอร์ · ไม่แชร์และไม่มีการรักษาความปลอดภัย',
    'A calm workspace for daily massage records and the business reports behind them.': 'พื้นที่ทำงานที่เรียบง่ายสำหรับบันทึกบริการนวดและรายงานธุรกิจ',
    'Demo records are stored only in this browser. Role selection is navigation, not access control.': 'ข้อมูลเดโมจัดเก็บไว้ในเบราว์เซอร์นี้เท่านั้น การเลือกบทบาทเป็นเพียงการนำทาง ไม่ใช่ระบบควบคุมสิทธิ์',
    'Try another date filter or add the first record for this period.': 'ลองเปลี่ยนตัวกรองวันที่หรือเพิ่มรายการแรกของช่วงนี้',
    'Records are shared across Staff and Manager demo views.': 'รายการเดียวกันจะแสดงทั้งในมุมมองพนักงานและผู้จัดการ',
    'Shared demo records used across every report.': 'ใช้ข้อมูลเดโมชุดเดียวกันในทุกรายงาน',
    'Record and review today’s massage services.': 'บันทึกและตรวจสอบบริการนวดประจำวัน',
    'Demo reporting and business settings · not access controlled': 'รายงานและตั้งค่าธุรกิจสำหรับเดโม · ไม่มีการควบคุมสิทธิ์',
    'Manager Dashboard': 'แดชบอร์ดผู้จัดการ',
    'Management Overview': 'ภาพรวมการจัดการ',
    'Massage Records': 'รายการนวด',
    'Massage List': 'รายการนวด',
    'Massage Report': 'รายงานการนวด',
    'Massage earnings for ': 'รายได้จากบริการนวด ',
    'Revenue less staff payouts and operating expenses for ': 'รายได้หักค่าตอบแทนพนักงานและค่าใช้จ่ายสำหรับ ',
    ' to ': ' ถึง ',
    'Net profit': 'กำไรสุทธิ',
    'Salary Report': 'รายงานเงินเดือน',
    'Profit Report': 'รายงานกำไร',
    'Staff List': 'รายชื่อพนักงาน',
    'Staff Name': 'ชื่อพนักงาน',
    'Staff name': 'ชื่อพนักงาน',
    'Staff member': 'พนักงาน',
    'Staff Salary Payout': 'ค่าตอบแทนพนักงาน',
    'Staff salary payout': 'ค่าตอบแทนพนักงาน',
    'Massage Duration': 'ระยะเวลานวด',
    'Massage Duration (minutes)': 'ระยะเวลานวด (นาที)',
    'Massage Hours': 'ชั่วโมงนวด',
    'Total massage hours': 'ชั่วโมงนวดรวม',
    'Massages Completed': 'จำนวนครั้งที่นวด',
    'Number of Massages Completed': 'จำนวนครั้งที่นวด',
    'Total massages': 'จำนวนครั้งรวม',
    'Massage revenue': 'รายได้จากการนวด',
    'Total massage revenue': 'รายได้จากการนวดรวม',
    'Total Massage Revenue (THB)': 'รายได้จากการนวดรวม (THB)',
    'Rent allocated': 'ค่าเช่าที่จัดสรร',
    'Rent expenses': 'ค่าเช่า',
    'Rent': 'ค่าเช่า',
    'Supplies': 'อุปกรณ์และวัสดุ',
    'Category': 'หมวดหมู่',
    'Date': 'วันที่',
    'Time / Date': 'เวลา / วันที่',
    'Time (Thailand)': 'เวลา (ประเทศไทย)',
    'Price (THB)': 'ราคา (THB)',
    'Amount (THB)': 'จำนวนเงิน (THB)',
    'Description': 'รายละเอียด',
    'Actions': 'การดำเนินการ',
    'Status': 'สถานะ',
    'Active': 'ใช้งาน',
    'Inactive': 'ไม่ใช้งาน',
    'Activate': 'เปิดใช้งาน',
    'Deactivate': 'ปิดใช้งาน',
    'Home': 'หน้าหลัก',
    'Staff': 'พนักงาน',
    'Manager': 'ผู้จัดการ',
    'Main navigation': 'เมนูหลัก',
    'Language': 'ภาษา',
    'DEMO MODE': 'โหมดสาธิต',
    'LOCAL DEMO': 'เดโมในเครื่อง',
    'DEMO ONLY · Stored in this browser': 'เดโมเท่านั้น · จัดเก็บในเบราว์เซอร์นี้',
    'RAWAI · PHUKET · THAILAND': 'ราไวย์ · ภูเก็ต · ประเทศไทย',
    'WELLNESS, WITH CLARITY': 'ดูแลสุขภาพ พร้อมข้อมูลชัดเจน',
    'DEMO · ASIA/BANGKOK': 'เดโม · เอเชีย/กรุงเทพฯ',
    'Care that restores.': 'ดูแลเพื่อการผ่อนคลาย',
    'Numbers that guide.': 'ข้อมูลช่วยนำทางธุรกิจ',
    'Open the Massage List': 'เปิดรายการนวด',
    'View reports and settings': 'ดูรายงานและการตั้งค่า',
    'SAMPLE DATA INCLUDED': 'มีข้อมูลตัวอย่าง',
    'MANAGER WORKSPACE': 'พื้นที่ผู้จัดการ',
    'STAFF WORKSPACE': 'พื้นที่พนักงาน',
    'MANAGEMENT OVERVIEW': 'ภาพรวมการจัดการ',
    'Massage': 'การนวด',
    'Salary': 'เงินเดือน',
    'Profit': 'กำไร',
    'From date': 'ตั้งแต่วันที่',
    'To date': 'ถึงวันที่',
    'Start date': 'วันที่เริ่มต้น',
    'End date': 'วันที่สิ้นสุด',
    'Filter by date': 'กรองตามวันที่',
    'All staff': 'พนักงานทั้งหมด',
    'Apply Filter': 'ใช้ตัวกรอง',
    'Clear': 'ล้าง',
    'Clear filters': 'ล้างตัวกรอง',
    'Today': 'วันนี้',
    'Add Massage': 'เพิ่มรายการนวด',
    'Add Staff': 'เพิ่มพนักงาน',
    'Add Expense': 'เพิ่มค่าใช้จ่าย',
    'Add massage': 'เพิ่มรายการนวด',
    'Add staff': 'เพิ่มพนักงาน',
    'Add staff member': 'เพิ่มพนักงาน',
    'Add expense': 'เพิ่มค่าใช้จ่าย',
    'Edit massage': 'แก้ไขรายการนวด',
    'Edit staff member': 'แก้ไขข้อมูลพนักงาน',
    'Edit expense': 'แก้ไขค่าใช้จ่าย',
    'Save changes': 'บันทึกการเปลี่ยนแปลง',
    'Save massage': 'บันทึกรายการนวด',
    'Save expense': 'บันทึกค่าใช้จ่าย',
    'Save salary policy': 'บันทึกนโยบายค่าตอบแทน',
    'Save rent method': 'บันทึกวิธีคิดค่าเช่า',
    'Cancel': 'ยกเลิก',
    'Close dialog': 'ปิดหน้าต่าง',
    'Reset Demo Data': 'รีเซ็ตข้อมูลเดโม',
    'Clear All Demo Data': 'ล้างข้อมูลเดโมทั้งหมด',
    'Restore initial sample data': 'คืนค่าข้อมูลตัวอย่างเริ่มต้น',
    'Demo data controls': 'จัดการข้อมูลเดโม',
    'Reset restores sample records. Clear removes all records from this browser.': 'รีเซ็ตเพื่อคืนค่าข้อมูลตัวอย่าง หรือล้างข้อมูลทั้งหมดจากเบราว์เซอร์นี้',
    'Total massages': 'จำนวนครั้งรวม',
    'Completed in selected period': 'รายการในช่วงเวลาที่เลือก',
    'Massage duration ÷ 60': 'ระยะเวลานวด ÷ 60',
    'THB · selected period': 'THB · ช่วงเวลาที่เลือก',
    'THB · authoritative demo policy': 'THB · ตามนโยบายเดโมที่กำหนด',
    'Same policy as Salary tab': 'ใช้นโยบายเดียวกับแท็บเงินเดือน',
    'Prorated by calendar day': 'เฉลี่ยตามวันปฏิทิน',
    'Recorded daily rent': 'ค่าเช่ารายวันที่บันทึกไว้',
    'Recorded in selected period': 'บันทึกในช่วงเวลาที่เลือก',
    'Salary setup required': 'ต้องตั้งค่านโยบายเงินเดือน',
    'Revenue less costs': 'รายได้หักค่าใช้จ่าย',
    'Required': 'จำเป็น',
    'Configuration required': 'ต้องตั้งค่านโยบาย',
    'Salary configuration required': 'ต้องตั้งค่านโยบายเงินเดือน',
    'Salary configuration required. Set a valid commission value or configure the fallback payout before reporting salary.': 'ต้องตั้งค่านโยบายเงินเดือน กำหนดค่าคอมมิชชันหรือค่าตอบแทนสำรองก่อนดูรายงาน',
    'Total rent': 'ค่าเช่ารวม',
    'Total supplies': 'ค่าวัสดุรวม',
    'Total staff salary payout': 'ค่าตอบแทนพนักงานรวม',
    'Massage revenue': 'รายได้จากการนวด',
    'Commission settings': 'ตั้งค่าค่าคอมมิชชัน',
    'Commission enabled': 'เปิดใช้ค่าคอมมิชชัน',
    'Use a commission-based payout': 'คำนวณค่าตอบแทนตามค่าคอมมิชชัน',
    'Commission method': 'วิธีคิดค่าคอมมิชชัน',
    'Fixed per massage': 'จำนวนคงที่ต่อครั้ง',
    'Percentage of revenue': 'เปอร์เซ็นต์จากรายได้',
    'Amount (THB)': 'จำนวนเงิน (THB)',
    'Rate (%)': 'อัตรา (%)',
    'Fallback payout per massage (THB)': 'ค่าตอบแทนสำรองต่อครั้ง (THB)',
    'Used explicitly whenever commission is disabled.': 'ใช้เป็นค่าตอบแทนเมื่อปิดค่าคอมมิชชัน',
    'Current calculation policy': 'นโยบายการคำนวณปัจจุบัน',
    'Fixed commission = qualifying massages × fixed amount. Percentage commission = qualifying massage revenue × rate. Values and totals are rounded to 2 decimal places.': 'ค่าคอมมิชชันคงที่ = จำนวนครั้งที่เข้าเงื่อนไข × อัตราคงที่ ค่าคอมมิชชันแบบเปอร์เซ็นต์ = รายได้จากการนวดที่เข้าเงื่อนไข × อัตรา ปัดเศษเป็นทศนิยม 2 ตำแหน่ง',
    'Fixed commission = qualifying massage count × fixed amount. Percentage commission = qualifying massage revenue × rate. Values and totals are rounded to 2 decimal places.': 'ค่าคอมมิชชันคงที่ = จำนวนครั้งที่เข้าเงื่อนไข × อัตราคงที่ ค่าคอมมิชชันแบบเปอร์เซ็นต์ = รายได้จากการนวดที่เข้าเงื่อนไข × อัตรา ปัดเศษเป็นทศนิยม 2 ตำแหน่ง',
    'Hours reflect massage durations only; they are not employment hours.': 'ชั่วโมงนี้นับเฉพาะระยะเวลานวด ไม่ใช่ชั่วโมงทำงานทั้งหมด',
    'Expense category': 'หมวดหมู่ค่าใช้จ่าย',
    'Period reconciliation': 'สรุปยอดประจำช่วงเวลา',
    'Rent configuration': 'ตั้งค่าค่าเช่า',
    'Choose one rent method. Monthly allocation and recorded daily rent are never added together.': 'เลือกวิธีคิดค่าเช่าแบบใดแบบหนึ่ง ค่าเช่ารายเดือนและรายวันจะไม่ถูกนับซ้ำ',
    'Rent method': 'วิธีคิดค่าเช่า',
    'Monthly rent allocation': 'เฉลี่ยค่าเช่ารายเดือน',
    'Recorded daily rent expenses': 'บันทึกค่าเช่ารายวัน',
    'Monthly rent (THB)': 'ค่าเช่ารายเดือน (THB)',
    'Add a Rent expense for each daily rent payment.': 'เพิ่มรายการค่าเช่าสำหรับค่าเช่ารายวันแต่ละครั้ง',
    'Monthly rent is allocated proportionally by calendar days, including across month and year boundaries.': 'เฉลี่ยค่าเช่ารายเดือนตามจำนวนวันปฏิทิน รวมถึงช่วงที่ข้ามเดือนหรือปี',
    'Rent (THB)': 'ค่าเช่า (THB)',
    'Supplies (THB)': 'ค่าวัสดุ (THB)',
    'Staff Salary Payout (THB)': 'ค่าตอบแทนพนักงาน (THB)',
    'Massage Revenue (THB)': 'รายได้จากการนวด (THB)',
    'Profit (THB)': 'กำไร (THB)',
    'Expenses in selected period': 'ค่าใช้จ่ายในช่วงเวลาที่เลือก',
    'No expenses in this period': 'ไม่มีค่าใช้จ่ายในช่วงนี้',
    'Expenses you add will appear here.': 'ค่าใช้จ่ายที่เพิ่มจะแสดงที่นี่',
    'Negative profit': 'ขาดทุน',
    'Expenses and salary exceed massage revenue in this reporting period.': 'ค่าใช้จ่ายและค่าตอบแทนสูงกว่ารายได้จากการนวดในช่วงนี้',
    'Profit is incomplete until a valid salary payout policy is configured.': 'รายงานกำไรยังไม่สมบูรณ์จนกว่าจะตั้งค่านโยบายค่าตอบแทนที่ถูกต้อง',
    'Rent method: ': 'วิธีคิดค่าเช่า: ',
    'monthly rent is allocated across calendar days in the selected period; individual rent entries are excluded to prevent double-counting.': 'เฉลี่ยค่าเช่ารายเดือนตามวันปฏิทินในช่วงที่เลือก โดยไม่นับรายการค่าเช่าแยกเพื่อป้องกันการนับซ้ำ',
    'only dated rent entries are included.': 'นับเฉพาะรายการค่าเช่าที่บันทึกวันที่ไว้',
    'excluded by monthly method': 'ไม่รวมเมื่อใช้วิธีรายเดือน',
    'Manage demo staff records. Inactive staff stay linked to historical massages.': 'จัดการข้อมูลพนักงานเดโม พนักงานที่ไม่ใช้งานยังเชื่อมโยงกับรายการนวดย้อนหลัง',
    'Permanent deletion is intentionally unavailable so historical massage associations remain intact.': 'ไม่มีการลบถาวร เพื่อรักษาความเชื่อมโยงกับรายการนวดย้อนหลัง',
    'No staff members yet': 'ยังไม่มีพนักงาน',
    'Add a staff member to use in massage records.': 'เพิ่มพนักงานเพื่อใช้ในรายการนวด',
    'No massage records found': 'ไม่พบรายการนวด',
    'No staff records.': 'ไม่มีข้อมูลพนักงาน',
    'No massage records found': 'ไม่พบรายการนวด',
    'Sample data included': 'มีข้อมูลตัวอย่าง',
    'Shared with the Staff Massage List.': 'ใช้ข้อมูลเดียวกับรายการนวดของพนักงาน',
    'Massage earnings': 'รายได้จากบริการนวด',
    'Name are for demo display only; no staff accounts or credentials are created.': 'ใช้ชื่อเพื่อแสดงในเดโมเท่านั้น ไม่มีการสร้างบัญชีหรือรหัสผ่านพนักงาน',
    'Names are for demo display only; no staff accounts or credentials are created.': 'ใช้ชื่อเพื่อแสดงในเดโมเท่านั้น ไม่มีการสร้างบัญชีหรือรหัสผ่านพนักงาน',
    'Enter staff name': 'กรอกชื่อพนักงาน',
    'Enter a name between 2 and 80 characters.': 'กรอกชื่อที่มีความยาว 2 ถึง 80 ตัวอักษร',
    'A staff member with that name already exists.': 'มีพนักงานชื่อนี้อยู่แล้ว',
    'Staff name updated.': 'อัปเดตชื่อพนักงานแล้ว',
    'Staff member added.': 'เพิ่มพนักงานแล้ว',
    'Staff member activated.': 'เปิดใช้งานพนักงานแล้ว',
    'Staff member deactivated.': 'ปิดใช้งานพนักงานแล้ว',
    'Enter a valid date, amount, and description.': 'กรอกวันที่ จำนวนเงิน และรายละเอียดให้ถูกต้อง',
    'Check the date, time, duration, and price values.': 'ตรวจสอบวันที่ เวลา ระยะเวลา และราคา',
    'Enter a valid commission and fallback payout.': 'กรอกค่าคอมมิชชันและค่าตอบแทนสำรองให้ถูกต้อง',
    'Enter a valid monthly rent amount.': 'กรอกค่าเช่ารายเดือนให้ถูกต้อง',
    'Start date must be on or before end date.': 'วันที่เริ่มต้นต้องไม่อยู่หลังวันที่สิ้นสุด',
    'Browser storage is unavailable; changes may not persist.': 'ไม่สามารถใช้พื้นที่จัดเก็บของเบราว์เซอร์ การเปลี่ยนแปลงอาจไม่ถูกบันทึก',
    'Massage record saved.': 'บันทึกรายการนวดแล้ว',
    'Massage record updated.': 'อัปเดตรายการนวดแล้ว',
    'Massage record deleted.': 'ลบรายการนวดแล้ว',
    'Expense recorded.': 'บันทึกค่าใช้จ่ายแล้ว',
    'Expense updated.': 'อัปเดตค่าใช้จ่ายแล้ว',
    'Expense deleted.': 'ลบค่าใช้จ่ายแล้ว',
    'Salary calculation policy saved.': 'บันทึกนโยบายการคำนวณค่าตอบแทนแล้ว',
    'Rent settings saved. Only the selected rent method is counted.': 'บันทึกการตั้งค่าแล้ว ระบบจะนับเฉพาะวิธีคิดค่าเช่าที่เลือก',
    'Sample demo data restored.': 'คืนค่าข้อมูลตัวอย่างแล้ว',
    'All demo data cleared.': 'ล้างข้อมูลเดโมทั้งหมดแล้ว',
    'Select a valid date, time, duration, and price.': 'เลือกวันที่ เวลา ระยะเวลา และราคาให้ถูกต้อง',
    'Add or activate a staff member before recording a massage.': 'เพิ่มหรือเปิดใช้งานพนักงานก่อนบันทึกรายการนวด',
    'A massage for this staff member already exists at this date and time. Save another record anyway?': 'มีรายการนวดของพนักงานคนนี้ในวันและเวลานี้แล้ว ต้องการบันทึกซ้ำหรือไม่',
    'Reports will recalculate.': 'รายงานจะคำนวณใหม่',
    'Delete this ': 'ลบ',
    ' expense of ': ' จำนวน ',
    '?': 'หรือไม่',
    'Reset this browser to the original sample data? Your current demo edits will be replaced.': 'คืนค่าข้อมูลตัวอย่างเริ่มต้นหรือไม่ การแก้ไขเดโมปัจจุบันจะถูกแทนที่',
    'Clear all staff, massages, expenses, and salary/rent settings from this browser? This cannot be undone.': 'ล้างข้อมูลพนักงาน รายการนวด ค่าใช้จ่าย และการตั้งค่าเงินเดือน/ค่าเช่าจากเบราว์เซอร์นี้หรือไม่ การดำเนินการนี้ย้อนกลับไม่ได้',
    'Delete the ': 'ลบรายการวันที่ ',
    ' massage for ': ' ของ ',
    ' Deactivate ': 'ปิดใช้งาน ',
    ' Historical records will remain.': ' รายการย้อนหลังจะยังคงอยู่',
    'Check the date, time, duration, and price values.': 'ตรวจสอบวันที่ เวลา ระยะเวลา และราคา',
    'Save changes': 'บันทึกการเปลี่ยนแปลง',
    'Save expense': 'บันทึกค่าใช้จ่าย',
    'Business expenses · THB': 'ค่าใช้จ่ายธุรกิจ · THB',
    'Business date and time are recorded in Thailand local time. This demo stores records in this browser only.': 'วันที่และเวลาธุรกิจบันทึกตามเวลาในประเทศไทย เดโมนี้จัดเก็บข้อมูลไว้ในเบราว์เซอร์นี้เท่านั้น',
    'Rent uses the monthly allocation setting. This form records supplies only, preventing rent double-counting.': 'ค่าเช่าใช้การตั้งค่าเฉลี่ยรายเดือน แบบฟอร์มนี้บันทึกเฉพาะค่าวัสดุเพื่อป้องกันการนับค่าเช่าซ้ำ',
    'What was this expense for?': 'ค่าใช้จ่ายนี้สำหรับอะไร',
    'Massage List · Asia/Bangkok': 'รายการนวด · เอเชีย/กรุงเทพฯ',
    'Massage duration': 'ระยะเวลานวด',
    'Massage duration ÷ 60': 'ระยะเวลานวด ÷ 60',
    'Settings': 'การตั้งค่า',
    'Current calculation policy': 'นโยบายการคำนวณปัจจุบัน',
    'Commission is disabled. Fallback policy:': 'ปิดค่าคอมมิชชัน ใช้นโยบายสำรอง:',
    'Policy:': 'นโยบาย:',
    'per completed massage.': 'ต่อการนวดหนึ่งครั้ง',
    'of each staff member’s massage revenue.': 'ของรายได้จากการนวดของพนักงานแต่ละคน',
    'Fixed commission = qualifying massages × fixed amount. Percentage commission = qualifying massage revenue × rate. Values and totals are rounded to 2 decimal places.': 'ค่าคอมมิชชันคงที่ = จำนวนครั้งที่เข้าเงื่อนไข × อัตราคงที่ ค่าคอมมิชชันแบบเปอร์เซ็นต์ = รายได้จากการนวดที่เข้าเงื่อนไข × อัตรา ปัดเศษเป็นทศนิยม 2 ตำแหน่ง',
    'Massage List': 'รายการนวด',
    'massage services.': 'บริการนวด',
    'Edit': 'แก้ไข',
    'Delete': 'ลบ',
    'Save': 'บันทึก',
    'Unknown staff': 'ไม่ทราบชื่อพนักงาน',
    'All staff': 'พนักงานทั้งหมด',
    'ACTIVE': 'ใช้งาน',
    'INACTIVE': 'ไม่ใช้งาน',
    'Rent': 'ค่าเช่า',
    'Daily': 'รายวัน',
    'Clear': 'ล้าง'
  };
  let storageAvailable = true;
  let language = loadLanguage();
  let state = loadState();
  let page = 'home';
  let managerTab = 'massage';
  let filters = { staffDate: '', managerStart: '', managerEnd: '', managerStaff: '', salaryStart: today(), salaryEnd: today(), profitStart: today(), profitEnd: today() };

  function loadLanguage() {
    try { return localStorage.getItem(LANGUAGE_KEY) === 'th' ? 'th' : 'en'; }
    catch (error) { return 'en'; }
  }

  function translatedText(value) {
    if (language !== 'th') return value;
    const trimmed = value.trim();
    const exact = thaiTranslations[trimmed];
    if (exact) return value.replace(trimmed, exact);
    let match = trimmed.match(/^(\d+) records?$/i);
    if (match) return value.replace(trimmed, `${match[1]} รายการ`);
    match = trimmed.match(/^(\d+) min$/i);
    if (match) return value.replace(trimmed, `${match[1]} นาที`);
    match = trimmed.match(/^(\d+) TOTAL RECORDS?$/i);
    if (match) return value.replace(trimmed, `ทั้งหมด ${match[1]} รายการ`);
    match = trimmed.match(/^Policy: (.+) per completed massage\.$/);
    if (match) return value.replace(trimmed, `นโยบาย: ${match[1]} ต่อการนวดหนึ่งครั้ง`);
    match = trimmed.match(/^Policy: (\d+(?:\.\d+)?)% of each staff member’s massage revenue\.$/);
    if (match) return value.replace(trimmed, `นโยบาย: ${match[1]}% ของรายได้จากการนวดของพนักงานแต่ละคน`);
    match = trimmed.match(/^Commission is disabled\. Fallback policy: (.+) per completed massage\.$/);
    if (match) return value.replace(trimmed, `ปิดค่าคอมมิชชัน ใช้นโยบายสำรอง: ${match[1]} ต่อการนวดหนึ่งครั้ง`);
    match = trimmed.match(/^Massage earnings for (.+) to (.+)\.$/);
    if (match) return value.replace(trimmed, `รายได้จากบริการนวด ${match[1]} ถึง ${match[2]}`);
    match = trimmed.match(/^Revenue less staff payouts and operating expenses for (.+) to (.+)\.$/);
    if (match) return value.replace(trimmed, `รายได้หักค่าตอบแทนพนักงานและค่าใช้จ่าย ${match[1]} ถึง ${match[2]}`);
    match = trimmed.match(/^Edit massage for (.+)$/);
    if (match) return value.replace(trimmed, `แก้ไขรายการนวดของ ${match[1]}`);
    match = trimmed.match(/^Edit (.+)$/);
    if (match) return value.replace(trimmed, `แก้ไข ${match[1]}`);
    match = trimmed.match(/^Delete massage for (.+)$/);
    if (match) return value.replace(trimmed, `ลบรายการนวดของ ${match[1]}`);
    match = trimmed.match(/^Delete this (rent|supplies) expense of (.+)\?$/i);
    if (match) return value.replace(trimmed, `ลบ${match[1].toLowerCase() === 'rent' ? 'ค่าเช่า' : 'ค่าวัสดุ'}จำนวน ${match[2]} หรือไม่`);
    match = trimmed.match(/^Delete the (.+) massage for (.+)\? Reports will recalculate\.$/);
    if (match) return value.replace(trimmed, `ลบรายการนวดวันที่ ${match[1]} ของ ${match[2]} หรือไม่ รายงานจะคำนวณใหม่`);
    match = trimmed.match(/^Deactivate (.+)\? Historical records will remain\.$/);
    if (match) return value.replace(trimmed, `ปิดใช้งาน ${match[1]} หรือไม่ รายการย้อนหลังจะยังคงอยู่`);
    match = trimmed.match(/^(.*) · inactive$/);
    if (match) return value.replace(trimmed, `${match[1]} · ไม่ใช้งาน`);
    match = trimmed.match(/^Rent method: (.+)\.$/);
    if (match) {
      const rentPolicy = match[1].startsWith('monthly rent')
        ? 'เฉลี่ยค่าเช่ารายเดือนตามวันปฏิทินในช่วงที่เลือก โดยไม่นับรายการค่าเช่าแยกเพื่อป้องกันการนับซ้ำ'
        : 'นับเฉพาะรายการค่าเช่าที่บันทึกวันที่ไว้';
      return value.replace(trimmed, `วิธีคิดค่าเช่า: ${rentPolicy}`);
    }
    match = trimmed.match(/^Profit = Massage Revenue − Staff Salary Payout − Rent Expense − Supplies Expense\. Rent method: (.+)\.$/);
    if (match) {
      const rentPolicy = match[1].startsWith('monthly rent')
        ? 'เฉลี่ยค่าเช่ารายเดือนตามวันปฏิทินในช่วงที่เลือก โดยไม่นับรายการค่าเช่าแยกเพื่อป้องกันการนับซ้ำ'
        : 'นับเฉพาะรายการค่าเช่าที่บันทึกวันที่ไว้';
      return value.replace(trimmed, `กำไร = รายได้จากการนวด − ค่าตอบแทนพนักงาน − ค่าเช่า − ค่าวัสดุ วิธีคิดค่าเช่า: ${rentPolicy}`);
    }
    if (trimmed === '↺ Reset Demo Data') return value.replace(trimmed, '↺ รีเซ็ตข้อมูลเดโม');
    return value;
  }

  function translatePage(root = document.body) {
    document.documentElement.lang = language;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.__englishText === undefined) node.__englishText = node.nodeValue;
      node.nodeValue = language === 'th' ? translatedText(node.__englishText) : node.__englishText;
    }
    for (const element of root.querySelectorAll('[aria-label], [title], [placeholder], [alt]')) {
      element.__englishAttributes ||= {};
      for (const attribute of ['aria-label', 'title', 'placeholder', 'alt']) {
        if (!element.hasAttribute(attribute)) continue;
        if (element.__englishAttributes[attribute] === undefined) element.__englishAttributes[attribute] = element.getAttribute(attribute);
        const englishValue = element.__englishAttributes[attribute];
        element.setAttribute(attribute, language === 'th' ? translatedText(englishValue) : englishValue);
      }
    }
    if (root === document.body) {
      const title = document.querySelector('title');
      if (title) title.textContent = language === 'th' ? 'Sky Eye Massage Rawai | เดโม' : 'Sky Eye Massage Rawai | Demo';
      document.querySelectorAll('.language-switch button').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.language === language));
      });
    }
  }

  function askConfirmation(message) { return window.confirm(translatedText(message)); }

  function today() {
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: THAI_ZONE, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
    const value = Object.fromEntries(parts.map(part => [part.type, part.value]));
    return `${value.year}-${value.month}-${value.day}`;
  }

  function thaiTime() {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: THAI_ZONE, hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const value = Object.fromEntries(parts.map(part => [part.type, part.value]));
    return `${value.hour}:${value.minute}`;
  }

  function addDays(dateString, amount) {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day + amount));
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`;
  }

  function sampleState() {
    const current = today();
    return {
      version: 1,
      staff: [
        { id: 'staff-nok', name: 'Nok Srisuwan', active: true },
        { id: 'staff-mali', name: 'Mali Chaiyaporn', active: true },
        { id: 'staff-pim', name: 'Pimchanok Dee', active: true },
        { id: 'staff-dao', name: 'Dao Rattanakorn', active: false }
      ],
      massages: [
        { id: 'massage-1', date: addDays(current, 0), time: '10:15', staffId: 'staff-nok', duration: 60, price: 700, createdAt: new Date().toISOString() },
        { id: 'massage-2', date: addDays(current, 0), time: '11:30', staffId: 'staff-mali', duration: 90, price: 950, createdAt: new Date().toISOString() },
        { id: 'massage-3', date: addDays(current, -1), time: '14:00', staffId: 'staff-pim', duration: 60, price: 700, createdAt: new Date().toISOString() },
        { id: 'massage-4', date: addDays(current, -2), time: '16:20', staffId: 'staff-nok', duration: 120, price: 1350, createdAt: new Date().toISOString() },
        { id: 'massage-5', date: addDays(current, -5), time: '09:45', staffId: 'staff-dao', duration: 60, price: 700, createdAt: new Date().toISOString() },
        { id: 'massage-6', date: addDays(current, -8), time: '13:00', staffId: 'staff-mali', duration: 90, price: 950, createdAt: new Date().toISOString() }
      ],
      salary: { commissionEnabled: true, commissionMethod: 'percentage', commissionValue: 35, fallbackPerMassage: 250 },
      rent: { mode: 'monthly', monthlyAmount: 18000 },
      expenses: [
        { id: 'expense-1', category: 'supplies', date: addDays(current, -1), amount: 1250, description: 'Massage oils and herbal compresses' },
        { id: 'expense-2', category: 'supplies', date: addDays(current, -4), amount: 680, description: 'Laundry and fresh linens' },
        { id: 'expense-3', category: 'supplies', date: addDays(current, -9), amount: 420, description: 'Reception and cleaning supplies' }
      ]
    };
  }

  function validState(value) {
    return value && value.version === 1 && Array.isArray(value.staff) && Array.isArray(value.massages) && Array.isArray(value.expenses) && value.salary && value.rent;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return sampleState();
      const parsed = JSON.parse(raw);
      if (validState(parsed)) return parsed;
      storageAvailable = false;
      return sampleState();
    } catch (error) {
      storageAvailable = false;
      return sampleState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      storageAvailable = true;
    } catch (error) {
      storageAvailable = false;
    }
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  }

  function roundMoney(value) {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
  }

  function money(value) {
    return new Intl.NumberFormat(language === 'th' ? 'th-TH' : 'en-US', { style: 'currency', currency: 'THB', currencyDisplay: 'code', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(roundMoney(value || 0));
  }
  function formatDate(value) {
    if (!value) return '—';
    const [year, month, day] = value.split('-').map(Number);
    return new Intl.DateTimeFormat(language === 'th' ? 'th-TH' : 'en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(year, month - 1, day)));
  }
  function staffName(id) { return state.staff.find(person => person.id === id)?.name || 'Unknown staff'; }
  function newId(prefix) { return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`; }
  function activeStaff() { return state.staff.filter(person => person.active); }
  function inRange(date, start, end) { return (!start || date >= start) && (!end || date <= end); }
  function rangeMassages(start, end) { return state.massages.filter(item => inRange(item.date, start, end)); }
  function totalsFor(massages) {
    return { count: massages.length, minutes: massages.reduce((sum, item) => sum + Number(item.duration || 0), 0), revenue: roundMoney(massages.reduce((sum, item) => sum + Number(item.price || 0), 0)) };
  }

  function salaryFor(massages) {
    const grouped = new Map(state.staff.map(person => [person.id, { staffId: person.id, name: person.name, count: 0, minutes: 0, revenue: 0 }]));
    massages.forEach(item => {
      const row = grouped.get(item.staffId) || { staffId: item.staffId, name: staffName(item.staffId), count: 0, minutes: 0, revenue: 0 };
      row.count += 1;
      row.minutes += Number(item.duration || 0);
      row.revenue += Number(item.price || 0);
      grouped.set(item.staffId, row);
    });
    const complete = state.salary.commissionEnabled
      ? state.salary.commissionValue !== '' && Number.isFinite(Number(state.salary.commissionValue)) && Number(state.salary.commissionValue) >= 0 && (state.salary.commissionMethod === 'fixed' || (state.salary.commissionMethod === 'percentage' && Number(state.salary.commissionValue) <= 100))
      : Number.isFinite(Number(state.salary.fallbackPerMassage)) && Number(state.salary.fallbackPerMassage) >= 0 && state.salary.fallbackPerMassage !== '';
    const rows = [...grouped.values()].map(row => {
      let payout = null;
      if (complete) {
        if (state.salary.commissionEnabled) {
          payout = state.salary.commissionMethod === 'fixed'
            ? row.count * Number(state.salary.commissionValue)
            : row.revenue * Number(state.salary.commissionValue) / 100;
        } else payout = row.count * Number(state.salary.fallbackPerMassage);
      }
      return { ...row, revenue: roundMoney(row.revenue), hours: row.minutes / 60, salary: payout === null ? null : roundMoney(payout) };
    });
    return { rows, complete, payout: complete ? roundMoney(rows.reduce((sum, row) => sum + row.salary, 0)) : null };
  }

  function daysInMonth(year, monthIndex) { return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate(); }
  function allocatedRent(start, end) {
    if (!start || !end || start > end) return 0;
    if (state.rent.mode === 'daily') {
      return roundMoney(state.expenses.filter(item => item.category === 'rent' && inRange(item.date, start, end)).reduce((sum, item) => sum + Number(item.amount), 0));
    }
    const [startYear, startMonth, startDay] = start.split('-').map(Number);
    const [endYear, endMonth, endDay] = end.split('-').map(Number);
    let year = startYear;
    let month = startMonth - 1;
    let total = 0;
    while (year < endYear || (year === endYear && month <= endMonth - 1)) {
      const monthDays = daysInMonth(year, month);
      const periodStart = year === startYear && month === startMonth - 1 ? startDay : 1;
      const periodEnd = year === endYear && month === endMonth - 1 ? endDay : monthDays;
      total += Number(state.rent.monthlyAmount || 0) * (periodEnd - periodStart + 1) / monthDays;
      month += 1;
      if (month === 12) { month = 0; year += 1; }
    }
    return roundMoney(total);
  }

  function profitFor(start, end) {
    const massages = rangeMassages(start, end);
    const summary = totalsFor(massages);
    const salary = salaryFor(massages);
    const activityDates = [...state.massages.map(item => item.date), ...state.expenses.map(item => item.date)].filter(date => !end || date <= end).sort();
    const rentStart = start || activityDates[0] || end || today();
    const rentEnd = end || today();
    const rent = allocatedRent(rentStart, rentEnd);
    const supplies = roundMoney(state.expenses.filter(item => item.category === 'supplies' && inRange(item.date, start, end)).reduce((sum, item) => sum + Number(item.amount), 0));
    return { ...summary, salary, rent, supplies, profit: salary.complete ? roundMoney(summary.revenue - salary.payout - rent - supplies) : null };
  }

  function tableFor(massages, withStaff) {
    const sorted = [...massages].sort((a, b) => `${b.date}T${b.time}`.localeCompare(`${a.date}T${a.time}`));
    if (!sorted.length) return `<div class="empty-state"><div class="empty-mark" aria-hidden="true">＋</div><h3>No massage records found</h3><p>Try another date filter or add the first record for this period.</p><button class="btn btn-primary" data-action="add-massage"><span class="button-icon">+</span> Add Massage</button></div>`;
    return `<div class="table-shell"><table><thead><tr><th>Time / Date</th><th>Staff Name</th><th>Massage Duration</th><th>Price (THB)</th><th><span class="visually-hidden">Actions</span></th></tr></thead><tbody>${sorted.map(item => `<tr><td><span class="td-primary">${escapeHtml(formatDate(item.date))}</span><span class="td-muted"> · ${escapeHtml(item.time)}</span></td><td class="td-primary">${escapeHtml(staffName(item.staffId))}</td><td>${Number(item.duration)} min</td><td class="money td-primary">${money(item.price)}</td><td><div class="table-actions"><button class="icon-btn" data-action="edit-massage" data-id="${escapeHtml(item.id)}" aria-label="Edit massage for ${escapeHtml(staffName(item.staffId))}" title="Edit">✎</button><button class="icon-btn danger" data-action="delete-massage" data-id="${escapeHtml(item.id)}" aria-label="Delete massage for ${escapeHtml(staffName(item.staffId))}" title="Delete">×</button></div></td></tr>`).join('')}</tbody></table></div>`;
  }

  function summaryCard(label, value, sub, negative) {
    return `<article class="summary-card"><span class="summary-label">${escapeHtml(label)}</span><strong class="summary-value${negative ? ' negative' : ''}">${value}</strong>${sub ? `<div class="summary-sub">${escapeHtml(sub)}</div>` : ''}</article>`;
  }

  function setNav() {
    const links = page === 'home'
      ? ''
      : `<a href="#home">Home</a><a href="#staff" class="${page === 'staff' ? 'active' : ''}">Staff</a><a href="#manager/${managerTab}" class="${page === 'manager' ? 'active' : ''}">Manager</a>`;
    nav.innerHTML = links;
  }

  function renderHome() {
    app.innerHTML = `<section class="home-shell"><div class="home-content"><p class="eyebrow">RAWAI · PHUKET · THAILAND</p><h1>Care that restores.<span>Numbers that guide.</span></h1><p class="home-description">A calm workspace for daily massage records and the business reports behind them.</p><div class="role-grid"><a href="#staff" class="role-card"><span><strong>Staff</strong><small>Open the Massage List</small></span><span class="role-arrow" aria-hidden="true">↗</span></a><a href="#manager/massage" class="role-card"><span><strong>Manager</strong><small>View reports and settings</small></span><span class="role-arrow" aria-hidden="true">↗</span></a></div><p class="home-note">Demo records are stored only in this browser. Role selection is navigation, not access control.</p><div class="home-ornament" aria-hidden="true"><span class="ornament-core">Sky Eye</span></div><img class="business-photo" src="Images/banner.png" alt="Sky Eye Massage Rawai sign and massage service" width="350" height="237"></div></section><div class="home-bottom"><span>WELLNESS, WITH CLARITY</span></div>`;
  }

  function renderMassagePage(isManager) {
    const visible = state.massages.filter(item => inRange(item.date, isManager ? filters.managerStart : filters.staffDate, isManager ? filters.managerEnd : filters.staffDate) && (!isManager || !filters.managerStaff || item.staffId === filters.managerStaff));
    const title = isManager ? 'Massage Records' : 'Massage List';
    const sub = isManager ? 'Shared demo records used across every report.' : 'Record and review today’s massage services.';
    app.innerHTML = `<div class="page-wrap"><div class="page-heading"><div><p class="eyebrow">${isManager ? 'MANAGER WORKSPACE' : 'STAFF WORKSPACE'}</p><h1>${title}</h1><p class="subheading">${sub}</p></div><span class="sample-note">SAMPLE DATA INCLUDED</span></div><div class="filter-bar">${isManager ? `<div class="field"><label for="manager-start">From date</label><input id="manager-start" type="date" value="${escapeHtml(filters.managerStart)}"></div><div class="field"><label for="manager-end">To date</label><input id="manager-end" type="date" value="${escapeHtml(filters.managerEnd)}"></div><div class="field"><label for="manager-staff-filter">Staff member</label><select id="manager-staff-filter"><option value="">All staff</option>${state.staff.map(person => `<option value="${escapeHtml(person.id)}" ${filters.managerStaff === person.id ? 'selected' : ''}>${escapeHtml(person.name)}${person.active ? '' : ' · inactive'}</option>`).join('')}</select></div><button class="btn btn-secondary" data-action="apply-manager-massage-filter">Apply Filter</button><button class="btn-text" data-action="clear-manager-massage-filter">Clear</button>` : `<div class="field"><label for="staff-date-filter">Filter by date</label><input id="staff-date-filter" type="date" value="${escapeHtml(filters.staffDate)}"></div><button class="btn btn-secondary" data-action="apply-staff-filter">Apply Filter</button><button class="btn-text" data-action="clear-staff-filter">Clear</button>`}<span class="spacer"></span><span class="records-count">${visible.length} record${visible.length === 1 ? '' : 's'}</span></div>${tableFor(visible, isManager)}<div class="below-table"><button class="btn btn-primary" data-action="add-massage"><span class="button-icon">+</span> Add Massage</button><span class="records-count">Records are shared across Staff and Manager demo views.</span></div></div>`;
  }

  function renderSalary() {
    const massages = rangeMassages(filters.salaryStart, filters.salaryEnd);
    const totals = totalsFor(massages);
    const salary = salaryFor(massages);
    const policyText = !salary.complete
      ? 'Salary configuration required. Set a valid commission value or configure the fallback payout before reporting salary.'
      : state.salary.commissionEnabled
        ? (state.salary.commissionMethod === 'fixed' ? `Policy: ${money(state.salary.commissionValue)} per completed massage.` : `Policy: ${Number(state.salary.commissionValue)}% of each staff member’s massage revenue.`)
        : `Commission is disabled. Fallback policy: ${money(state.salary.fallbackPerMassage)} per completed massage.`;
    return `<section><div class="tab-title"><div><h2>Salary Report</h2><p>Massage earnings for ${formatDate(filters.salaryStart)} to ${formatDate(filters.salaryEnd)}.</p></div></div><div class="report-controls"><div class="field"><label for="salary-start">Start date</label><input type="date" id="salary-start" value="${escapeHtml(filters.salaryStart)}"></div><div class="field"><label for="salary-end">End date</label><input type="date" id="salary-end" value="${escapeHtml(filters.salaryEnd)}"></div><button class="btn btn-secondary" data-action="salary-today">Today</button><button class="btn btn-primary" data-action="apply-salary">Apply Filter</button><button class="btn-text" data-action="clear-salary">Clear filters</button></div><div class="summary-grid">${summaryCard('Total massages', totals.count, 'Completed in selected period')}${summaryCard('Total massage hours', (totals.minutes / 60).toFixed(1), 'Massage duration ÷ 60')}${summaryCard('Massage revenue', money(totals.revenue), 'THB · selected period')}${summaryCard('Staff salary payout', salary.complete ? money(salary.payout) : 'Required', 'THB · authoritative demo policy')}</div><div class="table-shell"><table><thead><tr><th>Staff Name</th><th>Massages Completed</th><th>Massage Hours</th><th>Massage Revenue (THB)</th><th>Staff Salary (THB)</th></tr></thead><tbody>${salary.rows.length ? salary.rows.map(row => `<tr><td class="td-primary">${escapeHtml(row.name)}</td><td>${row.count}</td><td>${row.hours.toFixed(1)}</td><td class="money">${money(row.revenue)}</td><td class="money td-primary">${row.salary === null ? 'Configuration required' : money(row.salary)}</td></tr>`).join('') : '<tr><td colspan="5" class="td-muted">No staff records.</td></tr>'}</tbody></table></div><p class="report-footnote">Hours reflect massage durations only; they are not employment hours.</p><div class="settings-panel"><section class="settings-block"><h3>Commission settings</h3><form id="salary-settings-form"><div class="switch-row"><div><span class="field-label">Commission enabled</span><div class="summary-sub">Use a commission-based payout</div></div><label class="switch"><input type="checkbox" name="commissionEnabled" ${state.salary.commissionEnabled ? 'checked' : ''} aria-label="Enable commission"><span class="switch-track"></span></label></div><div class="settings-grid" style="margin-top:14px"><div class="field"><label for="commission-method">Commission method</label><select id="commission-method" name="commissionMethod"><option value="fixed" ${state.salary.commissionMethod === 'fixed' ? 'selected' : ''}>Fixed per massage</option><option value="percentage" ${state.salary.commissionMethod === 'percentage' ? 'selected' : ''}>Percentage of revenue</option></select></div><div class="field"><label for="commission-value" id="commission-value-label">${state.salary.commissionMethod === 'fixed' ? 'Amount (THB)' : 'Rate (%)'}</label><input id="commission-value" name="commissionValue" type="number" min="0" step="${state.salary.commissionMethod === 'fixed' ? '0.01' : '0.01'}" value="${escapeHtml(state.salary.commissionValue)}" ${state.salary.commissionEnabled ? 'required' : ''}></div><div class="field full"><label for="fallback-value">Fallback payout per massage (THB)</label><input id="fallback-value" name="fallbackPerMassage" type="number" min="0" step="0.01" value="${escapeHtml(state.salary.fallbackPerMassage)}"><span class="summary-sub">Used explicitly whenever commission is disabled.</span></div></div><button class="btn btn-primary" type="submit" style="margin-top:14px">Save salary policy</button></form></section><aside class="settings-block"><h3>Current calculation policy</h3><p class="policy-message${salary.complete ? '' : ' incomplete'}">${escapeHtml(policyText)}</p><p class="report-footnote">Fixed commission = qualifying massage count × fixed amount. Percentage commission = qualifying massage revenue × rate. Values and totals are rounded to 2 decimal places.</p></aside></div></section>`;
  }

  function renderProfit() {
    const result = profitFor(filters.profitStart, filters.profitEnd);
    const incomplete = !result.salary.complete;
    const periodExpenses = state.expenses.filter(item => inRange(item.date, filters.profitStart, filters.profitEnd)).sort((a, b) => b.date.localeCompare(a.date));
    const rentLabel = state.rent.mode === 'monthly' ? 'Rent allocated' : 'Rent expenses';
    const rentEntryAllowed = state.rent.mode === 'daily';
    return `<section><div class="tab-title"><div><h2>Profit Report</h2><p>Revenue less staff payouts and operating expenses for ${formatDate(filters.profitStart)} to ${formatDate(filters.profitEnd)}.</p></div><button class="btn btn-primary" data-action="add-expense"><span class="button-icon">+</span> Add Expense</button></div><div class="report-controls"><div class="field"><label for="profit-start">Start date</label><input type="date" id="profit-start" value="${escapeHtml(filters.profitStart)}"></div><div class="field"><label for="profit-end">End date</label><input type="date" id="profit-end" value="${escapeHtml(filters.profitEnd)}"></div><button class="btn btn-secondary" data-action="profit-today">Today</button><button class="btn btn-primary" data-action="apply-profit">Apply Filter</button><button class="btn-text" data-action="clear-profit">Clear filters</button></div><div class="summary-grid five">${summaryCard('Massage revenue', money(result.revenue), 'THB · selected period')}${summaryCard('Rent', money(result.rent), state.rent.mode === 'monthly' ? 'Prorated by calendar day' : 'Recorded daily rent')}${summaryCard('Supplies', money(result.supplies), 'Recorded in selected period')}${summaryCard('Staff salary payout', incomplete ? 'Required' : money(result.salary.payout), 'Same policy as Salary tab')}${summaryCard('Net profit', incomplete ? 'Incomplete' : money(result.profit), incomplete ? 'Salary setup required' : 'Revenue less costs', result.profit < 0)}</div>${result.profit < 0 && !incomplete ? '<div class="negative-banner"><strong>Negative profit</strong><span>Expenses and salary exceed massage revenue in this reporting period.</span></div>' : ''}${incomplete ? '<p class="policy-message incomplete">Profit is incomplete until a valid salary payout policy is configured.</p>' : ''}<div class="table-caption">Period reconciliation</div><div class="table-shell"><table><thead><tr><th>Rent (THB)</th><th>Supplies (THB)</th><th>Staff Salary Payout (THB)</th><th>Massage Revenue (THB)</th><th>Profit (THB)</th></tr></thead><tbody><tr><td>${money(result.rent)}</td><td>${money(result.supplies)}</td><td>${incomplete ? 'Configuration required' : money(result.salary.payout)}</td><td>${money(result.revenue)}</td><td class="td-primary ${result.profit < 0 ? 'negative' : ''}">${incomplete ? 'Incomplete' : money(result.profit)}</td></tr></tbody></table></div><p class="report-footnote">Profit = Massage Revenue − Staff Salary Payout − Rent Expense − Supplies Expense. Rent method: ${state.rent.mode === 'monthly' ? 'monthly rent is allocated across calendar days in the selected period; individual rent entries are excluded to prevent double-counting.' : 'only dated rent entries are included.'}</p><div class="expense-layout"><section class="rent-config"><h3>Rent configuration</h3><p>Choose one rent method. Monthly allocation and recorded daily rent are never added together.</p><form id="rent-form"><div class="field"><label for="rent-mode">Rent method</label><select id="rent-mode" name="mode"><option value="monthly" ${state.rent.mode === 'monthly' ? 'selected' : ''}>Monthly rent allocation</option><option value="daily" ${state.rent.mode === 'daily' ? 'selected' : ''}>Recorded daily rent expenses</option></select></div><div class="field" id="monthly-rent-field" ${state.rent.mode === 'daily' ? 'hidden' : ''}><label for="monthly-rent">Monthly rent (THB)</label><input id="monthly-rent" name="monthlyAmount" type="number" min="0" step="0.01" value="${escapeHtml(state.rent.monthlyAmount)}"></div><button class="btn btn-secondary" type="submit">Save rent method</button></form><p class="report-footnote">${rentEntryAllowed ? 'Add a Rent expense for each daily rent payment.' : 'Monthly rent is allocated proportionally by calendar days, including across month and year boundaries.'}</p></section><section><div class="table-caption">Expenses in selected period</div>${periodExpenses.length ? `<div class="table-shell"><table><thead><tr><th>Category</th><th>Date</th><th>Amount (THB)</th><th>Description</th><th></th></tr></thead><tbody>${periodExpenses.map(item => `<tr><td>${item.category === 'rent' ? 'Rent' : 'Supplies'}${item.category === 'rent' && !rentEntryAllowed ? '<span class="td-muted"> · excluded by monthly method</span>' : ''}</td><td>${formatDate(item.date)}</td><td class="money">${money(item.amount)}</td><td>${escapeHtml(item.description)}</td><td><div class="table-actions"><button class="icon-btn" data-action="edit-expense" data-id="${escapeHtml(item.id)}" aria-label="Edit expense" title="Edit">✎</button><button class="icon-btn danger" data-action="delete-expense" data-id="${escapeHtml(item.id)}" aria-label="Delete expense" title="Delete">×</button></div></td></tr>`).join('')}</tbody></table></div>` : '<div class="table-shell"><div class="empty-state"><h3>No expenses in this period</h3><p>Expenses you add will appear here.</p></div></div>'}</section></div></section>`;
  }

  function renderStaff() {
    return `<section><div class="tab-title"><div><h2>Staff List</h2><p>Manage demo staff records. Inactive staff stay linked to historical massages.</p></div><button class="btn btn-primary" data-action="add-staff"><span class="button-icon">+</span> Add Staff</button></div><div class="table-shell">${state.staff.length ? `<table><thead><tr><th>Staff Name</th><th>Status</th><th>Actions</th></tr></thead><tbody>${state.staff.map(person => `<tr><td class="td-primary">${escapeHtml(person.name)}</td><td><span class="status-pill ${person.active ? 'active' : 'inactive'}">${person.active ? 'Active' : 'Inactive'}</span></td><td><div class="table-actions"><button class="icon-btn" data-action="edit-staff" data-id="${escapeHtml(person.id)}" aria-label="Edit ${escapeHtml(person.name)}" title="Edit">✎</button><button class="btn-text" data-action="toggle-staff" data-id="${escapeHtml(person.id)}">${person.active ? 'Deactivate' : 'Activate'}</button></div></td></tr>`).join('')}</tbody></table>` : '<div class="empty-state"><div class="empty-mark">＋</div><h3>No staff members yet</h3><p>Add a staff member to use in massage records.</p></div>'}</div><p class="report-footnote">Permanent deletion is intentionally unavailable so historical massage associations remain intact.</p></section>`;
  }

  function renderManager() {
    const tabs = [['massage', 'Massage'], ['salary', 'Salary'], ['profit', 'Profit'], ['staff', 'Staff List']];
    app.innerHTML = `<div class="page-wrap"><div class="page-heading manager-head"><div><p class="eyebrow">MANAGEMENT OVERVIEW</p><h1>Manager Dashboard</h1><p class="subheading">Demo reporting and business settings · not access controlled</p></div><button class="btn btn-secondary" data-action="reset-demo" title="Restore initial sample data">↺ Reset Demo Data</button></div><div class="manager-tabs" role="tablist" aria-label="Manager reports">${tabs.map(([id, label]) => `<button role="tab" aria-selected="${managerTab === id}" data-action="manager-tab" data-tab="${id}">${label}</button>`).join('')}</div><div role="tabpanel">${managerTab === 'massage' ? `<div class="tab-title"><div><h2>Massage Records</h2><p>Shared with the Staff Massage List.</p></div><span class="sample-note">${state.massages.length} TOTAL RECORD${state.massages.length === 1 ? '' : 'S'}</span></div>${massageManagerContents()}` : ''}${managerTab === 'salary' ? renderSalary() : ''}${managerTab === 'profit' ? renderProfit() : ''}${managerTab === 'staff' ? renderStaff() : ''}<div class="clear-data"><div><strong>Demo data controls</strong><p>Reset restores sample records. Clear removes all records from this browser.</p></div><button class="btn btn-danger" data-action="clear-demo">Clear All Demo Data</button></div></div></div>`;
    if (managerTab === 'profit') bindProfitVisibility();
    if (managerTab === 'salary') bindSalaryVisibility();
  }

  function massageManagerContents() {
    const visible = state.massages.filter(item => inRange(item.date, filters.managerStart, filters.managerEnd) && (!filters.managerStaff || item.staffId === filters.managerStaff));
    return `<div class="filter-bar"><div class="field"><label for="manager-start">From date</label><input id="manager-start" type="date" value="${escapeHtml(filters.managerStart)}"></div><div class="field"><label for="manager-end">To date</label><input id="manager-end" type="date" value="${escapeHtml(filters.managerEnd)}"></div><div class="field"><label for="manager-staff-filter">Staff member</label><select id="manager-staff-filter"><option value="">All staff</option>${state.staff.map(person => `<option value="${escapeHtml(person.id)}" ${filters.managerStaff === person.id ? 'selected' : ''}>${escapeHtml(person.name)}${person.active ? '' : ' · inactive'}</option>`).join('')}</select></div><button class="btn btn-secondary" data-action="apply-manager-massage-filter">Apply Filter</button><button class="btn-text" data-action="clear-manager-massage-filter">Clear</button><span class="spacer"></span><span class="records-count">${visible.length} record${visible.length === 1 ? '' : 's'}</span></div>${tableFor(visible, true)}<div class="below-table"><button class="btn btn-primary" data-action="add-massage"><span class="button-icon">+</span> Add Massage</button></div>`;
  }

  function bindProfitVisibility() {
    const mode = document.getElementById('rent-mode');
    if (mode) mode.addEventListener('change', () => {
      const monthly = document.getElementById('monthly-rent-field');
      if (monthly) monthly.hidden = mode.value === 'daily';
    });
  }

  function bindSalaryVisibility() {
    const method = document.getElementById('commission-method');
    const enabled = document.querySelector('[name="commissionEnabled"]');
    const amount = document.getElementById('commission-value');
    const updateRequired = () => { if (amount && enabled) amount.required = enabled.checked; };
    if (enabled) enabled.addEventListener('change', updateRequired);
    updateRequired();
    if (method) method.addEventListener('change', () => {
      const label = document.getElementById('commission-value-label');
      if (label) label.textContent = method.value === 'fixed' ? 'Amount (THB)' : 'Rate (%)';
    });
  }

  function render() {
    setNav();
    if (page === 'home') renderHome();
    else if (page === 'staff') renderMassagePage(false);
    else renderManager();
    translatePage();
    if (!storageAvailable) showToast('Browser storage is unavailable; changes may not persist.', true);
  }

  function toast(message, isError) {
    const item = document.createElement('div');
    item.className = `toast${isError ? ' error' : ''}`;
    item.setAttribute('role', isError ? 'alert' : 'status');
    item.textContent = translatedText(message);
    toastRegion.append(item);
    window.setTimeout(() => item.remove(), 3200);
  }
  function showToast(message, isError) { toast(message, isError); }

  function dialogForm(title, subtitle, fields, submitLabel, onSubmit) {
    dialog.innerHTML = `<form id="modal-form"><div class="dialog-head"><div><h2 id="dialog-title">${escapeHtml(title)}</h2><p>${escapeHtml(subtitle || '')}</p></div><button type="button" class="dialog-close" data-action="close-dialog" aria-label="Close dialog">×</button></div><div class="dialog-body">${fields}</div><div class="dialog-actions"><button type="button" class="btn btn-secondary" data-action="close-dialog">Cancel</button><button class="btn btn-primary" type="submit">${escapeHtml(submitLabel)}</button></div></form>`;
    translatePage(dialog);
    dialog.showModal();
    const form = dialog.querySelector('#modal-form');
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const submit = form.querySelector('[type="submit"]');
      submit.disabled = true;
      try {
        const values = Object.fromEntries(new FormData(form).entries());
        await onSubmit(values);
      } finally {
        if (dialog.open) submit.disabled = false;
      }
    });
  }

  function massageDialog(id) {
    const existing = state.massages.find(item => item.id === id);
    const choices = state.staff.filter(person => person.active || person.id === existing?.staffId);
    if (!choices.length) { toast('Add or activate a staff member before recording a massage.', true); return; }
    const personOptions = choices.map(person => `<option value="${escapeHtml(person.id)}" ${existing?.staffId === person.id ? 'selected' : ''}>${escapeHtml(person.name)}${person.active ? '' : ' · inactive'}</option>`).join('');
    const fields = `<div class="dialog-fields"><div class="field"><label for="massage-date">Date</label><input id="massage-date" name="date" type="date" required value="${escapeHtml(existing?.date || today())}"></div><div class="field"><label for="massage-time">Time (Thailand)</label><input id="massage-time" name="time" type="time" required value="${escapeHtml(existing?.time || thaiTime())}"></div><div class="field full"><label for="massage-staff">Staff Name</label><select id="massage-staff" name="staffId" required>${personOptions}</select></div><div class="field"><label for="massage-duration">Massage Duration (minutes)</label><input id="massage-duration" name="duration" type="number" min="1" max="600" step="1" required value="${escapeHtml(existing?.duration || 60)}"></div><div class="field"><label for="massage-price">Price (THB)</label><input id="massage-price" name="price" type="number" min="0" max="1000000" step="0.01" required value="${escapeHtml(existing?.price ?? 700)}"></div></div><p class="dialog-hint">Business date and time are recorded in Thailand local time. This demo stores records in this browser only.</p>`;
    dialogForm(existing ? 'Edit massage' : 'Add massage', 'Massage List · Asia/Bangkok', fields, existing ? 'Save changes' : 'Save massage', values => {
      const price = Number(values.price);
      const duration = Number(values.duration);
      if (!Number.isFinite(price) || price < 0 || !Number.isInteger(duration) || duration < 1 || duration > 600 || !/^\d{4}-\d{2}-\d{2}$/.test(values.date) || !/^\d{2}:\d{2}$/.test(values.time)) {
        toast('Check the date, time, duration, and price values.', true); return;
      }
      const duplicate = state.massages.some(item => item.id !== existing?.id && item.date === values.date && item.time === values.time && item.staffId === values.staffId);
      if (duplicate && !askConfirmation('A massage for this staff member already exists at this date and time. Save another record anyway?')) return;
      const record = { id: existing?.id || newId('massage'), date: values.date, time: values.time, staffId: values.staffId, duration, price: roundMoney(price), createdAt: existing?.createdAt || new Date().toISOString() };
      if (existing) state.massages = state.massages.map(item => item.id === existing.id ? record : item);
      else state.massages.push(record);
      saveState(); dialog.close(); render(); toast(existing ? 'Massage record updated.' : 'Massage record saved.');
    });
  }

  function staffDialog(id) {
    const existing = state.staff.find(person => person.id === id);
    const fields = `<div class="field"><label for="staff-name">Staff name</label><input id="staff-name" name="name" type="text" minlength="2" maxlength="80" required autocomplete="off" value="${escapeHtml(existing?.name || '')}" placeholder="Enter staff name"></div><p class="dialog-hint">Names are for demo display only; no staff accounts or credentials are created.</p>`;
    dialogForm(existing ? 'Edit staff member' : 'Add staff member', 'Staff List', fields, existing ? 'Save changes' : 'Add staff', values => {
      const name = values.name.trim().replace(/\s+/g, ' ');
      if (name.length < 2 || name.length > 80) { toast('Enter a name between 2 and 80 characters.', true); return; }
      if (state.staff.some(person => person.id !== existing?.id && person.name.toLocaleLowerCase() === name.toLocaleLowerCase())) { toast('A staff member with that name already exists.', true); return; }
      if (existing) existing.name = name;
      else state.staff.push({ id: newId('staff'), name, active: true });
      saveState(); dialog.close(); render(); toast(existing ? 'Staff name updated.' : 'Staff member added.');
    });
  }

  function expenseDialog(id) {
    const existing = state.expenses.find(item => item.id === id);
    const choices = state.rent.mode === 'daily' ? '<option value="rent">Rent</option><option value="supplies">Supplies</option>' : `${existing?.category === 'rent' ? '<option value="rent">Rent · switch to daily method to include</option>' : ''}<option value="supplies">Supplies</option>`;
    const fields = `<div class="dialog-fields"><div class="field"><label for="expense-category">Category</label><select id="expense-category" name="category">${choices}</select></div><div class="field"><label for="expense-date">Date</label><input id="expense-date" type="date" name="date" required value="${escapeHtml(existing?.date || today())}"></div><div class="field"><label for="expense-amount">Amount (THB)</label><input id="expense-amount" type="number" name="amount" min="0.01" max="100000000" step="0.01" required value="${escapeHtml(existing?.amount ?? '')}" placeholder="0.00"></div><div class="field full"><label for="expense-description">Description</label><input id="expense-description" type="text" name="description" maxlength="140" required value="${escapeHtml(existing?.description || '')}" placeholder="What was this expense for?"></div></div>${state.rent.mode === 'monthly' ? '<p class="dialog-hint">Rent uses the monthly allocation setting. This form records supplies only, preventing rent double-counting.</p>' : ''}`;
    dialogForm(existing ? 'Edit expense' : 'Add expense', 'Business expenses · THB', fields, existing ? 'Save changes' : 'Save expense', values => {
      const amount = Number(values.amount);
      const description = values.description.trim();
      if (!Number.isFinite(amount) || amount <= 0 || amount > 100000000 || description.length < 1 || description.length > 140 || !/^\d{4}-\d{2}-\d{2}$/.test(values.date)) { toast('Enter a valid date, amount, and description.', true); return; }
      if (values.category === 'rent' && state.rent.mode !== 'daily') { toast('Switch rent to daily entries before adding a rent expense.', true); return; }
      const item = { id: existing?.id || newId('expense'), category: values.category, date: values.date, amount: roundMoney(amount), description };
      if (existing) state.expenses = state.expenses.map(record => record.id === existing.id ? item : record);
      else state.expenses.push(item);
      saveState(); dialog.close(); render(); toast(existing ? 'Expense updated.' : 'Expense recorded.');
    });
    if (existing) dialog.querySelector('[name="category"]').value = existing.category;
  }

  function confirmDeleteMassage(id) {
    const item = state.massages.find(record => record.id === id);
    if (!item || !askConfirmation(`Delete the ${formatDate(item.date)} massage for ${staffName(item.staffId)}? Reports will recalculate.`)) return;
    state.massages = state.massages.filter(record => record.id !== id); saveState(); render(); toast('Massage record deleted.');
  }
  function confirmDeleteExpense(id) {
    const item = state.expenses.find(record => record.id === id);
    if (!item || !askConfirmation(`Delete this ${item.category} expense of ${money(item.amount)}?`)) return;
    state.expenses = state.expenses.filter(record => record.id !== id); saveState(); render(); toast('Expense deleted.');
  }

  function handleAction(action, target) {
    const id = target.dataset.id;
    if (action === 'set-language') {
      language = target.dataset.language === 'th' ? 'th' : 'en';
      try { localStorage.setItem(LANGUAGE_KEY, language); } catch (error) { /* Language still changes for this page view. */ }
      render();
      updateClock();
    } else if (action === 'add-massage') massageDialog();
    else if (action === 'edit-massage') massageDialog(id);
    else if (action === 'delete-massage') confirmDeleteMassage(id);
    else if (action === 'add-staff') staffDialog();
    else if (action === 'edit-staff') staffDialog(id);
    else if (action === 'toggle-staff') {
      const person = state.staff.find(item => item.id === id);
      if (person && (!person.active || askConfirmation(`Deactivate ${person.name}? Historical records will remain.`))) {
        person.active = !person.active; saveState(); render(); toast(person.active ? 'Staff member activated.' : 'Staff member deactivated.');
      }
    } else if (action === 'add-expense') expenseDialog();
    else if (action === 'edit-expense') expenseDialog(id);
    else if (action === 'delete-expense') confirmDeleteExpense(id);
    else if (action === 'manager-tab') { managerTab = target.dataset.tab; location.hash = `manager/${managerTab}`; render(); }
    else if (action === 'close-dialog') dialog.close();
    else if (action === 'apply-staff-filter') { filters.staffDate = document.getElementById('staff-date-filter').value; render(); }
    else if (action === 'clear-staff-filter') { filters.staffDate = ''; render(); }
    else if (action === 'apply-manager-massage-filter') {
      filters.managerStart = document.getElementById('manager-start').value; filters.managerEnd = document.getElementById('manager-end').value; filters.managerStaff = document.getElementById('manager-staff-filter').value;
      if (filters.managerStart && filters.managerEnd && filters.managerStart > filters.managerEnd) { toast('Start date must be on or before end date.', true); return; }
      render();
    } else if (action === 'clear-manager-massage-filter') { filters.managerStart = ''; filters.managerEnd = ''; filters.managerStaff = ''; render(); }
    else if (action === 'salary-today') { filters.salaryStart = today(); filters.salaryEnd = today(); render(); }
    else if (action === 'apply-salary') {
      filters.salaryStart = document.getElementById('salary-start').value; filters.salaryEnd = document.getElementById('salary-end').value;
      if (filters.salaryStart && filters.salaryEnd && filters.salaryStart > filters.salaryEnd) { toast('Start date must be on or before end date.', true); return; }
      render();
    } else if (action === 'clear-salary') { filters.salaryStart = ''; filters.salaryEnd = ''; render(); }
    else if (action === 'profit-today') { filters.profitStart = today(); filters.profitEnd = today(); render(); }
    else if (action === 'apply-profit') {
      filters.profitStart = document.getElementById('profit-start').value; filters.profitEnd = document.getElementById('profit-end').value;
      if (filters.profitStart && filters.profitEnd && filters.profitStart > filters.profitEnd) { toast('Start date must be on or before end date.', true); return; }
      render();
    } else if (action === 'clear-profit') { filters.profitStart = ''; filters.profitEnd = ''; render(); }
    else if (action === 'reset-demo') {
      if (askConfirmation('Reset this browser to the original sample data? Your current demo edits will be replaced.')) { state = sampleState(); saveState(); render(); toast('Sample demo data restored.'); }
    } else if (action === 'clear-demo') {
      if (askConfirmation('Clear all staff, massages, expenses, and salary/rent settings from this browser? This cannot be undone.')) {
        state = { version: 1, staff: [], massages: [], expenses: [], salary: { commissionEnabled: false, commissionMethod: 'fixed', commissionValue: '', fallbackPerMassage: '' }, rent: { mode: 'monthly', monthlyAmount: 0 } };
        saveState(); render(); toast('All demo data cleared.');
      }
    }
  }

  document.addEventListener('click', event => {
    const target = event.target.closest('[data-action]');
    if (target) { event.preventDefault(); handleAction(target.dataset.action, target); }
  });

  document.addEventListener('submit', event => {
    if (event.target.id === 'salary-settings-form') {
      event.preventDefault();
      const form = event.target;
      const values = Object.fromEntries(new FormData(form).entries());
      const enabled = form.elements.commissionEnabled.checked;
      const method = values.commissionMethod;
      const commissionValue = values.commissionValue === '' ? '' : Number(values.commissionValue);
      const fallback = values.fallbackPerMassage === '' ? '' : Number(values.fallbackPerMassage);
      if ((enabled && (values.commissionValue === '' || !Number.isFinite(commissionValue) || commissionValue < 0 || !['fixed', 'percentage'].includes(method) || (method === 'percentage' && commissionValue > 100))) || (fallback !== '' && (!Number.isFinite(fallback) || fallback < 0))) {
        toast('Enter a valid commission and fallback payout.', true); return;
      }
      state.salary = { commissionEnabled: enabled, commissionMethod: method, commissionValue, fallbackPerMassage: fallback };
      saveState(); render(); toast('Salary calculation policy saved.');
    } else if (event.target.id === 'rent-form') {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(event.target).entries());
      const monthlyAmount = values.monthlyAmount === '' ? '' : Number(values.monthlyAmount);
      if (values.mode === 'monthly' && (!Number.isFinite(monthlyAmount) || monthlyAmount < 0)) { toast('Enter a valid monthly rent amount.', true); return; }
      state.rent = { mode: values.mode, monthlyAmount: values.mode === 'monthly' ? roundMoney(monthlyAmount) : state.rent.monthlyAmount };
      saveState(); render(); toast('Rent settings saved. Only the selected rent method is counted.');
    }
  });

  function route() {
    const path = location.hash.replace(/^#\/?/, '').split('/');
    if (path[0] === 'staff') page = 'staff';
    else if (path[0] === 'manager') { page = 'manager'; managerTab = ['massage', 'salary', 'profit', 'staff'].includes(path[1]) ? path[1] : 'massage'; }
    else page = 'home';
    render();
    if (page !== 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateClock() {
    const clock = document.getElementById('local-clock');
    if (clock) clock.textContent = `${new Intl.DateTimeFormat(language === 'th' ? 'th-TH' : 'en-GB', { timeZone: THAI_ZONE, day: '2-digit', month: 'short', year: 'numeric' }).format(new Date())} · ${thaiTime()} ICT`;
  }

  window.addEventListener('hashchange', route);
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  window.addEventListener('storage', event => {
    if (event.key === STORAGE_KEY && event.newValue) {
      try { const updated = JSON.parse(event.newValue); if (validState(updated)) { state = updated; render(); } } catch (error) { /* Ignore another tab's malformed demo data. */ }
    }
  });
  updateClock();
  window.setInterval(updateClock, 30000);
  try { if (!localStorage.getItem(STORAGE_KEY)) saveState(); } catch (error) { storageAvailable = false; }
  route();
})();