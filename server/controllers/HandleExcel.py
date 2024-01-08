import sys
import json
import ast
import random
import openpyxl 

template = '../../Excel vb'


class WorkOrder:

    def __init__(self, workOrder):
        self.workOrder= workOrder

    def __create__(self):
        print("Creating a work order for PN:", self.workOrder['part_number'])

        workbook = openpyxl.load_workbook(r'C:\Users\whois\Coding\srs\ExcelArchive\template\WorkOrderTemplate.xlsx')
        worksheet = workbook.active

        worksheet['A2'].value = self.workOrder['part_number']
        worksheet['C2'].value = self.workOrder['serial_number']
        worksheet['E2'].value = self.workOrder['customer']

        tools = self.workOrder['tools']
        print(tools)

        row = 5
        for tool in tools:
            worksheet['A' + str(row)].value = tool['part']
            worksheet['C' + str(row)].value = tool['date']

            row += 1


        wo = random.randint(0, 99999)

        fn = rf"C:\Users\whois\Coding\srs\ExcelArchive\{self.workOrder['part_number']}_{wo}.xlsx"

        workbook.save(fn)


# Take incoming data from typescript file and format it to json
# Reasign input data to workOrder var
input_data = json.loads(sys.argv[1])
workOrder = input_data['workOrder']

# Get each field from workOrder
part_number = workOrder['part_number']
serial_number = workOrder['serial_number']
customer = workOrder['customer']
tools = workOrder['tools']

# Instantiate WorkOrder class 
processor = WorkOrder(workOrder)
processor.__create__()


print("It was a success.")



sys.stdout.flush()



####################################################################################################################################################################
### output1 = json.dumps({"tools": tools})