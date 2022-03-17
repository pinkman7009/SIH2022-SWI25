import 'package:get_it/get_it.dart';
import 'calls_and_messages.dart';

GetIt locator = new GetIt.asNewInstance();

void setupLocator() {
  locator.registerSingleton(CallsAndMessagesService());
}
