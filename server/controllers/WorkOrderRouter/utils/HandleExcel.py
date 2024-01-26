import sys
import json
import ast
import random
import openpyxl 

class WorkOrder:

    def __init__(self, workOrder):
        self.workOrder= workOrder


    def __create__(self):
        print("Creating a work order for PN:", self.workOrder['part_number'])

        workbook = openpyxl.load_workbook(r'C:\Users\whois\Coding\srs\ExcelArchive\template\WorkOrderTemplate.xlsx')
        worksheet = workbook.active

        worksheet['A3'].value = self.workOrder['part_number']
        worksheet['C3'].value = self.workOrder['serial_number']
        worksheet['E3'].value = self.workOrder['customer']
        worksheet['C1'].value = self.workOrder['order_number']

        tools = self.workOrder['tools']

        row = 6
        for tool in tools:
            worksheet['A' + str(row)].value = tool['part']
            worksheet['C' + str(row)].value = tool['date']

            row += 1
    
        fn = rf"C:\Users\whois\Coding\srs\ExcelArchive\{self.workOrder['part_number']}_{self.workOrder['order_number']}.xlsx"

        workbook.save(fn)


# Take incoming data from typescript file and format it to json
# Reasign input data to workOrder var
input_data = json.loads(sys.argv[1])
workOrder = input_data['workOrder']

# Get each field from workOrder
part_number = workOrder['part_number']
serial_number = workOrder['serial_number']
customer = workOrder['customer']
order_number = workOrder['order_number']
tools = workOrder['tools']

# Instantiate WorkOrder class 
processor = WorkOrder(workOrder)
processor.__create__()


print("Closing Python.")

sys.stdout.flush()



####################################################################################################################################################################
### output1 = json.dumps({"tools": tools})